import { LatLngTuple } from 'leaflet'
import { Route } from './types'

export const LAYER_PROPS = {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
}

export const LINE_COLOR = { color: 'lime' }

export const CIRCLE_COLOR = { fillColor: 'blue' }

export const CIRCLE_RADIUS = 200

export const MAP_ZOOM = 9

export const DEFAULT_POSITION: LatLngTuple = [10, 10]

export const DATA: Route[] = [
    {
        routeName: 'Route 1',
        id: 1,
        points: [
            {
                pointName: 'Point 1',
                lat: 59.84660399,
                ing: 30.29496392,
            },
            {
                pointName: 'Point 2',
                lat: 59.82934196,
                ing: 30.42423701,
            },
            {
                pointName: 'Point 3',
                lat: 59.83567701,
                ing: 30.38064206,
            },
        ],
        polylines: null,
    },
    {
        routeName: 'Route 2',
        id: 2,
        points: [
            {
                pointName: 'Point 1',
                lat: 59.82934196,
                ing: 30.42423701,
            },
            {
                pointName: 'Point 2',
                lat: 59.82761295,
                ing: 30.41705607,
            },
            {
                pointName: 'Point 3',
                lat: 59.84660399,
                ing: 30.29496392,
            },
        ],
        polylines: null,
    },
    {
        routeName: 'Route 3',
        id: 3,
        points: [
            {
                pointName: 'Point 1',
                lat: 59.83567701,
                ing: 30.38064206,
            },
            {
                pointName: 'Point 2',
                lat: 59.84660399,
                ing: 30.29496392,
            },
            {
                pointName: 'Point 3',
                lat: 59.82761295,
                ing: 30.41705607,
            },
        ],
        polylines: null,
    },
]
