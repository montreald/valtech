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

class Planets extends Component {
  constructor() {
    super()
    this.state = {
      planets: []
    }
  }

  componentDidMount() {
    return axios
      .get('https://swapi.co/api/planets/')
      .then(results => {
        return results
      })
      .then(respond => {
        let planets = respond.data.results.map((p, i) => {
          return <li key={i}>{p.name}</li>
        })
        this.setState({ planets: planets })
      })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <h1 className="results__title">Planets</h1>
        <ListItem button>
          <ListItemIcon>
            <ul className="itemData">{this.state.planets}</ul>
          </ListItemIcon>
        </ListItem>
      </div>
    )
  }
}

Planets.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Planets)
