import { LatLngTuple } from 'leaflet'
import { DEFAULT_POSITION } from '../constants'
import { Route, Point } from '../types'

export const getCenterPosition = (currentRoute: Route): LatLngTuple => {
    if (!currentRoute) return DEFAULT_POSITION

    let resLat = 0
    let resLng = 0
    const pointsCount = currentRoute.points.length

    currentRoute.points.forEach((point: Point) => {
        resLat += point.lat
        resLng += point.ing
    })

    return [resLat / pointsCount, resLng / pointsCount]
}

export const getCurrentPoints = (currentRoute: Route): string =>
    currentRoute.points
        .map((point: Point) => `${point.lat},${point.ing}`)
        .join(';')
