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

class ADMForm extends Component {
  handleChange = ({ target }) => {
    const { handleChange, report } = this.props
    const { value, name } = target

    const adm = { ...report.adm, [name]: value }
    handleChange('adm', adm)
  }

  render() {
    const {
      sponsor,
      description,
      ordinary,
      extraordinary,
      council,
      frequency,
      bulletin
    } = this.props.report.adm

    return (
      <>
        <CardHeader>
          <CardTitle tag='h5'>Administração</CardTitle>
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
                <Label for='ordinary'>Reuniões ordinárias</Label>
                <Input
                  type='number'
                  name='ordinary'
                  id='ordinary'
                  value={ordinary}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='extraordinary'>Reuniões extraordinárias</Label>
                <Input
                  type='number'
                  name='extraordinary'
                  id='extraordinary'
                  value={extraordinary}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for='council'>Reuniões do conselho diretor</Label>
                <Input
                  type='number'
                  name='council'
                  id='council'
                  value={council}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='frequency'>Frequência mensal (%)</Label>
                <Input
                  type='number'
                  name='frequency'
                  id='frequency'
                  value={frequency}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='bulletin'>N°de boletins publicados no mês</Label>
                <Input
                  type='number'
                  name='bulletin'
                  id='bulletin'
                  value={bulletin}
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
                placeholder='Palavra do diretor...'
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </CardBody>
      </>
    )
  }
}

export default ADMForm
