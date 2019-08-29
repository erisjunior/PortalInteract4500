import React, { Component } from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import Context from 'services/context'
import { load } from 'services/firebase'
import { getStorage } from 'services/storage'

import 'bootstrap/dist/css/bootstrap.css'
import 'assets/scss/paper-dashboard.scss?v=1.1.0'
import 'assets/css/demo.css'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

import { Dashboard } from 'layouts'

const hist = createBrowserHistory()

class App extends Component {
  state = {
    user: {
      _data: {},
      _isLogged: false
    },

    report: {},

    users: [],
    clubs: []
  }

  componentDidMount() {
    const user = getStorage('PortalInteract:user')
    if (user) this.setState({ user })

    load('clubs', clubs => this.setState({ clubs }), 50)
    load('users', users => this.setState({ users }), 50)
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <Router history={hist}>
          <Switch>
            <Route path='/' render={props => <Dashboard {...props} />} />
            <Redirect from='*' to='/' />
          </Switch>
        </Router>
      </Context.Provider>
    )
  }
}

export default App
