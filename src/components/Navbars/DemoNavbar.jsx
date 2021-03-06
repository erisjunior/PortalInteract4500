import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container
  // Collapse,
  // Nav,
  // NavItem,
  // Dropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // InputGroup,
  // InputGroupText,
  // InputGroupAddon,
  // Input
} from 'reactstrap'

import routes from 'routes.js'

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

  getBrand = () => {
    let brandName = 'Default Brand'
    routes.map(({ path, layout, name }) => {
      if (window.location.href.indexOf(layout + path) !== -1) {
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
            <NavbarBrand href='/'>{this.getBrand()}</NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle}>
            <span className='navbar-toggler-bar navbar-kebab' />
            <span className='navbar-toggler-bar navbar-kebab' />
            <span className='navbar-toggler-bar navbar-kebab' />
          </NavbarToggler>
          {/* <Collapse isOpen={isOpen} navbar className='justify-content-end'>
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
                <Link to='#pablo' className='nav-link btn-magnify'>
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
                <Link to='#pablo' className='nav-link btn-rotate'>
                  <i className='nc-icon nc-settings-gear-65' />
                  <p>
                    <span className='d-lg-none d-md-block'>Account</span>
                  </p>
                </Link>
              </NavItem>
            </Nav>
          </Collapse> */}
        </Container>
      </Navbar>
    )
  }
}
