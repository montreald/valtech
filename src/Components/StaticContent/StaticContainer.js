import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core';
import style from './style.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  btnDiscover:{
    margin: theme.spacing.unit,
    padding: 10,
    textTransform: "uppercase",
    borderTop: "1px solid #002140",
    borderRight: "1px solid #002140",
    borderLeft: "1px solid #002140",
    borderBottom:"transparent",
    borderRadius:0,
    transition: "all ease-in-out",
    alignSelf:"center",
    maxWidth:'30vw',
    marginBottom:60,
  '&:hover': {
    boxShadow: 'none',
    borderColor: 'transparent',
  },
  }
});

class GuttersGrid extends React.Component {
  state = {
    spacing: '16',
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <div className="container__wrapper">
        <Typography variant="display2"
                    className="title"
                    color="textSecondary">
          Overall success + growth
        </Typography>
        <div className="items__container">
          <div className="results__item">
            <Typography variant="display4"
                        color="textSecondary">
              12<span className="persent">%</span>
            </Typography>
            <Typography className="item__content">
              Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea.</Typography>
          </div>
          <div className="results__item">
            <Typography variant="display4"
                        color="textSecondary">
              75<span className="persent">%</span>
            </Typography>
            <Typography className="item__content">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea.
            </Typography>
          </div>
          <div className="results__item">
            <Typography variant="display4"
                        color="textSecondary">
              28<span className="persent">%</span>
            </Typography>
            <Typography className="item__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor
            </Typography>
          </div>
        </div>
        <Button variant="outlined" className={classes.btnDiscover}>
          discover performance
        </Button>
      </div>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);