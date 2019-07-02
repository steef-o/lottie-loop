"use strict";

const bgContainer = document.getElementById("bg");
const fgContainer = document.getElementById("fg");
const sunContainer = document.getElementById("sun");
const sunCalcContainer = document.getElementById("sunCalc");

const bgAnimation = lottie.loadAnimation({
    container: bgContainer,
    renderer: "html",
    autoplay: true,
    loop: true,
    path: 'data/00_Bakgrunn.json', // async load
    rendererSettings:{
        progressiveLoad: true
    }
});

const fgAnimation = lottie.loadAnimation({
    container: fgContainer,
    renderer: "html",
    autoplay: true,
    loop: true,
    path: 'data/01_Forgrunn.json', // async load
    rendererSettings:{
        progressiveLoad: true
    }
});

const sunAnimation = lottie.loadAnimation({
    container: sunContainer,
    renderer: "html",
    autoplay: true,
    loop: true,
    path: 'data/02_Sol.json', // async load
    rendererSettings:{
        progressiveLoad: true
    }
});

const sunCalcAnimation = lottie.loadAnimation({
    container: sunCalcContainer,
    renderer: "html",
    autoplay: true,
    loop: true,
    path: 'data/03_Solkonto.json', // async load
    rendererSettings:{
        progressiveLoad: true
    }
});

sunCalcAnimation.addEventListener('data_ready', function () {
    lottie.setQuality("low");
});