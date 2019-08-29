import React, { Component } from 'react'

import Context from 'services/context'

import { Card, CardBody, Row, Col } from 'reactstrap'

export default class Profile extends Component {
  handleShowInformation = _data => (
    <div className='content'>
      <Row>
        <Col md='12'>
          <Card className='card-user'>
            <div className='image'>
              <img alt='...' src={require('assets/img/damir-bosnjak.jpg')} />
            </div>
            <CardBody>
              <div className='author'>
                <img
                  alt='...'
                  className='avatar border-gray'
                  src={require('assets/img/default-avatar.png')}
                />
                <h5 className='title'>Erisvan Junior</h5>
                <p className='description'>erisvan.junior.a@gmail.com</p>
              </div>
              <p className='description text-center'>
                Interact Club de Master Natal-Sul
                <br />
                Secretário
                <br /> Comissão Distrital: Presidência
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )

  render() {
    return (
      <Context.Consumer>
        {context => {
          console.log(context)

          return this.handleShowInformation(context)
        }}
      </Context.Consumer>
    )
  }
}
