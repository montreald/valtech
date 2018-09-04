import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { ListItem, ListItemIcon } from '@material-ui/core'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
})

class species extends Component {
  constructor() {
    super()
    this.state = {
      species: []
    }
  }

  componentDidMount() {
    return axios
      .get('https://swapi.co/api/species/')
      .then(results => {
        return results
      })
      .then(respond => {
        let species = respond.data.results.map((p, i) => {
          return <li key={i}>{p.name}</li>
        })
        this.setState({ species: species })
      })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <h1 className="results__title">Species</h1>
        <ListItem button>
          <ListItemIcon>
            <ul className="itemData">{this.state.species}</ul>
          </ListItemIcon>
        </ListItem>
      </div>
    )
  }
}

species.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(species)
