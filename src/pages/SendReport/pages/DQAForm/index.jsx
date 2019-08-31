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

class DQAForm extends Component {
  handleChange = ({ target }) => {
    const { handleChange, report } = this.props
    const { value, name } = target

    const dqa = { ...report.dqa, [name]: value }
    handleChange('dqa', dqa)
  }

  render() {
    const {
      sponsor,
      description,
      init,
      news,
      license,
      out,
      getOut,
      finish
    } = this.props.report.dqa

    return (
      <>
        <CardHeader>
          <CardTitle tag='h5'>Desenvolvimento do Quadro Associativo</CardTitle>
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
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='init'>N° de associados no início do mês</Label>
                <Input
                  type='number'
                  name='init'
                  id='init'
                  value={init}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='news'>N° de admissões no mês</Label>
                <Input
                  type='number'
                  name='news'
                  id='news'
                  value={news}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for='license'>N° de associado em licença no mês</Label>
                <Input
                  type='number'
                  name='license'
                  id='license'
                  value={license}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for='out'>N° de saídas no mês</Label>
                <Input
                  type='number'
                  name='out'
                  id='out'
                  value={out}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='getOut'>N° de demissões no mês</Label>
                <Input
                  type='number'
                  name='getOut'
                  id='getOut'
                  value={getOut}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for='finish'>
                  N° de associados no último dia do mês
                </Label>
                <Input
                  type='number'
                  name='finish'
                  id='finish'
                  value={finish}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
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

export default DQAForm
