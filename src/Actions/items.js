import fetch from 'isomorphic-fetch'

export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const UPDATE_SRC = 'UPDATE_SRC'

function updateResString(respondStr) {
  return {
    type: UPDATE_SRC,
    respondStr
  }
}

function requestItems(respondStr) {
  return {
    type: REQUEST_ITEMS,
    respondStr
  }
}

function receiveItems(respondStr, items) {
  return {
    type: RECEIVE_ITEMS,
    respondStr,
    items,
    receivedAt: Date.now()
  }
}

function compareNames(a, b) {
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
}

function prepareItems(array) {
  let combined = []
  array.forEach(item => {
    combined = combined.concat(item.results)
  })

  return combined
    .map(item => {
      return {
        type: 'person',
        name: item.name,
        gender: item.gender,
        height: item.height,
        mass: item.mass
      }
    })
    .sort(compareNames)
}
/*For including other research create if statement add the url in the endpoints array*/
function fetchAllItems(respondStr) {
  const endpoints = [`https://swapi.co/api/people/?search=${respondStr}`]

  return dispatch => {
    dispatch(updateResString(respondStr))
    dispatch(requestItems(respondStr))
    return Promise.all(
      endpoints.map(url => fetch(url).then(resp => resp.json()))
    )
      .then(array => prepareItems(array))
      .then(json => dispatch(receiveItems(respondStr, json)))
  }
}

function shouldFetchItems(state, respondStr) {
  const posts = state.itemsByrespondString[respondStr]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  }
  return false
}

export function fetchItemsIfNeeded(respondStr) {
  return (dispatch, getState) => {
    if (shouldFetchItems(getState(), respondStr)) {
      return dispatch(fetchAllItems(respondStr))
    }
    return dispatch(updateResString(respondStr))
  }
}
