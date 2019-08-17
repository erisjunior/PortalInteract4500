import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'assets/scss/paper-dashboard.scss?v=1.1.0'
import 'assets/css/demo.css'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

import { Dashboard } from 'layouts'

const hist = createBrowserHistory()

const App = () => (
  <Router history={hist}>
    <Switch>
      <Route path='/' render={props => <Dashboard {...props} />} />
      <Redirect from='*' to='/perfil' />
    </Switch>
  </Router>
)

export default App
