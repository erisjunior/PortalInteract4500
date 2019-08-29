import React, { Component } from 'react'

import { setStorage } from 'services/storage'

import Context from 'services/context'

import {
  Navbar,
  NavbarBrand,
  Container,
  Nav,
  NavItem
  // NavbarToggler,
  // Collapse,
  // Dropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // InputGroup,
  // InputGroupText,
  // InputGroupAddon,
  // Input
} from 'reactstrap'

import { unloggedRoutes, loggedRoutes } from 'routes.js'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.sidebarToggle = React.createRef()
  }

  state = {
    isOpen: false,
    dropdownOpen: false,
    color: 'transparent'
  }

  toggle = () => {
    const { isOpen } = this.state
    let color = 'dark'
    if (isOpen) color = 'transparent'

    this.setState({
      color,
      isOpen: !isOpen
    })
  }

  dropdownToggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  getBrand = ({ _isLogged }) => {
    let brandName = 'Default Brand'

    const routes = _isLogged ? loggedRoutes : unloggedRoutes

    routes.map(({ path, name }) => {
      if (window.location.href.indexOf(path) !== -1) {
        brandName = name
      }
      return null
    })
    return brandName
  }
  openSidebar = () => {
    document.documentElement.classList.toggle('nav-open')
    this.sidebarToggle.current.classList.toggle('toggled')
  }

  updateColor = () => {
    const { isOpen } = this.state
    let color = 'transparent'
    if (window.innerWidth < 993 && isOpen) color = 'dark'

    this.setState({ color })
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateColor.bind(this))
  }

  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf('nav-open') !== -1
    ) {
      document.documentElement.classList.toggle('nav-open')
      this.sidebarToggle.current.classList.toggle('toggled')
    }
  }

  logout = async () => {
    const { functions } = this.props

    const user = { _data: {}, _isLogged: false }

    await setStorage('PortalInteract:user', user)
    await functions[0]()
  }

  render() {
    const { location } = this.props
    const { color } = this.state
    return (
      <Navbar
        color={
          location.pathname.indexOf('full-screen-maps') !== -1 ? 'dark' : color
        }
        expand='lg'
        className={
          location.pathname.indexOf('full-screen-maps') !== -1
            ? 'navbar-absolute fixed-top'
            : 'navbar-absolute fixed-top ' +
              (color === 'transparent' ? 'navbar-transparent ' : '')
        }
      >
        <Context.Consumer>
          {({ user }) => (
            <Container fluid>
              <div className='navbar-wrapper'>
                <div className='navbar-toggle'>
                  <button
                    type='button'
                    ref={this.sidebarToggle}
                    className='navbar-toggler'
                    onClick={() => this.openSidebar()}
                  >
                    <span className='navbar-toggler-bar bar1' />
                    <span className='navbar-toggler-bar bar2' />
                    <span className='navbar-toggler-bar bar3' />
                  </button>
                </div>

                <NavbarBrand href='#!'>{this.getBrand(user)}</NavbarBrand>
              </div>
              <Nav navbar>
                <NavItem>
                  {user._isLogged && (
                    <a
                      href='#!'
                      onClick={this.logout}
                      className='nav-link btn-rotate'
                    >
                      <i className='fas fa-sign-out-alt' />
                    </a>
                  )}
                </NavItem>
              </Nav>
              {/* 
          <NavbarToggler onClick={this.toggle}>
            <span className='navbar-toggler-bar navbar-kebab' />
            <span className='navbar-toggler-bar navbar-kebab' />
            <span className='navbar-toggler-bar navbar-kebab' />
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar className='justify-content-end'>
            <form>
              <InputGroup className='no-border'>
                <Input placeholder='Search...' />
                <InputGroupAddon addonType='append'>
                  <InputGroupText>
                    <i className='nc-icon nc-zoom-split' />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </form>
            <Nav navbar>
              <NavItem>
                <Link to='#' className='nav-link btn-magnify'>
                  <i className='nc-icon nc-layout-11' />
                  <p>
                    <span className='d-lg-none d-md-block'>Stats</span>
                  </p>
                </Link>
              </NavItem>
              <Dropdown nav isOpen={dropdownOpen} toggle={this.dropdownToggle}>
                <DropdownToggle caret nav>
                  <i className='nc-icon nc-bell-55' />
                  <p>
                    <span className='d-lg-none d-md-block'>Some Actions</span>
                  </p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag='a'>Action</DropdownItem>
                  <DropdownItem tag='a'>Another Action</DropdownItem>
                  <DropdownItem tag='a'>Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <Link to='#' className='nav-link btn-rotate'>
                  <i className='nc-icon nc-settings-gear-65' />
                  <p>
                    <span className='d-lg-none d-md-block'>Account</span>
                  </p>
                </Link>
              </NavItem>
            </Nav>
          </Collapse> */}
            </Container>
          )}
        </Context.Consumer>
      </Navbar>
    )
  }
}
