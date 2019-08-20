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
          <CardTitle tag='h5'>Presidência</CardTitle>
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
