import React from "react";

import './styles/head.css'
import './styles/body-karta.css'

import MainMap from "./components/Layers/MainMap";
import InfoBar from "./components/InfoBar";

function App() {
    return (
        <div>
            {/* КАРТА КАРТА КАРТА КАРТА */}
            <div>
                <div className="head" style={{position: 'relative', zIndex: 1}}>
                    <button className="tripol" style={{display: 'none'}}/>
                    <div className="logo"/>
                    <div className="vline"/>
                    <div className="strel">
                        <a href="App.js" className="h5">Карты</a>
                    </div>
                    <a className="ling" href="../index.js">Регистрация</a>
                </div>
                {/* КАРТА КАРТА КАРТА КАРТА */}
                <div className="body">
                    <div className="spisok">
                        <h2 style={{fontFamily: 'NS-r', marginTop: '2vh'}}>Список</h2>
                        <br/>
                        <br/>
                        <a href="App.js" className="kins">FFF</a>
                        <br/>
                        <a href="index.js" className="kins">Карта мерзлотных ландшафтов</a>
                    </div>
                    <MainMap />
                </div>
                {/*/!*<InfoBar />*!/*/}
                {/*<MainMap />*/}
            </div>

            <div className="foot"/>
        </div>
    );
}

export default App;
