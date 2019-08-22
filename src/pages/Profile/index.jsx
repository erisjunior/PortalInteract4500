import React, { useState } from 'react'

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from 'reactstrap'

export default function Profile() {
  return (
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
                <h5 className='title'>Chet Faker</h5>
                <p className='description'>@chetfaker</p>
              </div>
              <p className='description text-center'>
                "I like the way you work it <br />
                No diggity <br />I wanna bag it up"
              </p>
            </CardBody>
            <CardFooter>
              <hr />
              <div className='button-container'>
                <Row>
                  <Col className='ml-auto' lg='3' md='6' xs='6'>
                    <h5>
                      12 <br />
                      <small>Files</small>
                    </h5>
                  </Col>
                  <Col className='ml-auto mr-auto' lg='4' md='6' xs='6'>
                    <h5>
                      2GB <br />
                      <small>Used</small>
                    </h5>
                  </Col>
                  <Col className='mr-auto' lg='3'>
                    <h5>
                      24,6$ <br />
                      <small>Spent</small>
                    </h5>
                  </Col>
                </Row>
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
