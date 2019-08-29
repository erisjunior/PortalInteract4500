import { createContext } from 'react'

export default createContext({
  user: {
    _data: {},
    _isLogged: false
  },

  report: {},

  users: [],
  clubs: []
})
