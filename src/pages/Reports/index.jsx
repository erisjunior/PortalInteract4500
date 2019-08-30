import React, { Component } from 'react'

import Context from 'services/context'

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

import { arrayOfMonths } from 'helpers'

export default class Reports extends Component {
  state = {
    actualPage: 0,
    report: {
      month: 'Julho',
      club: '',
      clubId: '',
      president: {},
      secretary: {},
      treasurer: {},
      protocol: {},
      adm: {},
      ph: {},
      ip: {},
      dqa: {},
      fr: {}
    }
  }

  formatMonthOptions = () =>
    arrayOfMonths().map(month => <option key={month}>{month}</option>)

  onClickContinue = () => {
    const { actualPage } = this.state
    this.setState({ actualPage: actualPage + 1 })
  }
  onClickBack = () => {
    const { actualPage } = this.state
    this.setState({ actualPage: actualPage - 1 })
  }

  showContent = () => {
    const { actualPage } = this.state
  }

  render() {
    return (
      <Context.Consumer>
        {({ reports, user }) => (
          <div className='content'>
            <Row>
              <Col md='12'>
                <Card className='demo-icons'>
                  <CardHeader>
                    <CardTitle tag='h5'>{user._data.club}</CardTitle>
                    <Col md='4'>
                      <FormGroup row>
                        <Label for='exampleSelect'>Mês</Label>
                        <Input type='select' name='select' id='exampleSelect'>
                          {this.formatMonthOptions()}
                        </Input>
                      </FormGroup>
                    </Col>
                  </CardHeader>
                  <CardBody>{this.showContent()}</CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </Context.Consumer>
    )
  }
}
