import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import configureStore from '../store'
import Layout from './Layout'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import { TopHeaderLogo, SimpleBottomNavigation } from '../Components/Navigation'
import 'typeface-roboto'

/*Import Views*/
import { People, Planets, Vehicles, Films, Species } from '../Components/Views'

const store = configureStore()

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#002140'
    },
    secondary: lightBlue
  },typography: {
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
      '"Segoe UI Symbol"',
    ].join(','),
  },
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
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
              <TopHeaderLogo />
              <Switch>
                <Route exact path="/" component={Layout} />
                <Route path="/species" component={Species} />
                <Route path="/people" component={People} />
                <Route path="/planets" component={Planets} />
                <Route path="/vehicles" component={Vehicles} />
              </Switch>
              <SimpleBottomNavigation />
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    )
  }
}

Root.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Root)
