import React from "react";

import './styles/App.css'
import './styles/head.css'
import './styles/body-karta.css'

import Head from "./components/Head/Head";
import Body from "./components/Body/Body";

function App() {
    return (
        <div>
            {/* КАРТА КАРТА КАРТА КАРТА */}
            <div>
                <Head />
                {/* КАРТА КАРТА КАРТА КАРТА */}
                <Body />
                {/*/!*<InfoBar />*!/*/}
                {/*<MainMap />*/}
            </div>

            <div className="foot"/>
        </div>
    );
}

export default App;
