import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Tabs, Tab, Typography, Button} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import style from './style.css'


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 6 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: "#002140",
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <div className="tabs__container"
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Button className={classes.button}>1998</Button>
            <Button className={classes.button}>2002</Button>
            <Button className={classes.button}>2006</Button>
            <Button className={classes.button}>2012</Button>
            <Button className={classes.button}>2014</Button>
            <Button className={classes.button}>2018</Button>
          </div>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'ltr' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Typography variant="headline" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="h1">
              Lorem ipsum projection lorem
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Typography>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Typography variant="headline" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="h1">
              Lorem ipsum projection lorem
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Typography>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Typography variant="headline" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="h1">
              Lorem ipsum projection lorem
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Typography>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Typography variant="headline" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="h1">
              Lorem ipsum projection lorem
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Typography>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Typography variant="headline" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="h1">
              Lorem ipsum projection lorem
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Typography>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Typography variant="headline" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="h1">
              Lorem ipsum projection lorem
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Typography>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);