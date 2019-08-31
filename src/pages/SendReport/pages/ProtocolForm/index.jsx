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
  handleChange = ({ target }) => {
    const { handleChange, report } = this.props
    const { value, name } = target

    const protocol = { ...report.protocol, [name]: value }
    handleChange('protocol', protocol)
  }

  render() {
    const { sponsor, description } = this.props.report.protocol

    return (
      <>
        <CardHeader>
          <CardTitle tag='h5'>Diretor de Protocolo</CardTitle>
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

export default ProtocolForm
