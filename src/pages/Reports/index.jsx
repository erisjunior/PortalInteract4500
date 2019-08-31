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
    month: 'Julho'
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

  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }

  showContent = reports => {
    const { month } = this.state
    const report = reports.find(report => report.month === month)

    if (!report) return <h4>Esse mês ainda não possui relatório</h4>

    const {
      president,
      secretary,
      treasurer,
      protocol,
      adm,
      ip,
      ph,
      dqa,
      fr
    } = report

    return (
      <div>
        <CardHeader>
          <CardTitle tag='h5'>Presidência</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='sponsor'>Responsável</Label>
              <Input id='sponsor' value={president.sponsor} disabled={true} />
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <Col md='10'>
            <FormGroup row>
              <Label for='description'>Descrição das atividades:</Label>
              <Input
                type='textarea'
                id='description'
                value={president.description}
                disabled={true}
              />
            </FormGroup>
          </Col>
        </CardBody>
        <CardHeader>
          <CardTitle tag='h5'>Secretaria</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='sponsor'>Responsável</Label>
              <Input id='sponsor' value={secretary.sponsor} disabled={true} />
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='offices'>Nº de ofícios expedidos</Label>
                <Input id='offices' value={secretary.offices} disabled={true} />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='inMail'>Nº de correspondências enviadas</Label>
                <Input id='inMail' value={secretary.inMail} disabled={true} />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for='outMail'>Nº de correspondências recebidas</Label>
                <Input id='outMail' value={secretary.outMail} disabled={true} />
              </FormGroup>
            </Col>
          </Row>
          <Col md='10'>
            <FormGroup row>
              <Label for='description'>Descrição das atividades:</Label>
              <Input
                type='textarea'
                id='description'
                value={secretary.description}
                disabled={true}
              />
            </FormGroup>
          </Col>
        </CardBody>
        <CardHeader>
          <CardTitle tag='h5'>Tesouraria</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='sponsor'>Responsável</Label>
              <Input id='sponsor' value={treasurer.sponsor} disabled={true} />
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='monthly'>Mensalidades (R$)</Label>
                <Input
                  type='number'
                  id='monthly'
                  value={treasurer.monthly}
                  disabled={true}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='inDayMonthly'>Mensalidades no prazo (%)</Label>
                <Input
                  type='number'
                  id='inDayMonthly'
                  value={treasurer.inDayMonthly}
                  disabled={true}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='preBalance'>Saldo do mês anterior (R$)</Label>
                <Input
                  type='number'
                  id='preBalance'
                  value={treasurer.preBalance}
                  disabled={true}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='balance'>Saldo do mês atual (R$)</Label>
                <Input
                  type='number'
                  id='balance'
                  value={treasurer.balance}
                  disabled={true}
                />
              </FormGroup>
            </Col>
          </Row>
          <Col md='10'>
            <FormGroup row>
              <Label for='description'>Descrição das atividades:</Label>
              <Input
                type='textarea'
                id='description'
                value={treasurer.description}
                disabled={true}
              />
            </FormGroup>
          </Col>
        </CardBody>
        <CardHeader>
          <CardTitle tag='h5'>Diretor de Protocolo</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='sponsor'>Responsável</Label>
              <Input id='sponsor' value={protocol.sponsor} disabled />
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <Col md='10'>
            <FormGroup row>
              <Label for='description'>Descrição das atividades:</Label>
              <Input
                type='textarea'
                id='description'
                value={protocol.description}
                disabled
              />
            </FormGroup>
          </Col>
        </CardBody>
        <CardHeader>
          <CardTitle tag='h5'>Administração</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='sponsor'>Responsável</Label>
              <Input id='sponsor' value={adm.sponsor} disabled />
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='ordinary'>Reuniões ordinárias</Label>
                <Input id='ordinary' value={adm.ordinary} disabled />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='extraordinary'>Reuniões extraordinárias</Label>
                <Input id='extraordinary' value={adm.extraordinary} disabled />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for='council'>Reuniões do conselho diretor</Label>
                <Input id='council' value={adm.council} disabled />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='frequency'>Frequência mensal (%)</Label>
                <Input id='frequency' value={adm.frequency} disabled />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='bulletin'>N°de boletins publicados no mês</Label>
                <Input id='bulletin' value={adm.bulletin} disabled />
              </FormGroup>
            </Col>
          </Row>
          <Col md='10'>
            <FormGroup row>
              <Label for='description'>Descrição das atividades:</Label>
              <Input
                type='textarea'
                id='description'
                value={adm.description}
                disabled
              />
            </FormGroup>
          </Col>
        </CardBody>
        <CardHeader>
          <CardTitle tag='h5'>Projetos Humanitários</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='sponsor'>Responsável</Label>
              <Input id='sponsor' value={ph.sponsor} disabled />
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <Col md='10'>
            <FormGroup row>
              <Label for='description'>Descrição das atividades:</Label>
              <Input
                type='textarea'
                id='description'
                value={ph.description}
                disabled
              />
            </FormGroup>
          </Col>
        </CardBody>
        <CardHeader>
          <CardTitle tag='h5'>Imagem Pública</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='sponsor'>Responsável</Label>
              <Input id='sponsor' value={ip.sponsor} disabled />
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <Col md='10'>
            <FormGroup row>
              <Label for='description'>Descrição das atividades:</Label>
              <Input
                type='textarea'
                id='description'
                value={ip.description}
                disabled
              />
            </FormGroup>
          </Col>
        </CardBody>
        <CardHeader>
          <CardTitle tag='h5'>Desenvolvimento do Quadro Associativo</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='sponsor'>Responsável</Label>
              <Input id='sponsor' value={dqa.sponsor} disabled />
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='init'>N° de associados no início do mês</Label>
                <Input id='init' value={dqa.init} disabled />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='news'>N° de admissões no mês</Label>
                <Input id='news' value={dqa.news} disabled />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for='license'>N° de associado em licença no mês</Label>
                <Input id='license' value={dqa.license} disabled />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='out'>N° de saídas no mês</Label>
                <Input id='out' value={dqa.out} disabled />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='getOut'>N° de demissões no mês</Label>
                <Input id='getOut' value={dqa.getOut} disabled />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for='finish'>
                  N° de associados no último dia do mês
                </Label>
                <Input id='finish' value={dqa.finish} disabled />
              </FormGroup>
            </Col>
          </Row>
          <Col md='10'>
            <FormGroup row>
              <Label for='description'>Descrição das atividades:</Label>
              <Input
                type='textarea'
                id='description'
                value={dqa.description}
                disabled
              />
            </FormGroup>
          </Col>
        </CardBody>
        <CardHeader>
          <CardTitle tag='h5'>Fundação Rotária</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='sponsor'>Responsável</Label>
              <Input id='sponsor' value={fr.sponsor} disabled />
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <Col md='10'>
            <FormGroup row>
              <Label for='description'>Descrição das atividades:</Label>
              <Input id='description' value={fr.description} disabled />
            </FormGroup>
          </Col>
        </CardBody>
      </div>
    )
  }

  render() {
    const { month } = this.state
    return (
      <Context.Consumer>
        {({ clubReports, user }) => (
          <div className='content'>
            <Row>
              <Col md='12'>
                <Card className='demo-icons'>
                  <CardHeader>
                    <CardTitle tag='h5'>{user._data.club}</CardTitle>
                    <Col md='4'>
                      <FormGroup row>
                        <Label for='exampleSelect'>Mês</Label>
                        <Input
                          onChange={e =>
                            this.handleChange('month', e.target.value)
                          }
                          value={month}
                          type='select'
                          name='select'
                          id='exampleSelect'
                        >
                          {this.formatMonthOptions()}
                        </Input>
                      </FormGroup>
                    </Col>
                  </CardHeader>
                  <CardBody>{this.showContent(clubReports)}</CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </Context.Consumer>
    )
  }
}
