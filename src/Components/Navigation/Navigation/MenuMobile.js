import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {IconButton, Drawer, MenuItem} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


export const styles = theme => ({
  root: {
    flexGrow: 1,
    '&$selected': {
      backgroundColor: theme.palette.action.selected
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 0
  },
  rightDrawer: {
    width: 120
  },
  fullList: {
    width: 'auto',
    '&$selected': {
      backgroundColor: theme.palette.action.selected
    }
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

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  render() {
    const { classes, menuButtons } = this.props

    return (
      <div className="mobileMenu">
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon onClick={this.toggleDrawer('right', true)} />
        </IconButton>
        <Drawer anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {menuButtons.map((item, i) =>{
              return(
                <MenuItem  className={classes.rightDrawer}
                  key={i}
                  selected={i === this.state.selectedIndex}
                  onClick={event => this.handleMenuItemClick(event, i)}
                >
                  {item}
                </MenuItem>
              )
            })}
          </div>
        </Drawer>
      </div>
    )
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TopBar)
