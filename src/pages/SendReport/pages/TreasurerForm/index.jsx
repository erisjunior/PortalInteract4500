import React, { Component } from 'react'

import {
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

class TreasurerForm extends Component {
  handleChange = ({ target }) => {
    const { handleChange, report } = this.props
    const { value, name } = target

    const treasurer = { ...report.treasurer, [name]: value }
    handleChange('treasurer', treasurer)
  }

  render() {
    const {
      sponsor,
      description,
      monthly,
      inDayMonthly,
      preBalance,
      balance
    } = this.props.report.treasurer

    return (
      <>
        <CardHeader>
          <CardTitle tag='h5'>Tesouraria</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='sponsor'>Responsável</Label>
              <Input
                type='text'
                name='sponsor'
                id='sponsor'
                value={sponsor}
                placeholder='Nome do Responsável'
                onChange={this.handleChange}
              />
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
                  name='monthly'
                  id='monthly'
                  value={monthly}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='inDayMonthly'>Mensalidades no prazo (%)</Label>
                <Input
                  type='number'
                  name='inDayMonthly'
                  id='inDayMonthly'
                  value={inDayMonthly}
                  onChange={this.handleChange}
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
                  name='preBalance'
                  id='preBalance'
                  value={preBalance}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='balance'>Saldo do mês atual (R$)</Label>
                <Input
                  type='number'
                  name='balance'
                  id='balance'
                  value={balance}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Col md='10'>
            <FormGroup row>
              <Label for='description'>Descrição das atividades:</Label>
              <Input
                type='textarea'
                name='description'
                id='description'
                value={description}
                placeholder='Palavra do tesoureiro...'
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </CardBody>
      </>
    )
  }
}

export default TreasurerForm
