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

class PHForm extends Component {
  handleChange = ({ target }) => {
    const { handleChange, report } = this.props
    const { value, name } = target

    const ph = { ...report.ph, [name]: value }
    handleChange('ph', ph)
  }

  render() {
    const { sponsor, description } = this.props.report.ph

    return (
      <>
        <CardHeader>
          <CardTitle tag='h5'>Projetos Humanitários</CardTitle>
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

export default PHForm
