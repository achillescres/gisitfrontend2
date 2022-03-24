import React from 'react';

import {TileLayer} from "react-leaflet";

import STATIC from "../../static";

const IceLayer = () => {
    return (
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={`${STATIC.HOST}/tiles/ice/{z}/{x}/{y}`}
        />
    );
};

export default IceLayer;