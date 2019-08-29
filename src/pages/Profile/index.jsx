import React, { Component } from 'react'

import Context from 'services/context'

import { formatDirectory } from 'helpers'

import { Card, CardBody, Row, Col } from 'reactstrap'

export default class Profile extends Component {
  render() {
    return (
      <Context.Consumer>
        {({ user }) => {
          const {
            name,
            email,
            club,
            secretary,
            director,
            directory
          } = user._data

          return (
            <div className='content'>
              <Row>
                <Col md='12'>
                  <Card className='card-user'>
                    <div className='image'>
                      <img
                        alt='...'
                        src={require('assets/img/damir-bosnjak.jpg')}
                      />
                    </div>
                    <CardBody>
                      <div className='author'>
                        <img
                          alt='...'
                          className='avatar border-gray'
                          src={require('assets/img/default-avatar.png')}
                        />
                        <h5 className='title'>{name}</h5>
                        <p className='description'>{email}</p>
                      </div>
                      <p className='description text-center'>
                        {club}
                        <br />
                        {secretary && 'Secretário'}
                        <br />{' '}
                        {director &&
                          `Comissão Distrital: ${formatDirectory(directory)}`}
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}
