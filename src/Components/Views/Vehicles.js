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

class Vehicles extends Component {
  constructor() {
    super()
    this.state = {
      vehicles: []
    }
  }

  componentDidMount() {
    return axios
      .get('https://swapi.co/api/vehicles/')
      .then(results => {
        return results
      })
      .then(respond => {
        let vehicles = respond.data.results.map((p, i) => {
          return <li key={i}>{p.name}</li>
        })
        this.setState({ vehicles: vehicles })
      })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <h1 className="results__title">Vehicles</h1>
        <ListItem button>
          <ListItemIcon>
            <ul className="itemData">{this.state.vehicles}</ul>
          </ListItemIcon>
        </ListItem>
      </div>
    )
  }
}

Vehicles.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Vehicles)
