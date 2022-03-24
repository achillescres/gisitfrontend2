import React, {useState} from 'react';
import MainMap from "../Layers/MainMap";
import List from "../List/List";

const Body = () => {
    const [selectedProperties, setSelectedProperties] = useState({'body': 'Select'})
    return (
        <div className="body">
            <List />
            <MainMap />
        </div>
    );
};

export default Body;