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

class PHForm extends Component {
  state = {
    ph: '',
    phDescription: ''
  }

  handleChange = ({ target }) => {
    const { value, name } = target
    this.setState({ [name]: value })
  }

  render() {
    const { phDescription, ph } = this.state

    return (
      <>
        <CardHeader>
          <CardTitle tag='h5'>Projetos Humanitários</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='ph'>Responsável</Label>
              <Input
                type='text'
                name='ph'
                id='ph'
                value={ph}
                placeholder='Nome do Responsável'
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <Col md='10'>
            <FormGroup row>
              <Label for='phDescription'>Descrição das atividades:</Label>
              <Input
                type='textarea'
                name='phDescription'
                id='phDescription'
                value={phDescription}
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
)(PHForm)
