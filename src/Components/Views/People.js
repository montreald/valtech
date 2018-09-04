import React, { Component, Fragment } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { ListItem, ListItemIcon, Devider } from '@material-ui/core'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
})

class People extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    return axios
      .get('https://swapi.co/api/people/')
      .then(results => {
        return results
      })
      .then(respond => {
        let people = respond.data.results.map((p, i) => {
          return <li key={i}>{p.name}</li>
        })
        this.setState({ people: people })
      })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <h1 className="results__title">People</h1>
        <ListItem button>
          <ListItemIcon>
            <ul className="itemData">{this.state.people}</ul>
          </ListItemIcon>
        </ListItem>
      </div>
    )
  }
}

People.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(People)
