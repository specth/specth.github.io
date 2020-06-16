"use strict"

let startButton = document.getElementById("jumpGameStartButton");
let stopButton = document.getElementById("jumpGameStopButton");

class Renderer {
    constructor(element) {
        this.element = element;
        this.setup();
    };

    setup() {
        let box = document.createElement("div");
        box.style.position = "absolute";
        box.style.top = "20px";
        box.style.left = "40%";
        box.style.width = "30px";
        box.style.height = "30px";
        box.style.backgroundColor = "#000";
        box.style.borderRadius = "100%";
        this.element.appendChild(box);
        this.box = box;
    };

    gameOver(score) {
        let gameOverMessage = document.createElement("div");
        gameOverMessage.innerHTML = "Game over!</br>Your score: " + score + " Points.";

        gameOverMessage.style.marginTop = "20%";
        gameOverMessage.align = "center";
        gameOverMessage.style.fontSize = "1.5rem";
        gameOverMessage.style.textDecorationStyle = "solid";

        this.element.appendChild(gameOverMessage);
        this.gameOverMessage = gameOverMessage;
        this.deleteGameOverMessage();
    }

    deleteGameOverMessage() {
        startButton.addEventListener("click", () => {
            this.gameOverMessage.remove();
        });
    }

    render(position) {
        this.box.style.top = position + "px";
    };

    deleteBox() {
        this.box.remove();
    };
};

class Box {
    constructor() {
        this.position = 0;
        this.speed = 0;
    };
    runLoop() {
        this.speed += 0.075;
        this.position = this.position + this.speed;
    };
    moveUp() {
        this.speed = -4.5;
    };
};

class Game {
    constructor(element) {
        this.renderer = new Renderer(element);
        this.box = new Box();
        this.element = element;
        this.isRunning = true;
        this.setup();
    };

    stop() {
        this.isRunning = false;
    }

    setup() {
        this.element.addEventListener("click", () => {
            this.box.moveUp();
        });
    };

    start() {
        stopButton.addEventListener("click", () => {
            this.stop();
        });
        let counter = 0;
        let timer = setInterval(() => {
            counter++;

            let result = document.getElementById("jumpGameResult");
            result.innerHTML = counter;

            this.box.runLoop();
            if (this.box.position < 0 || this.box.position + 20 > this.element.clientHeight) {
                this.isRunning = false;
                clearInterval(timer);
                this.renderer.deleteBox();
                this.renderer.gameOver(counter);
            }
            if (this.isRunning == true) {
                this.renderer.render(this.box.position);
            }
        }, 7)
    };
};

startButton.addEventListener("click", () => {

    let game = new Game(document.getElementById("jumpGame"));
    game.start();
});