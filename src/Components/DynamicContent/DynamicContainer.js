import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  Tabs,
  Tab,
  Typography,
  Card,
  CardContent,
  AppBar
} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
const tabsArray = [1998, 2002, 2006, 2012, 2014, 2018]

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8'
  },
  tabsIndicator: {
    background: 'transparent'
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    maxWidth: '10%',
    fontWeight: theme.typography.fontWeightRegular,
    border: '1px solid #000',
    background: '#fff',
    zIndex: 5,
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
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
      borderColor: '#40a9ff'
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium
    },
    '&:focus': {
      color: '#40a9ff'
    }
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%'
  },
  tabSelected: {
    borderColor: '#40a9ff'
  },
  typography: {
    padding: theme.spacing.unit * 3
  }
})

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 6 }}>
      {children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
}

class DynamicContainer extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render() {
    const { classes, theme, news } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            classes={{
              root: classes.tabsRoot,
              indicator: classes.tabsIndicator
            }}
          >
            {tabsArray.map((t, i) => {
              return (
                <Tab
                  key={i}
                  label={t}
                  disableRipple
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected
                  }}
                />
              )
            })}
          </Tabs>
        </AppBar>
        <div className="containt_wrapper">
          <SwipeableViews
            axis={theme.direction === 'ltr' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            {news.map(c => {
              return (
                <TabContainer key={c.id} dir={theme.direction}>
                  <Typography
                    variant="display1"
                    gutterBottom
                    className="news__title"
                  >
                    {c.article_1}
                  </Typography>
                  <div className="article_wrapper">
                    <Typography
                      variant="subheading"
                      gutterBottom
                      className="news__card"
                    >
                      {c.article_2}
                    </Typography>
                    <Typography
                      variant="subheading"
                      gutterBottom
                      className="news__card"
                    >
                      {c.article_3}
                    </Typography>
                    <Typography
                      variant="subheading"
                      gutterBottom
                      className="news__card"
                    >
                      {c.article_4}
                    </Typography>
                    <Typography
                      variant="subheading"
                      gutterBottom
                      className="news__card"
                    >
                      {c.article_5}
                    </Typography>
                  </div>
                </TabContainer>
              )
            })}
          </SwipeableViews>
        </div>
      </div>
    )
  }
}

DynamicContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(DynamicContainer)
