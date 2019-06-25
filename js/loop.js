"use strict";

const ballContainer =  document.getElementById("ball");

const ball = lottie.loadAnimation({
    container: ballContainer,
    renderer: "svg",
    autoplay: false,
    loop: false,
    path: 'data/looptest-1.json' // async load
});

// Wait for animation to be ready (async load)
ball.addEventListener("data_ready", () => {
    // Play frames 0 to 50
    ball.playSegments([0,50],true);
    // Loop animation
    ball.loop = true;

    // Listen for click on container
    ballContainer.addEventListener("click", () => {
        // Listen for loop to be complete.
        ball.addEventListener("loopComplete", ()=> {
            // Play end of animation, frame 50 - 101
            ball.playSegments([50, 101], true);
            // Stop looping
            ball.loop = false;
        })
    })
});