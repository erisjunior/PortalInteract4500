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
                <li>
                  <a
                    href='drive.google.com/open?id=1bIDu3b1QMJ9jHuklQ96p7J-QIaDfVrzT'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-google-drive' /> Drive
                  </a>
                </li>
                <li>
                  <a
                    href='http://www.unyclub.com.br/ipanel'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fas fa-wrench' /> Unyclub
                  </a>
                </li>
              </ul>
            </nav>
            <div className='credits ml-auto'>
              <div className='copyright'>
                <ul>
                  <li>
                    <a
                      href='https://www.linkedin.com/in/antônio-erisvan-b86353156/'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      &copy; {1900 + new Date().getYear()}, developed by{' '}
                      <i className='eris'>Erisvan Junior</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Row>
        </Container>
      </footer>
    )
  }
}
