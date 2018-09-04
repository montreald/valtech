import React from 'react'
import Person from './person.js'
import PropTypes from 'prop-types'

const Results = props => (
  <ul className="results">
    {props.items.map((item, i) => {
      return <Person key={i} item={item} />
    })}
  </ul>
)

Results.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Results
