let triSize = 0;
let triRising = true;
let canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
export let player = {
    x: 330,
    y: 520,
    radius: 20,
    speed: 10,
    dir: "",
    draw() {

        ctx.fillStyle = 'rgb(255, 255, 0)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        switch (this.dir) {
            case "L":

                ctx.lineTo(this.x - this.radius, this.y + triSize);
                ctx.lineTo(this.x - this.radius, this.y - triSize);
                break;
            case "U":
                ctx.lineTo(this.x + triSize, this.y - this.radius);
                ctx.lineTo(this.x - triSize, this.y - this.radius);
                break;
            case "D":
                ctx.lineTo(this.x + triSize, this.y + this.radius);
                ctx.lineTo(this.x - triSize, this.y + this.radius);
                break;

            case "R":
            default:
                ctx.lineTo(this.x + this.radius, this.y + triSize);
                ctx.lineTo(this.x + this.radius, this.y - triSize);
                break;


        }

        if (triRising) {
            triSize += 5;
        } else {
            triSize -= 5;
        }

        if (triSize >= player.radius) {
            triSize = player.radius;
            triRising = false;
        } else if (triSize <= 0) {
            triSize = 0;
            triRising = true;
        }
        ctx.fill();
    }

};

export function playerMove(e) {
    switch (e.key) {
        case "a":
            player.dir = "L";
            break;
        case "w":
            player.dir = "U";
            break;
        case "d":
            player.dir = "R";
            break;
        case "s":
            player.dir = "D";
            break;
    }
}