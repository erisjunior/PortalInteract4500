import { all } from 'redux-saga/effects'

import ReportsSagas from './reports'

export default function* rootSaga() {
  return yield all([...ReportsSagas])
}
