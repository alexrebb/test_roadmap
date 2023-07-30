import { createSlice } from '@reduxjs/toolkit'
import { DATA } from '../constants'
import {
    FetchDataFailureAction,
    FetchDataSuccessAction,
    RoutesState,
    SetCurrentRouteAction,
} from '../types'

const routesSilce: any = createSlice({
    name: 'routes',
    initialState: {
        allRoutes: DATA,
        currentRouteId: null,
        currentPolylines: null,
        loading: false,
        error: null,
    } as RoutesState,
    reducers: {
        setCurrentRoute: (state, action: SetCurrentRouteAction) => {
            state.currentRouteId = action.payload
        },
        closeErrorModal: state => {
            state.error = null
        },
        fetchDataStart(state) {
            state.loading = true
            state.error = null
        },
        fetchDataSuccess(state, action: FetchDataSuccessAction) {
            state.currentPolylines = action.payload.map(
                (polyline: any) => polyline.geometry.coordinates
            )
            state.loading = false
            state.error = null
        },
        fetchDataFailure(state, action: FetchDataFailureAction) {
            state.loading = false
            state.error = action.payload
        },
    },
})

export default routesSilce.reducer
export const {
    fetchDataStart,
    setCurrentRoute,
    fetchDataSuccess,
    fetchDataFailure,
    closeErrorModal,
} = routesSilce.actions
