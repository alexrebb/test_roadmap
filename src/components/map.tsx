import { useMemo, useEffect } from 'react'
import Centerer from './centerer'

import { MapContainer, TileLayer, Popup, Circle, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LatLngTuple } from 'leaflet'

import { useSelector, useDispatch } from 'react-redux'

import { fetchDataStart } from '../store/routes-slice'
import { Point, Route } from '../types'
import { getCenterPosition } from '../utils'

import {
    CIRCLE_COLOR,
    CIRCLE_RADIUS,
    DEFAULT_POSITION,
    LAYER_PROPS,
    LINE_COLOR,
    MAP_ZOOM,
} from '../constants'

const Map = () => {
    const data = useSelector((state: any) => state.routeReducer)
    const dispatch = useDispatch()

    const currentRoute: Route | null = useMemo(
        () =>
            data.allRoutes.find(
                (route: Route) => route.id === data.currentRouteId
            ),
        [data]
    )

    const centerPosition: LatLngTuple = useMemo(
        () =>
            (currentRoute && getCenterPosition(currentRoute)) ||
            DEFAULT_POSITION,
        [currentRoute]
    )

    useEffect(() => {
        if (!currentRoute) return

        dispatch(fetchDataStart(currentRoute))
    }, [currentRoute, dispatch])

    return (
        <MapContainer
            zoom={MAP_ZOOM}
            scrollWheelZoom={true}
            center={centerPosition}
        >
            <Centerer center={centerPosition} />
            <TileLayer {...LAYER_PROPS} />
            {currentRoute &&
                currentRoute.points.map((point: Point) => (
                    <Circle
                        center={[point.lat, point.ing]}
                        pathOptions={CIRCLE_COLOR}
                        radius={CIRCLE_RADIUS}
                        key={point.pointName}
                    >
                        <Popup>{point.pointName}</Popup>
                    </Circle>
                ))}
            <Polyline
                pathOptions={LINE_COLOR}
                positions={data.currentPolylines || []}
            />
        </MapContainer>
    )
}

export default Map
