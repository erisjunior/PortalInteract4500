import React, { Component } from 'react'

import {
  Button,
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

import * as Pages from './pages'

export default class SendReport extends Component {
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

    switch (actualPage) {
      case 0:
        return <Pages.PresidentForm />
      case 1:
        return <Pages.SecretaryForm />
      case 2:
        return <Pages.TreasurerForm />
      case 3:
        return <Pages.ProtocolForm />
      case 4:
        return <Pages.ADMForm />
      case 5:
        return <Pages.PHForm />
      case 6:
        return <Pages.IPForm />
      case 7:
        return <Pages.DQAForm />
      case 8:
        return <Pages.FRForm />
      default:
        return <Pages.PresidentForm />
    }
  }

  render() {
    const { actualPage } = this.state
    return (
      <div className='content'>
        <Row>
          <Col md='12'>
            <Card className='demo-icons'>
              <CardHeader>
                <CardTitle tag='h5'>Interact Club Master Natal Sul</CardTitle>
                <Col md='4'>
                  <FormGroup row>
                    <Label for='exampleSelect'>Mês</Label>
                    <Input type='select' name='select' id='exampleSelect'>
                      {this.formatMonthOptions()}
                    </Input>
                  </FormGroup>
                </Col>
              </CardHeader>
              <CardBody>
                {this.showContent()}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  {actualPage > 0 && (
                    <Button onClick={this.onClickBack} color='info'>
                      Voltar
                    </Button>
                  )}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      flex: 1
                    }}
                  >
                    {actualPage < 8 && (
                      <Button onClick={this.onClickContinue} color='info'>
                        Continuar
                      </Button>
                    )}
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
