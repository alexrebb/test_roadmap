import { all } from 'redux-saga/effects'
import dataSaga from './data-saga'

function* rootSaga() {
    yield all([dataSaga()])
}

export default rootSaga
