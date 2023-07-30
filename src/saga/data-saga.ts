import { call, put, takeEvery } from 'redux-saga/effects'
import {
    fetchDataStart,
    fetchDataSuccess,
    fetchDataFailure,
} from '../store/routes-slice'
import { getCurrentPoints } from '../utils'
import { Route } from '../types'

function* fetchData(currentRoute: { payload: Route }): any {
    try {
        const response = yield call(
            fetch,
            `http://router.project-osrm.org/route/v1/driving/${getCurrentPoints(
                currentRoute.payload
            )}?geometries=geojson&overview=full`
        )
        const data = yield response.json()

        if (data.code === 'Ok') {
            yield put(fetchDataSuccess(data.routes))
        } else {
            yield put(fetchDataFailure(data.message))
        }
    } catch (error) {
        yield put(fetchDataFailure(error))
    }
}

function* dataSaga() {
    yield takeEvery(fetchDataStart.type, fetchData)
}

export default dataSaga
