import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core'

/*import items and component*/
import TopHeader from './TopHeader'

const style = {
    border: "none"
}

export const styles = theme => ({
  root: {
    flexGrow: 1,
    '&$selected': {
      backgroundColor: theme.palette.action.selected
    }
  },
  flex: {
    color: '#fff'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto',
    '&$selected': {
      backgroundColor: theme.palette.action.selected
    }
  },
  noBorder:{
    display: 'flex',
    fLexFlow:"row",
    justifyContent: 'flex-end',
    width:"100%",
    marginLeft: "auto",
    alignSelf: 'center',
  },
  button: {
    color: '#fff',
    minWidth: '120px',
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
    '&:active': {
      boxShadow: 'none',
      color: "#bdbdbd",
    },
  }
})

class TopBar extends Component {
  button = null

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    anchorEl: null,
    selectedIndex: 1
  }

  render() {
    const {
      classes,
      className,
      component,
      selected,
      role,
      ...other
    } = this.props

    return (
      <div>
        <AppBar position="static">
          <TopHeader />
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              LOGO
            </Typography>
            <div className={classes.noBorder}>
              <Button
                  className={classes.button}
              >
                We are ipsum
              </Button>
              <Button
                  className={classes.button}
              >
                We are dolr
              </Button>
              <Button
                  className={classes.button}
              >
                iopsum
              </Button>
              <Button
                  className={classes.button}
              >
                amet
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TopBar)
