import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchItemsIfNeeded } from '../Actions/items'
import StaticContainer from '../Components/StaticContent/StaticContainer'
import DynamicContainer from '../Components/DynamicContent/DynamicContainer'
import { news } from '../store'

class AsyncApp extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const { dispatch, respondStr } = this.props
    dispatch(fetchItemsIfNeeded(respondStr))
  }

  changeVisibility = disable => this.setState({ showResults: true })

  handleChange(respondStr) {
    this.props.dispatch(fetchItemsIfNeeded(respondStr))
  }

  render() {
    const { respondStr, items, isFetching } = this.props
    return (
      <div className="container">
        <header className="header">
          <StaticContainer />
        </header>
        <section className="content">
          <DynamicContainer news={news} />
        </section>
      </div>
    )
  }
}

AsyncApp.propTypes = {
  respondStr: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  dispatch: PropTypes.func
}

function mapStateToProps(state) {
  const { respondStr, itemsByrespondString } = state
  const { isFetching, items } = itemsByrespondString[respondStr] || {
    respondStr,
    isFetching: true,
    items: []
  }

  return {
    respondStr,
    items,
    isFetching
  }
}

export default connect(mapStateToProps)(AsyncApp)
