import React from "react";
import './style/head.css'
import './style/body-karta.css'
import './style/body-reg.css'
import MainMap from "./components/MainMap";

function App() {
    return (
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
                    <a href="" className="kins">FFF</a>
                    <br/>
                    <a href="" className="kins">Карта мерзлотных ландшафтов</a>
                </div>
                <div className="kart"><MainMap /></div>
            </div>

            <div className="foot"/>
        </div>
    );
}

export default App;
