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
import { getStorage, setStorage } from 'services/storage'
import Context from 'services/context'
import { save } from 'services/firebase'

import * as Pages from './pages'

const basicReport = { sponsor: '', description: '' }
const initialReport = {
  month: 'Julho',
  president: basicReport,
  secretary: { ...basicReport, offices: '', inMail: '', outMail: '' },
  treasurer: {
    ...basicReport,
    monthly: '',
    inDayMonthly: '',
    preBalance: '',
    balance: ''
  },
  protocol: basicReport,
  adm: {
    ...basicReport,
    ordinary: '',
    extraordinary: '',
    council: '',
    frequency: '',
    bulletin: ''
  },
  ph: basicReport,
  ip: basicReport,
  dqa: {
    ...basicReport,
    init: '',
    news: '',
    license: '',
    out: '',
    getOut: '',
    finish: ''
  },
  fr: basicReport
}

export default class SendReport extends Component {
  state = {
    actualPage: 0,
    report: initialReport
  }

  async componentDidMount() {
    const report = await getStorage('PortalInteract:report')
    if (report) await this.setState({ report })
  }

  async componentWillUnmount() {
    const { report } = this.state
    await setStorage('PortalInteract:report', report)
  }

  formatMonthOptions = () =>
    arrayOfMonths().map(month => <option key={month}>{month}</option>)

  handleChange = (name, value) => {
    this.setState({ report: { ...this.state.report, [name]: value } })
  }

  onClickContinue = async (user, setValue) => {
    const { actualPage, report } = this.state

    if (actualPage > 7) {
      const newReport = {
        club: user._data.club,
        ...report
      }
      await save('reports', newReport)

      this.setState({ report: initialReport, actualPage: 0 })
    } else {
      this.setState({ actualPage: actualPage + 1 })
    }
  }
  onClickBack = () => {
    const { actualPage } = this.state
    this.setState({ actualPage: actualPage - 1 })
  }

  showContent = () => {
    const { actualPage, report } = this.state

    const props = { handleChange: this.handleChange, report }

    switch (actualPage) {
      case 0:
        return <Pages.PresidentForm {...props} />
      case 1:
        return <Pages.SecretaryForm {...props} />
      case 2:
        return <Pages.TreasurerForm {...props} />
      case 3:
        return <Pages.ProtocolForm {...props} />
      case 4:
        return <Pages.ADMForm {...props} />
      case 5:
        return <Pages.PHForm {...props} />
      case 6:
        return <Pages.IPForm {...props} />
      case 7:
        return <Pages.DQAForm {...props} />
      case 8:
        return <Pages.FRForm {...props} />
      default:
        return <Pages.PresidentForm {...props} />
    }
  }

  render() {
    const { actualPage, report } = this.state

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
                    <Input
                      onChange={e => this.handleChange('month', e.target.value)}
                      value={report.month}
                      type='select'
                      name='select'
                      id='exampleSelect'
                    >
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
                    {actualPage < 9 && (
                      <Context.Consumer>
                        {({ user, setValue }) => (
                          <Button
                            onClick={() => this.onClickContinue(user, setValue)}
                            color='info'
                          >
                            {actualPage < 8 ? 'Continuar' : 'Enviar'}
                          </Button>
                        )}
                      </Context.Consumer>
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
