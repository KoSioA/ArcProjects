let canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
export class Wall {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

export class Pallet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 5;
    }
    draw() {
        ctx.fillStyle = 'rgb(200, 200, 200)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}
export class npc {
    constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.dir = "L";
    }
    changeDir() {
        let rand = Math.floor(Math.random() * 4);
        switch (rand) {
            case 0:
                this.dir = "L";
                break;
            case 1:
                this.dir = "R";
                break;
            case 2:
                this.dir = "U";
                break;
            case 3:
                this.dir = "D";
                break;
        }
    }
    draw() {
        ctx.fillStyle = 'rgb(0,255, 0)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

export let UI = {
    score: 0,
    draw() {
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.font = "30px Arial";
        ctx.fillText(score, 10, 25);
    }
}