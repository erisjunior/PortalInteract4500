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

class SecretaryForm extends Component {
  state = {
    secretary: '',
    secretaryDescription: ''
  }

  handleChange = ({ target }) => {
    const { value, name } = target
    this.setState({ [name]: value })
  }

  render() {
    const { secretaryDescription, secretary } = this.state

    return (
      <>
        <CardHeader>
          <CardTitle tag='h5'>Secretaria</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='secretary'>Responsável</Label>
              <Input
                type='text'
                name='secretary'
                id='secretary'
                value={secretary}
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
                <Label for='secretary'>Nº de ofícios expedidos</Label>
                <Input
                  type='text'
                  name='secretary'
                  id='secretary'
                  value={secretary}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='secretary'>Nº de correspondências enviadas</Label>
                <Input
                  type='text'
                  name='secretary'
                  id='secretary'
                  value={secretary}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for='secretary'>Nº de correspondências recebidas</Label>
                <Input
                  type='text'
                  name='secretary'
                  id='secretary'
                  value={secretary}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Col md='10'>
            <FormGroup row>
              <Label for='secretaryDescription'>
                Descrição das atividades:
              </Label>
              <Input
                type='textarea'
                name='secretaryDescription'
                id='secretaryDescription'
                value={secretaryDescription}
                placeholder='Palavra do secretário...'
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </CardBody>
      </>
    )
  }
}

export default SecretaryForm
