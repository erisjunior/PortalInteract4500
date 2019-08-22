import React, { Component } from 'react'

import {
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

class ProtocolForm extends Component {
  state = {
    protocol: '',
    protocolDescription: ''
  }

  handleChange = ({ target }) => {
    const { value, name } = target
    this.setState({ [name]: value })
  }

  render() {
    const { protocolDescription, protocol } = this.state

    return (
      <>
        <CardHeader>
          <CardTitle tag='h5'>Diretor de Protocolo</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='protocol'>Responsável</Label>
              <Input
                type='text'
                name='protocol'
                id='protocol'
                value={protocol}
                placeholder='Nome do Responsável'
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <Col md='10'>
            <FormGroup row>
              <Label for='protocolDescription'>Descrição das atividades:</Label>
              <Input
                type='textarea'
                name='protocolDescription'
                id='protocolDescription'
                value={protocolDescription}
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

export default ProtocolForm
