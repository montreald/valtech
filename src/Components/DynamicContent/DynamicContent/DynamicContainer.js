import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { withStyles, Tabs, Tab, Typography, AppBar } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import SimpleBarChart from './DiagramsContainer'

const tabsArray = [1998, 2002, 2006, 2012, 2014, 2018]

const styles = theme => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none',
    overflow: 'hidden',
    padding: '0 2%',
    background: '#002140'
  },
  tabsRoot: {
    margin: '20px 0',
    color: '#fff'
  },
  tabsIndicator: {
    background: 'transparent'
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    maxWidth: '10%',
    fontWeight: theme.typography.fontWeightRegular,
    border: '1px solid #fff',
    background: '#002140',
    color: '#fff',
    zIndex: 5,
    borderRadius: 3,
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
      color: '#e6ff00',
      opacity: 1,
      borderColor: '#e6ff00'
    },
    '&$tabSelected': {
      background: '#e6ff00',
      fontWeight: theme.typography.fontWeightMedium,
      color: '#000'
    },
    '&:focus': {
      color: '#000',
      background: '#e6ff00',
      borderColor: '#e6ff00'
    }
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%'
  },
  tabSelected: {
    borderColor: '#e6ff00',
    color: '#fff',
    background: '#002140'
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
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      top: null
    }
    this.getPositionTab = this.getPositionTab.bind(this)
  }

  getPositionTab = e => {
    if (window.innerWidth < 460) {
      /*const pos = document.querySelector(".DynamicContainer-tabSelected-154+button");*/
      const rect = ReactDOM.findDOMNode(e.target).getBoundingClientRect()
      const moveParalax = rect.top + rect.height - 60
      this.setState({ top: moveParalax })
    }
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render() {
    const { classes, theme, news, data } = this.props
    return (
      <Fragment>
        <div className={classes.root}>
          <AppBar position="sticky" color="default" className="app_tab">
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
                    onClick={this.getPositionTab}
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
          <div className="paralax_wrapper" style={{ top: this.state.top }}>
            <div className="dunamic_containt_wrapper">
              <div className="tabs_wrapper">
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
              <div className="bar_wrapper">
                <SimpleBarChart data={data} />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

DynamicContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(DynamicContainer)
