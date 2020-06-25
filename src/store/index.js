import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../reducers/index'
import logger from 'redux-logger'
import rootSaga from '../sagas/index'


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
    logger
  )
)

sagaMiddleware.run(rootSaga)