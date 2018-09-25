import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

/*import items and component*/
import TopHeader from './TopHeader'
import MobileMenu from './MenuMobile'

const style = {
  border: 'none'
}

const menuButtons = ['We are ipsum', 'We are dolr', 'iopsum', 'amet']

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
  noBorder: {
    display: 'flex',
    LexFlow: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginLeft: 'auto',
    alignSelf: 'center'
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
      '"Segoe UI Symbol"'
    ].join(','),
    '&:active': {
      boxShadow: 'none',
      color: '#bdbdbd'
    }
  }
})

class TopBar extends Component {
  button = null

  render() {
    const { classes } = this.props

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
              {menuButtons.map((item, i) => {
                return (
                  <Button key={i} className={classes.button}>
                    {item}
                  </Button>
                )
              })}
            </div>
            <MobileMenu menuButtons={menuButtons} />
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
