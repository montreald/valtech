import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  Tabs,
  Tab,
  Typography,
  AppBar
} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import { LineChart, Line } from 'recharts';

import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from 'recharts';

const data = [
  {name: '2018', uv: 4000, amt: 2400},
  {name: '2019', uv: 3000, amt: 2210},
  {name: '2020', uv: 2000, amt: 2290},
  {name: '2021', uv: 2780, amt: 2000},
  {name: '2022', uv: 1890, amt: 2181},
];

const btnArray = [1998, 2002, 2006]

const styles = theme => ({
  root: {
    flexGrow: 1,
    boxShadow:"none",
    overflow:'hidden',
    padding:'0 2%',
    background: "#002140"
  },
  tabsRoot: {
    margin: "20px 0",
  },
  tabsIndicator: {
    background: "#002140"
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    maxWidth: '10%',
    fontWeight: theme.typography.fontWeightRegular,
    border: '1px solid #000',
    background: '#002140',
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

class SimpleBarChart extends Component{
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render () {
    const { classes, theme, data } = this.props

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
            {btnArray.map((t, i) => {
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
        <SwipeableViews
          axis={theme.direction === 'ltr' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >{data.map((item, i) =>{
          return(
            <BarChart key={i} dir={theme.direction} width={500} height={300} data={item.data}
                      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey="name"/>
              <YAxis label={{ value: 'B$', angle: 0, position: 'insideTop', textAnchor: 'middle' }}/>
              <Tooltip wrapperStyle={{ width: 60, backgroundColor: '#ccc' }}/>
              <Legend />
              <Bar dataKey="uv" fill={item.color} barSize={40}/>
            </BarChart>
          )
        })}
        </SwipeableViews>
      </div>
    );
  }
}

SimpleBarChart.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(SimpleBarChart)
