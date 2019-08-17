import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducers from './ducks'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const composer = applyMiddleware(...middlewares)

const store = createStore(rootReducers, composer)

sagaMiddleware.run(rootSaga)

export default store
