import React, {useState} from 'react';
import {Marker, Popup, useMapEvent} from "react-leaflet";
import AbstractMarker from "../../abstracts/AbstractMarker";


const MarkerFactory = () => {
    const [ markers, setMarkers ] = useState([])
    const addMarker = e => {
        const landType = 'Unknown';
        setMarkers(prev => prev.concat([new AbstractMarker(e.latlng, landType)]))
    }

    useMapEvent('click', addMarker)

    return (
        <>
            {
                markers.map((abstractMarker, idx) =>
                    <Marker key={`marker-${idx}`} position={abstractMarker.position} >
                        <Popup>
                            <span>{ abstractMarker.getPositionString(4) }</span>
                        </Popup>
                    </Marker>
                )
            }
        </>
    );
};

export default MarkerFactory;
