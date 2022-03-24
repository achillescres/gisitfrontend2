import React from 'react';

import {FeatureGroup, GeoJSON, Popup} from "react-leaflet";
// import 'leaf'

import axios from "axios";
import STATIC from "../../static";


class MlkLayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            features: []
        };
    }

    render() {
        return (
            <FeatureGroup>
                {
                    this.state.features.map((feature, idx) => (
                        <GeoJSON key={`${feature.properties.ORIG_FID}${feature.properties.OBJECTID}${idx}`} data={feature} >
                            <Popup>{feature.properties.TM}</Popup>
                        </GeoJSON>
                    ))
                }
            </FeatureGroup>
        );
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        console.log(`${STATIC.HOST}/mlk`)
        const data = axios.get(`${STATIC.HOST}/mlk`)
        data
            .then(res => {
                this.setState({
                    features: res.data.features
                })
                console.log(res.data.features)
            }, (error) => { console.log(error) })
    }
}

// const MlkLayer = async () => {
//     const [content, setContent] = useState()
//     use
//     console.log(content)
//     return (
//         <GeoJSON data={} />
//     );
// };

export default MlkLayer;
