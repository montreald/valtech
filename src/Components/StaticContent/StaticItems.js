import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardContent, Typography} from '@material-ui/core/Card';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="item_container">
      <h2>Overall success + growth</h2>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            12%
          </Typography>
          <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            75%
          </Typography>
          <Typography component="p">
            Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
      <CardContent>
        <Typography variant="headline" component="h2">
          28%
        </Typography>
        <Typography component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);