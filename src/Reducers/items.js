import { combineReducers } from 'redux'
import { REQUEST_ITEMS, RECEIVE_ITEMS, UPDATE_SRC } from '../Actions/items'

function respondStr(state = '', action) {
  switch (action.type) {
    case UPDATE_SRC:
      return action.respondStr
    default:
      return state
  }
}

function items(
  state = {
    isFetching: false,
    respondStr: '',
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_ITEMS:
      return Object.assign({}, state, {
        respondStr: action.respondStr,
        isFetching: true
      })
    case RECEIVE_ITEMS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      })
    default:
      return state
  }
}

function itemsByrespondString(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
    case REQUEST_ITEMS:
      return Object.assign({}, state, {
        [action.respondStr]: items(state[action.respondStr], action)
      })
    default:
      return state
  }
}

export default combineReducers({
  itemsByrespondString,
  respondStr
})
