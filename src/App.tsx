import RouteList from './components/route-list'
import Map from './components/map'
import { Modal, Spin } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import './style.sass'
import { useCallback } from 'react'
import { closeErrorModal } from './store/routes-slice'

function App() {
    const data = useSelector((state: any) => state.routeReducer)
    const dispatch = useDispatch()

    const handleCloseMOdal = useCallback(() => {
        dispatch(closeErrorModal())
    }, [dispatch])

    return (
        <div className={`container ${data.loading ? 'loading' : ''}`}>
            <div className={data.loading ? 'spinner' : 'loaded '}>
                <Spin size="large" />
            </div>
            <Modal
                title="Error"
                open={data.error}
                onOk={handleCloseMOdal}
                onCancel={handleCloseMOdal}
            >
                {data.error}
            </Modal>
            <RouteList />
            <Map />
        </div>
    )
}

export default App
