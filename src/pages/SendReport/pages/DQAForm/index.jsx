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

export default class DQAForm extends Component {
  state = {
    dqa: '',
    dqaDescription: ''
  }

  handleChange = ({ target }) => {
    const { value, name } = target
    this.setState({ [name]: value })
  }

  render() {
    const { dqaDescription, dqa } = this.state

    return (
      <>
        <CardHeader>
          <CardTitle tag='h5'>Desenvolvimento do Quadro Associativo</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='dqa'>Responsável</Label>
              <Input
                type='text'
                name='dqa'
                id='dqa'
                value={dqa}
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
                <Label for='dqa'>N° de associados no início do mês</Label>
                <Input
                  type='text'
                  name='dqa'
                  id='dqa'
                  value={dqa}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='dqa'>N° de admissões no mês</Label>
                <Input
                  type='text'
                  name='dqa'
                  id='dqa'
                  value={dqa}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for='dqa'>N° de associado em licença no mês</Label>
                <Input
                  type='text'
                  name='dqa'
                  id='dqa'
                  value={dqa}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='dqa'>N° de saídas no mês</Label>
                <Input
                  type='text'
                  name='dqa'
                  id='dqa'
                  value={dqa}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='dqa'>N° de demissões no mês</Label>
                <Input
                  type='text'
                  name='dqa'
                  id='dqa'
                  value={dqa}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for='dqa'>
                  N° de associados no último dia do mês
                </Label>
                <Input
                  type='text'
                  name='dqa'
                  id='dqa'
                  value={dqa}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Col md='10'>
            <FormGroup row>
              <Label for='dqaDescription'>
                Descrição das atividades:
              </Label>
              <Input
                type='textarea'
                name='dqaDescription'
                id='dqaDescription'
                value={dqaDescription}
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

export default PresidentForm
