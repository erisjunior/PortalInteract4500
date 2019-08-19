import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ReportsActions from 'store/ducks/reports'

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
          <CardTitle tag='h5'>Desenvolvimento do Quadro Associativo</CardTitle>
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
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='president'>N° de associados no início do mês</Label>
                <Input
                  type='text'
                  name='president'
                  id='president'
                  value={president}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='president'>N° de admissões no mês</Label>
                <Input
                  type='text'
                  name='president'
                  id='president'
                  value={president}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for='president'>N° de associado em licença no mês</Label>
                <Input
                  type='text'
                  name='president'
                  id='president'
                  value={president}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='president'>N° de saídas no mês</Label>
                <Input
                  type='text'
                  name='president'
                  id='president'
                  value={president}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='president'>N° de demissões no mês</Label>
                <Input
                  type='text'
                  name='president'
                  id='president'
                  value={president}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for='president'>
                  N° de associados no último dia do mês
                </Label>
                <Input
                  type='text'
                  name='president'
                  id='president'
                  value={president}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
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

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ReportsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PresidentForm)
