import React from 'react'
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar'
import { Route, Switch } from 'react-router-dom'

import DemoNavbar from 'components/Navbars/DemoNavbar.jsx'
import Footer from 'components/Footer/Footer.jsx'
import Sidebar from 'components/Sidebar/Sidebar.jsx'

import routes from 'routes.js'

var ps

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.mainPanel = React.createRef()
  }

  state = {
    backgroundColor: 'black',
    activeColor: 'info'
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
    const { backgroundColor, activeColor } = this.state
    return (
      <div className='wrapper'>
        <Sidebar
          {...this.props}
          routes={routes}
          bgColor={backgroundColor}
          activeColor={activeColor}
        />
        <div className='main-panel' ref={this.mainPanel}>
          <DemoNavbar {...this.props} />
          <Switch>
            {routes.map(({ layout, path, component }, key) => (
              <Route path={layout + path} component={component} key={key} />
            ))}
          </Switch>
          <Footer fluid />
        </div>
      </div>
    )
  }
}

export default Dashboard
