import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ReportsActions from 'store/ducks/reports'

import {
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

class FRForm extends Component {
  state = {
    fr: '',
    frDescription: ''
  }

  handleChange = ({ target }) => {
    const { value, name } = target
    this.setState({ [name]: value })
  }

  render() {
    const { frDescription, fr } = this.state

    return (
      <>
        <CardHeader>
          <CardTitle tag='h5'>Fundação Rotária</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='fr'>Responsável</Label>
              <Input
                type='text'
                name='fr'
                id='fr'
                value={fr}
                placeholder='Nome do Responsável'
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <Col md='10'>
            <FormGroup row>
              <Label for='frDescription'>Descrição das atividades:</Label>
              <Input
                type='textarea'
                name='frDescription'
                id='frDescription'
                value={frDescription}
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

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ReportsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FRForm)
