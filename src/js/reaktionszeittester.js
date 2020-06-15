"use strict";

document.getElementById("startButton").addEventListener("click", () => {
    let timeout;
    let target = document.getElementById("target");
    let timeOfAppearance;
    let timeOfReaction;
    let timeToReact;

    let calculateTimeout = () => {
        let randomNumber = Math.random();
        timeout = randomNumber * 2000;
        console.log(timeout);
    }

    let displayTarget = () => {
        timeOfAppearance = Date.now();
        generateRandomForm();
        calculateTimeout();
        setTimeout(function() {
            target.style.display = "inline-block";
        }, timeout, false);
    }

    let generateRandomForm = () => {
        // Position
        let randomPositionX = Math.random() * 85;
        let randomPositionY = Math.random() * 80;
        target.style.bottom = randomPositionY + "%";
        target.style.right = randomPositionX + "%";

        // Color
        let randomCase = Math.round((Math.random() * 3));
        let randomColor;
        console.log(randomCase);
        switch (randomCase) {
            case 1:
                randomColor = "#A22C29";
                break;
            case 2:
                randomColor = "#F8F32B";
                break;
            case 3:
                randomColor = "#2E933C";
                break;
            default:
                randomColor = "#000";
                break;
        }
        target.style.backgroundColor = randomColor;

        // Size
        let randomSize = Math.round(((Math.random() * 100) / 3)) + 35;
        target.style.height = randomSize + "px";
        target.style.width = randomSize + "px";

        // Form
        let randomNumber = Math.round(Math.random());
        let randomBorderRadius;
        if (randomNumber == 0) {
            randomBorderRadius = 100;
        } else {
            randomBorderRadius = 0;
        }
        target.style.borderRadius = randomBorderRadius + "%";
    }

    displayTarget();
    target.addEventListener("click", function() {
        timeOfReaction = Date.now();
        timeToReact = timeOfReaction - timeOfAppearance;
        target.style.display = "none";
        console.log(timeToReact);
        displayTarget();
    })

    // Exit game
    document.getElementById("stopButton").addEventListener("click", () => {
        target.style.display = "none";
    })
});