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
  handleChange = ({ target }) => {
    const { handleChange, report } = this.props
    const { value, name } = target

    const secretary = { ...report.secretary, [name]: value }
    handleChange('secretary', secretary)
  }

  render() {
    const {
      sponsor,
      description,
      offices,
      inMail,
      outMail
    } = this.props.report.secretary

    return (
      <>
        <CardHeader>
          <CardTitle tag='h5'>Secretaria</CardTitle>
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
                <Label for='offices'>Nº de ofícios expedidos</Label>
                <Input
                  type='number'
                  name='offices'
                  id='offices'
                  value={offices}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for='inMail'>Nº de correspondências enviadas</Label>
                <Input
                  type='number'
                  name='inMail'
                  id='inMail'
                  value={inMail}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for='outMail'>Nº de correspondências recebidas</Label>
                <Input
                  type='number'
                  name='outMail'
                  id='outMail'
                  value={outMail}
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
