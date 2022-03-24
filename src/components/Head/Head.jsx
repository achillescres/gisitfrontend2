import React from 'react';

const Head = () => {
    return (
        <div className="head" style={{position: 'relative', zIndex: 1}}>
            <button className="tripol" style={{display: 'none'}}/>
            <div className="logo" />
            <div className="vline" />
            <div className="strel">
                <a href="App.js" className="h5">Карты</a>
            </div>
            <a className="ling" href="../index.js">Регистрация</a>
        </div>
    );
};

export default Head;