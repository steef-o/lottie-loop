"use strict";

const ballContainer =  document.getElementById("ball");
const solContainer =  document.getElementById("sol");
const sol2Container =  document.getElementById("sol2");
const sol3Container =  document.getElementById("sol3");

const ball = lottie.loadAnimation({
    container: ballContainer,
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: 'data/Looptest-1.json' // async load
});
/*
const sol = lottie.loadAnimation({
    container: solContainer,
    renderer: "svg",
    autoplay: true,
    loop: true,
    path: 'data/solkonto.json' // async load
});

const sol2 = lottie.loadAnimation({
    container: sol2Container,
    renderer: "svg",
    autoplay: true,
    loop: true,
    path: 'data/solkonto.json' // async load
});

const sol3 = lottie.loadAnimation({
    container: sol3Container,
    renderer: "svg",
    autoplay: true,
    loop: true,
    path: 'data/solkonto.json' // async load
});
*/

//sol2.setSpeed(2);
//sol3.setSpeed(3);

// Wait for animation to be ready (async load)
ball.addEventListener("data_ready", function () {
    // Play frames 0 to 50
    ball.setSubframe(false);
    lottie.setQuality(1);

    ball.playSegments([0,50],true);
    // Loop animation
    ball.loop = true;

    // Listen for click on container
    ballContainer.addEventListener("click", function (){
        // Listen for loop to be complete.
        ball.addEventListener("loopComplete", function() {
            // Play end of animation, frame 50 - 101
            ball.playSegments([50, 101], true);
            // Stop looping
            ball.loop = false;
        })
    })
});


(function () {
    const PATH = 'data/solkonto.json';
    const RENDERER = 'svg';
    const FRAMES = 60;

    let anim = lottie.loadAnimation({
        container: document.querySelector('.anim'),
        renderer: RENDERER,
        loop: false,
        autoplay: false,
        path: PATH,
        rendererSettings: {
            preserveAspectRatio:'xMidYMid meet'
        },
    });

    console.log("start");
    const t_rate = 1.0 / (FRAMES - 1);
    let time = 0;
    let max = -1;
    let min = 1000000000;
    let seek = 0;
    let frame = 0;
    const drawFrame =  function () {
        if (frame >= FRAMES) {
            console.log("On average, took "+ (time/FRAMES) +" us" );
            // These are global variables to talk with puppeteer.
            window._avgFrameTimeUs = time/FRAMES;
            window._minFrameTimeUs = min;
            window._maxFrameTimeUs = max;
            window._lottieWebDone = true;
            return;
        }

        let start = window.performance.now();
        anim.goToAndStop(frame, true /* isFrame */);
        const t = (window.performance.now() - start) * 1000;

        time += t;
        console.log("Frame " + frame + " took " + t + " ms");
        console.log("Used seek " + seek);
        if (t < min) {
            min = t;
        }
        if (t > max) {
            max = t;
        }
        seek += t_rate;
        frame++;
        window.requestAnimationFrame(drawFrame);
    };
    window.requestAnimationFrame(drawFrame);
})();