"use strict";

document.getElementById("reactionGameStartButton").addEventListener("click", () => {
    let timeout;
    let target = document.getElementById("target");
    let timeOfAppearance;
    let timeOfReaction;
    let timeToReact;
    let highscore = 0;

    /* Creates a random timeout between 0 and 2 seconds */
    let calculateTimeout = () => {
        let randomNumber = Math.random();
        timeout = randomNumber * 2000;
    };

    /* Makes the target visible after the previously calculated timeout and starts the game */
    let displayTarget = () => {
        timeOfAppearance = Date.now();
        generateRandomForm();
        calculateTimeout();
        setTimeout(function() {
            target.style.display = "inline-block";
        }, timeout, false);
    };

    /* Generates a form with random color, size and form at a random position */
    let generateRandomForm = () => {
        // Position
        let randomPositionX = Math.random() * 85;
        let randomPositionY = Math.random() * 75;
        target.style.bottom = randomPositionY + "%";
        target.style.right = randomPositionX + "%";

        // Color
        let randomCase = Math.round((Math.random() * 3));
        let randomColor;
        switch (randomCase) {
            case 1:
                randomColor = "#A22C29";
                break;
            case 2:
                randomColor = "#F0DA50";
                break;
            case 3:
                randomColor = "#2E933C";
                break;
            default:
                randomColor = "#000";
                break;
        };
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
    };

    /* Execute displayTarget function to start the game */
    displayTarget();
    /* Listen for clicks on the target to make the game playable */
    target.addEventListener("click", function() {
        timeOfReaction = Date.now();
        timeToReact = timeOfReaction - timeOfAppearance;
        target.style.display = "none";
        document.getElementById("result").innerHTML = Math.round((timeToReact / 1000) * 100) / 100 + " s";
        if (highscore == 0 || highscore > timeToReact) {
            highscore = timeToReact;
            document.getElementById("record").innerHTML = Math.round((highscore / 1000) * 100) / 100 + " s";
        };
        /* Call the displayTarget function inside the main function to automatically start the next round after the user clicked on the target */
        displayTarget();
    });

    /* Exit game */
    document.getElementById("reactionGameStopButton").addEventListener("click", () => {
        target.style.display = "none";
        document.getElementById("result").innerHTML = "";
    });
});