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
  state = {
    adm: '',
    admDescription: ''
  }

  handleChange = ({ target }) => {
    const { value, name } = target
    this.setState({ [name]: value })
  }

  render() {
    const { admDescription, adm } = this.state

    return (
      <>
        <CardHeader>
          <CardTitle tag='h5'>Administração</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='adm'>Responsável</Label>
              <Input
                type='text'
                name='adm'
                id='adm'
                value={adm}
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
                <Label for='adm'>Reuniões ordinárias</Label>
                <Input
                  type='text'
                  name='adm'
                  id='adm'
                  value={adm}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='adm'>Reuniões extraordinárias</Label>
                <Input
                  type='text'
                  name='adm'
                  id='adm'
                  value={adm}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for='adm'>Reuniões do conselho diretor</Label>
                <Input
                  type='text'
                  name='adm'
                  id='adm'
                  value={adm}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='adm'>Frequência mensal (%)</Label>
                <Input
                  type='text'
                  name='adm'
                  id='adm'
                  value={adm}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='adm'>N°de boletins publicados no mês</Label>
                <Input
                  type='text'
                  name='adm'
                  id='adm'
                  value={adm}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Col md='10'>
            <FormGroup row>
              <Label for='admDescription'>Descrição das atividades:</Label>
              <Input
                type='textarea'
                name='admDescription'
                id='admDescription'
                value={admDescription}
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
