import { createContext } from 'react'

export default createContext({
  user: {
    _data: {},
    _isLogged: false
  },

  clubReports: [],
  directorReports: [],

  report: {},

  users: [],
  clubs: []
})
