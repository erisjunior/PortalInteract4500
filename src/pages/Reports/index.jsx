import React, { Component } from 'react'

import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap'

export default class Reports extends Component {
  render() {
    return (
      <div className='content'>
        <Row>
          <Col md='12'>
            <Card className='demo-icons'>
              <CardHeader>
                <CardTitle tag='h5'>100 Awesome Nucleo Icons</CardTitle>
                <p className='card-category'>
                  Handcrafted by our friends from{' '}
                  <a href='https://nucleoapp.com/?ref=1712'>NucleoApp</a>
                </p>
              </CardHeader>
              <CardBody className='all-icons' />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
