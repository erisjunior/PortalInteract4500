import React, { Component } from 'react'

import Context from 'services/context'
import { load } from 'services/firebase'
import { setStorage } from 'services/storage'

import { Card, CardBody, Row, Col, FormGroup, Input, Button } from 'reactstrap'

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
    error: ''
  }

  handleChange = ({ target }) => {
    const { value, name } = target
    this.setState({ [name]: value })
  }

  handleLogin = async (users, setValue) => {
    const { email, password, loading } = this.state

    if (loading) return

    await this.setState({ loading: true })

    const _data = users.find(
      user => user.email === email && user.password === password
    )

    if (_data) {
      const user = { _data, _isLogged: true }

      await setStorage('PortalInteract:user', user)
      await setValue({ user })

      if (user._data.secretary) {
        load(
          'reports',
          async tempReports => {
            const clubReports = tempReports.filter(
              ({ club }) => club === user._data.club
            )
            await setValue({ clubReports })
          },
          100
        )
      }
      if (user._data.director) {
        load(
          'reports',
          async tempReports => {
            const directorReports = tempReports
            await setValue({ directorReports })
          },
          100
        )
      }
    } else {
      this.setState({ error: 'Credenciais erradas' })
    }

    await this.setState({ loading: false })
  }

  render() {
    return (
      <Context.Consumer>
        {({ users, setValue }) => (
          <div className='content' style={{ marginBottom: -40 }}>
            <Row>
              <Col md={{ size: 8, offset: 2 }}>
                <Card className='card-user'>
                  <CardBody
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <Row>
                      <Col md={{ size: 8, offset: 2 }}>
                        <h5 className='title' style={{ color: '#01b4e7' }}>
                          Login
                        </h5>
                        <FormGroup>
                          <label>Email</label>
                          <Input
                            placeholder='Insira seu email..'
                            type='email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={{ size: 8, offset: 2 }}>
                        <FormGroup>
                          <label>Senha</label>
                          <Input
                            placeholder='Insira sua senha'
                            type='password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className='update ml-auto mr-auto'>
                      <Button
                        onClick={() => this.handleLogin(users, setValue)}
                        className='btn-round'
                        color='primary'
                        type='submit'
                      >
                        Entrar
                      </Button>
                    </div>
                    {this.state.error !== '' && (
                      <div className='update ml-auto mr-auto'>
                        <span style={{ color: '#d91b5c' }}>
                          {this.state.error}
                        </span>
                      </div>
                    )}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </Context.Consumer>
    )
  }
}
