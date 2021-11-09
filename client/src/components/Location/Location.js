import React from 'react'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'


const Location = withScriptjs(withGoogleMap(() => {
    return (
        <div>
            <GoogleMap
                defaultZoom={16}
                defaultCenter={{ lat: 46.061029, lng: 18.211213, }}
            >
                <Marker
                    position={{ lat: 46.061029, lng: 18.211213, }}
                />
            </GoogleMap>
        </div>
    )
}))

export default Location