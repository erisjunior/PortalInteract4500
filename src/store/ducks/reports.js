import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  updateReport: ['field']
})

export const ReportsTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
  report: {}
})

const onUpdateReport = state => state.merge({})

export const ReportsReducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_REPORT]: onUpdateReport
})
