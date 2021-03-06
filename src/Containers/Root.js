import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import { TopHeaderLogo, TopHeader } from '../Components/Navigation'
import StaticContainer from '../Components/StaticContent/StaticContainer'
import DynamicContainer from '../Components/DynamicContent/DynamicContainer'
import 'typeface-roboto'
import { news, data } from '../store'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#002140'
    },
    textPrimary: {},
    secondary: lightBlue
  },
  typography: {
    StaticContainer: {
      root: {
        color: '#002140'
      }
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}

class Root extends Component {
  render() {
    const { classes } = this.props
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <TopHeader />
          <TopHeaderLogo />
          <StaticContainer />
          <DynamicContainer news={news} data={data} />
        </div>
      </MuiThemeProvider>
    )
  }
}

Root.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Root)
