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

class PresidentForm extends Component {
  state = {
    president: '',
    presidentDescription: ''
  }

  handleChange = ({ target }) => {
    const { value, name } = target
    this.setState({ [name]: value })
  }

  render() {
    const { presidentDescription, president } = this.state

    return (
      <>
        <CardHeader>
          <CardTitle tag='h5'>Administração</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='president'>Responsável</Label>
              <Input
                type='text'
                name='president'
                id='president'
                value={president}
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
                <Label for='president'>Reuniões ordinárias</Label>
                <Input
                  type='text'
                  name='president'
                  id='president'
                  value={president}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='president'>Reuniões extraordinárias</Label>
                <Input
                  type='text'
                  name='president'
                  id='president'
                  value={president}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for='president'>Reuniões do conselho diretor</Label>
                <Input
                  type='text'
                  name='president'
                  id='president'
                  value={president}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='president'>Frequência mensal (%)</Label>
                <Input
                  type='text'
                  name='president'
                  id='president'
                  value={president}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='president'>N°de boletins publicados no mês</Label>
                <Input
                  type='text'
                  name='president'
                  id='president'
                  value={president}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Col md='10'>
            <FormGroup row>
              <Label for='presidentDescription'>
                Descrição das atividades:
              </Label>
              <Input
                type='textarea'
                name='presidentDescription'
                id='presidentDescription'
                value={presidentDescription}
                placeholder='Palavra do presidente...'
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </CardBody>
      </>
    )
  }
}

export default PresidentForm
