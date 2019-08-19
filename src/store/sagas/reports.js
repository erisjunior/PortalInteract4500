import { takeLatest, call, put, select } from 'redux-saga/effects'
import ReportsActions, { ReportsTypes } from 'store/ducks/reports'

import { save } from 'services/firebase'

function* setPresidentReport({ presidentReport }) {
  save('report', presidentReport)
}

export default [
  takeLatest(ReportsTypes.SET_PRESIDENT_REPORT, setPresidentReport)
]
