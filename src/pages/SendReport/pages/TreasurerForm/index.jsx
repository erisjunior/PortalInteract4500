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
  state = {
    treasurer: '',
    treasurerDescription: ''
  }

  handleChange = ({ target }) => {
    const { value, name } = target
    this.setState({ [name]: value })
  }

  render() {
    const { treasurerDescription, treasurer } = this.state

    return (
      <>
        <CardHeader>
          <CardTitle tag='h5'>Tesouraria</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='treasurer'>Responsável</Label>
              <Input
                type='text'
                name='treasurer'
                id='treasurer'
                value={treasurer}
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
                <Label for='treasurer'>Mensalidades (R$)</Label>
                <Input
                  type='text'
                  name='treasurer'
                  id='treasurer'
                  value={treasurer}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='treasurer'>Mensalidades no prazo (%)</Label>
                <Input
                  type='text'
                  name='treasurer'
                  id='treasurer'
                  value={treasurer}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='treasurer'>Saldo do mês anterior (R$)</Label>
                <Input
                  type='text'
                  name='treasurer'
                  id='treasurer'
                  value={treasurer}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='treasurer'>Saldo do mês atual (R$)</Label>
                <Input
                  type='text'
                  name='treasurer'
                  id='treasurer'
                  value={treasurer}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Col md='10'>
            <FormGroup row>
              <Label for='treasurerDescription'>
                Descrição das atividades:
              </Label>
              <Input
                type='textarea'
                name='treasurerDescription'
                id='treasurerDescription'
                value={treasurerDescription}
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
