import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'reactstrap'

import PerfectScrollbar from 'perfect-scrollbar'

import logo from 'assets/img/logo.png'

var ps

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.sidebar = React.createRef()
  }

  activeRoute = routeName =>
    this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : ''

  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      })
    }
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) ps.destroy()
  }

  render() {
    const { bgColor, activeColor, routes } = this.props
    return (
      <div
        className='sidebar'
        data-color={bgColor}
        data-active-color={activeColor}
      >
        <div className='logo'>
          <a
            href='https://www.creative-tim.com'
            className='simple-text logo-mini'
          >
            <div className='logo-img'>
              <img src={logo} alt='react-logo' />
            </div>
          </a>
          <a
            href='https://www.creative-tim.com'
            className='simple-text logo-normal'
          >
            Interact4500
          </a>
        </div>
        <div className='sidebar-wrapper' ref={this.sidebar}>
          <Nav style={{ width: 258 }}>
            {routes.map(({ name, path, icon }, key) => (
              <li className={this.activeRoute(path)} key={key}>
                <NavLink
                  to={path}
                  className='nav-link'
                  activeClassName='active'
                >
                  <i className={icon} />
                  <p>{name}</p>
                </NavLink>
              </li>
            ))}
          </Nav>
        </div>
      </div>
    )
  }
}
