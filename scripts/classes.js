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
    constructor(x, y, radius, speed, name) {
        this.x = x;
        this.y = y;
        this.target = { x: 0, y: 0 };
        this.radius = radius;
        this.speed = speed;
        this.dir = "L";
        this.prevDir = "L";
        this.prevprevDir = "L";
        this.name = name;
    }
    retarget(player, blinky) {
        if (this.name == "Blinky") {
            this.target.x = player.x;
            this.target.y = player.y;
        }
        else if (this.name == "Pinky") {
            this.target.x = player.x;
            this.target.y = player.y;
            if (player.dir == "U") {
                this.target.x = player.x - 80;
                this.target.y = player.y - 80;
            } else if (player.dir == "R") {
                this.target.x = player.x + 80;
            } else if (player.dir == "L") {
                this.target.x = player.x - 80;
            } else if (player.dir == "D") {
                this.target.y = player.y + 80;
            }
        }else if (this.name == "Clyde") {
            let dist = Math.sqrt(Math.pow(this.x - player.x, 2) + Math.pow((this.y - this.speed) - player.y, 2));
            if(dist <  8 * 20){
                this.target.x = 60;
                this.target.y = 50 + 32 * 20;
            }else{
                this.target.x = player.x;
                this.target.y = player.y;
            }
        }else if (this.name == "Inky"){
            let xDist = Math.abs(player.x - blinky.x);
            let yDist = Math.abs(player.y - blinky.y);
            if(blinky.x < player.x){
                this.target.x = player.x + xDist;
            }else{
                this.target.x = player.x - xDist;
            }
            if(blinky.y < player.y){
                this.target.y = player.y + yDist;
            }else{
                this.target.y = player.y - yDist;
            }
        }
    }
    changeDir(walls) {
        let upDist = Math.sqrt(Math.pow(this.x - this.target.x, 2) + Math.pow((this.y - this.speed) - this.target.y, 2));
        let downDist = Math.sqrt(Math.pow(this.x - this.target.x, 2) + Math.pow((this.y + this.speed) - this.target.y, 2));
        let leftDist = Math.sqrt(Math.pow((this.x - this.speed) - this.target.x, 2) + Math.pow(this.y - this.target.y, 2));
        let rightDist = Math.sqrt(Math.pow((this.x + this.speed) - this.target.x, 2) + Math.pow(this.y - this.target.y, 2));

        let canGoUp = !(this.x > 50 + 7 * 20 + 10 + 4 * 20 && this.x < 50 + 20 * 20 + 10 && this.y > 50 + 22 * 20 + 10 && this.y < 50+ 24 * 20 + 10) && (this.dir != "D" && this.prevDir != "D" && !(this.dir != "U" && this.prevDir == "U") && !(this.dir != "U" && this.prevprevDir == "U") && dotNotInWalls({ x: this.x, y: this.y - this.radius - this.speed }, walls) && dotNotInWalls({ x: this.x + this.radius / 2, y: this.y - this.radius}, walls) && dotNotInWalls({ x: this.x - this.radius / 2, y: this.y - this.radius  }, walls));
        let canGoDown = this.dir != "U" && this.prevDir != "U" && !(this.dir != "D" && this.prevDir == "D") && !(this.dir != "D" && this.prevprevDir == "D") && dotNotInWalls({ x: this.x, y: this.y + this.radius + this.speed }, walls) && dotNotInWalls({ x: this.x + this.radius / 2, y: this.y + this.radius  }, walls) && dotNotInWalls({ x: this.x - this.radius / 2, y: this.y + this.radius  }, walls);
        let canGoLeft = this.dir != "R" && this.prevDir != "R" && !(this.dir != "L" && this.prevDir == "L") && !(this.dir != "L" && this.prevprevDir == "L") && dotNotInWalls({ x: this.x - this.radius - this.speed, y: this.y }, walls) && dotNotInWalls({ x: this.x - this.radius , y: this.y + this.radius / 2 }, walls) && dotNotInWalls({ x: this.x - this.radius, y: this.y - this.radius / 2 }, walls);
        let canGoRight = this.dir != "L" && this.prevDir != "L" && !(this.dir != "R" && this.prevDir == "R") && !(this.dir != "R" && this.prevprevDir == "R") && dotNotInWalls({ x: this.x + this.radius + this.speed, y: this.y }, walls) && dotNotInWalls({ x: this.x + this.radius, y: this.y + this.radius / 2 }, walls) && dotNotInWalls({ x: this.x + this.radius , y: this.y - this.radius / 2 }, walls);
        this.prevprevDir= this.prevDir;
        this.prevDir = this.dir;
        if (canGoUp && (upDist <= downDist || !canGoDown) && (upDist <= leftDist || !canGoLeft) && (upDist <= rightDist || !canGoRight)) {
            this.dir = "U";
        } else if (canGoDown && (downDist <= upDist || !canGoUp) && (downDist <= leftDist || !canGoLeft) && (downDist <= rightDist || !canGoRight)) {
            this.dir = "D";
        } else if (canGoRight && (rightDist <= upDist || !canGoUp) && (rightDist <= leftDist || !canGoLeft) && (rightDist <= downDist || !canGoDown)) {
            this.dir = "R";
        } else if (canGoLeft && (leftDist <= upDist || !canGoUp) && (leftDist <= downDist || !canGoDown) && (leftDist <= rightDist || !canGoRight)) {
            this.dir = "L";
        }
    }
    draw() {
        ctx.fillStyle = 'rgb(0,255, 0)';
        if (this.name == "Blinky") ctx.fillStyle = 'rgb(255, 0, 0)';
        if (this.name == "Pinky") ctx.fillStyle = 'rgb(255, 210, 210)';
        if (this.name == "Clyde"){
             ctx.fillStyle = 'rgb(255, 200, 150)';
             ctx.beginPath();
             ctx.arc(this.target.x, this.target.y, 5, 0, 2 * Math.PI);
             ctx.fill();
            }
            
        if (this.name == "Inky"){
            ctx.fillStyle = '#add8e6';
            ctx.beginPath();
            ctx.arc(this.target.x, this.target.y, 5, 0, 2 * Math.PI);
            ctx.fill();
           }
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

function dotNotInWalls(dot, walls) {
    for (let wall of walls) {
        if (dot.x >= wall.x && dot.x <= wall.x + wall.width && dot.y >= wall.y && dot.y <= wall.y + wall.height) {
            return false;
        }
    }
    return true;
}