import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { routes } from './routes'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

/*render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)*/
render(
 <Provider store={store}>
   <Router history={browserHistory} routes={routes} />
 </Provider>,
 document.getElementById('root')
 )
