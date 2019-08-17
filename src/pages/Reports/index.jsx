import React, { Component } from 'react'

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

import { arrayOfMonths } from 'helpers'

export default class Reports extends Component {
  state = {
    month: 'Agosto',
    club: 'Interact Club de Master Natal-Sul'
  }

  formatMonthOptions = () =>
    arrayOfMonths().map(month => <option key={month}>{month}</option>)

  render() {
    const { club } = this.state
    return (
      <div className='content'>
        <Row>
          <Col md='12'>
            <Card className='demo-icons'>
              <Form onSubmit={e => e.preventDefault()}>
                <CardHeader>
                  <CardTitle tag='h5'>{club}</CardTitle>
                  <Col md='4'>
                    <FormGroup row>
                      <Label for='exampleSelect'>Mês</Label>
                      <Input
                        onChange={e => this.setState({ month: e })}
                        type='select'
                        name='select'
                        id='exampleSelect'
                      >
                        {this.formatMonthOptions()}
                      </Input>
                    </FormGroup>
                  </Col>
                </CardHeader>
                <CardHeader>
                  <CardTitle tag='h5'>Presidência</CardTitle>
                  <Col md='4'>
                    <FormGroup row>
                      <Label for='president'>Responsável</Label>
                      <Input
                        type='text'
                        name='president'
                        id='president'
                        placeholder='Nome do Responsável'
                      />
                    </FormGroup>
                  </Col>
                </CardHeader>
                <CardBody>
                  <Col md='10'>
                    <FormGroup row>
                      <Label for='presidentDescription'>
                        Descrição das atividades:
                      </Label>
                      <Input
                        type='textarea'
                        name='presidentDescription'
                        id='presidentDescription'
                        placeholder='Palavra do presidente...'
                      />
                    </FormGroup>
                  </Col>
                  <Col md={{ size: 2, offset: 10 }}>
                    <Button color='info'>Continuar</Button>
                  </Col>
                </CardBody>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
