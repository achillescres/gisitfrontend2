import React from 'react';

import { MapContainer } from 'react-leaflet'

import OpenStreetMapLayer from "./OpenStreetMapLayer";
import IceLayer from "./IceLayer";
import MlkLayer from "./MlkLayer";

import MarkerFactory from "./MarkerFactory";

const MainMap = () => {
    return (
        <div className="kart">
            <MapContainer center={[61.9916, 129.7266]} zoom={6} maxZoom={8} style={{'height': '99vh'}}>
                <OpenStreetMapLayer />
                <IceLayer />
                <MlkLayer />
                <MarkerFactory />
            </MapContainer>
        </div>
    );
};

export default MainMap;
