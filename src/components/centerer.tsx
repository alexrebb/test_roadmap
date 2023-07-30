import { memo, useEffect } from 'react'

import { LatLngTuple } from 'leaflet'
import { useMap } from 'react-leaflet'

const Centerer = ({ center }: { center: LatLngTuple }) => {
    const map = useMap()

    useEffect(() => {
        if (center) map.setView(center)
    }, [center, map])

    return null
}

export default memo(Centerer)
