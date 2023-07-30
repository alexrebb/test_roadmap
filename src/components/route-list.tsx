import { useCallback } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { Radio, RadioChangeEvent, Space } from 'antd'

import { setCurrentRoute } from '../store/routes-slice'
import { Route } from '../types'

const RouteList = () => {
    const data = useSelector((state: any) => state.routeReducer)
    const dispatch = useDispatch()

    const routeOnChange = useCallback(
        (e: RadioChangeEvent) => {
            dispatch(setCurrentRoute(e.target.value))
        },
        [dispatch]
    )

    return (
        <div className="table-container">
            <Radio.Group
                value={data.currentRouteId || ''}
                onChange={routeOnChange}
            >
                <Space direction="vertical">
                    {data.allRoutes.map((route: Route) => (
                        <Radio.Button key={route.id} value={route.id}>
                            {route.routeName}
                        </Radio.Button>
                    ))}
                </Space>
            </Radio.Group>
        </div>
    )
}

export default RouteList
