import { combineReducers, configureStore } from '@reduxjs/toolkit'
import routeReducer from './routes-slice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/root-saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    routeReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
