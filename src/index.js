import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

window.onload = function(){
    var canvas = document.createElement("canvas");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    var context = canvas.getContext("2d");
    context.fillStyle = "#FFF";
    context.fillRect(0,0,800,600);

    context.globalAlpha = 0.5;
    
    for(let i=0; i<=45; i++){
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);

        context.fillStyle = "rgb(" + R + "," + G + "," + B + ")";

        context.beginPath();
        context.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 100, 0, Math.PI * 2);
        context.fill();
    }
    const bg = canvas.toDataURL()
    document.getElementsByTagName('body')[0].style.background = `url(${bg})`
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
