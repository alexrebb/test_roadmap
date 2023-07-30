export interface Point {
    pointName: string
    lat: number
    ing: number
}

export interface Route {
    routeName: string
    id: number
    points: Point[]
    polylines: null
}

export interface RoutesState {
    allRoutes: Route[]
    currentRouteId: number | null
    currentPolylines: any[] | null
    loading: boolean
    error: any | null
}

export interface SetCurrentRouteAction {
    type: string
    payload: number
}

export interface FetchDataStartAction {
    type: string
}

export interface FetchDataSuccessAction {
    type: string
    payload: any[]
}

export interface FetchDataFailureAction {
    type: string
    payload: any
}
