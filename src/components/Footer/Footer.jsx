import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'

export default class Footer extends Component {
  render() {
    const { default: deft, fluid } = this.props

    let footerClassName = 'footer'
    if (deft) footerClassName += ' footer-default'
    return (
      <footer className={footerClassName}>
        <Container fluid={!!fluid}>
          <Row>
            <nav className='footer-nav'>
              <ul>
                <li>
                  <a
                    href='https://www.instagram.com/interact4500/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-instagram' /> Instagram
                  </a>
                </li>
              </ul>
            </nav>
            <div className='credits ml-auto'>
              <div className='copyright'>
                &copy; {1900 + new Date().getYear()}, developed by{' '}
                <i>Erisvan Junior</i>
              </div>
            </div>
          </Row>
        </Container>
      </footer>
    )
  }
}
