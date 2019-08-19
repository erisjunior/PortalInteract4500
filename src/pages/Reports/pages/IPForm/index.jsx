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

class IPForm extends Component {
  state = {
    ip: '',
    ipDescription: ''
  }

  handleChange = ({ target }) => {
    const { value, name } = target
    this.setState({ [name]: value })
  }

  render() {
    const { ipDescription, ip } = this.state

    return (
      <>
        <CardHeader>
          <CardTitle tag='h5'>Imagem Pública</CardTitle>
          <Col md='4'>
            <FormGroup row>
              <Label for='ip'>Responsável</Label>
              <Input
                type='text'
                name='ip'
                id='ip'
                value={ip}
                placeholder='Nome do Responsável'
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </CardHeader>
        <CardBody>
          <Col md='10'>
            <FormGroup row>
              <Label for='ipDescription'>Descrição das atividades:</Label>
              <Input
                type='textarea'
                name='ipDescription'
                id='ipDescription'
                value={ipDescription}
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
)(IPForm)
