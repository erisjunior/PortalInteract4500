import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  setPresidentReport: ['presidentReport'],

  sendReport: null
})

export const ReportsTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
  presidentReport: null
})

const onSetInfo = (state, action) => state.merge({ ...action })

export const ReportsReducer = createReducer(INITIAL_STATE, {
  [Types.SET_PRESIDENT_REPORT]: onSetInfo
})
