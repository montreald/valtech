import React , {Fragment} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'


const styles = theme => ({
  rootButtons: {
    display: 'flex',
    FLexFlow:"row",
    justifyContent: 'flex-end',
    width:"100%",
    marginLeft: "auto",
    alignSelf: 'center',
    borderBottom: "1px solid #f3f7f7bf"
  },
  container: {
    display: 'flex',
    flexWrap: 'nowrap'
  },
  margin: {
    margin: theme.spacing.unit
  },
  button: {
    color: '#fff',
    minWidth: '120px',
    minHeight:'auto',
  }
})


function ItemButtons(props) {
  const { classes } = props
  return (
      <Fragment>
        <div className={classes.rootButtons}>
          <Button
              className={classes.button}
          >
            Research
          </Button>
          <Button
              className={classes.button}
          >
            Locations
          </Button>
          <Button
              className={classes.button}
          >
            Contributions
          </Button>
          <Button
              className={classes.button}
          >
            News hub
          </Button>
          <Button
              className={classes.button}
          >
            FR
          </Button>
        </div>
      </Fragment>
  )
}

ItemButtons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ItemButtons)
