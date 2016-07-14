import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App';
import new_day from './components/new_day';

export const routes = (
  <div>
    <Route path='/'>
      <IndexRoute component={App} />
      <Route path='new_day' component={new_day} />
    </Route>
  </div>

)
