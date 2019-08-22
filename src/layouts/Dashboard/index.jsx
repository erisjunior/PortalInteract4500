import React, { Component } from 'react'

import PerfectScrollbar from 'perfect-scrollbar'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Sidebar, Header, Footer } from 'components'

import { unloggedRoutes, routes } from 'routes.js'

var ps

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.mainPanel = React.createRef()
  }

  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current)
      document.body.classList.toggle('perfect-scrollbar-on')
    }
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy()
      document.body.classList.toggle('perfect-scrollbar-on')
    }
  }

  componentDidUpdate(e) {
    if (e.history.action === 'PUSH') {
      this.mainPanel.current.scrollTop = 0
      document.scrollingElement.scrollTop = 0
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <Sidebar
          {...this.props}
          routes={routes}
          bgColor='black'
          activeColor='primary'
        />
        <div className='main-panel' ref={this.mainPanel}>
          <Header {...this.props} />
          <Switch>
            {routes.map(({ path, component }, key) => (
              <Route path={path} component={component} key={key} />
            ))}
            <Redirect from='*' to='/perfil' />
          </Switch>
          <Footer fluid />
        </div>
      </div>
    )
  }
}

export default Dashboard
