let canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let player = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    speed: 10
};
class npc {
    constructor(x, y, width, height, speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.longMoveLength = 0;
        this.longMoveDir = 0;
    }
    move(){
        let direction;
        if(this.longMoveLength >= 0){
            direction = this.longMoveDir;
            this.longMoveLength--;
        }else{
            direction =  Math.floor(Math.random() * 5);
        }
       switch(direction){
        case 0:
            this.x -= this.speed;
            break;
        case 1:
            this.x += this.speed;
            break;
        case 2:
            this.y -= this.speed;
            break;
        case 3:
            this.y += this.speed;
            break;
        case 4:
            let longdirection = Math.floor(Math.random() * 4);
            let length = 10 + Math.floor(Math.random() * 15);
            console.log(`long moving ${longdirection} for ${length}!`);
            this.longMoveDir = longdirection;
            this.longMoveLength = length;
            this.move();
       }
       limit(this);
    }
}
let npcs = [
    new npc( 100, 100, 50, 50, 10)
];
function moveNpcs(){
    for(let n of npcs){
        n.move();
    }
    draw();
}
document.addEventListener("click", spawnNPC);
function spawnNPC(e){
    let newNpc = new npc(e.clientX - 25, e.clientY - 25, 50, 50, 10);
    limit(newNpc);
    npcs.push(newNpc);
    draw();
}
document.addEventListener("keydown", move);

function move(e){
    switch(e.key){
        case "a":
            player.x -= player.speed;
            break;
        case "w":
            player.y -= player.speed;
            break;
        case "d":
            player.x += player.speed;
            break;
        case "s":
            player.y += player.speed;
            break;        
    }
    limit(player);
    draw();
}

function limit(character){
    if(character.x < 0) character.x = 0;
    else if(character.x + character.width > ctx.width) character.x = ctx.width - character.width;
    if(character.y < 0) character.y = 0;
    else if(character.y + character.height > ctx.height) character.y = ctx.height - character.height;
}

function draw(){
    console.log("drawing!");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.fillRect(player.x, player.y, player.width, player.height);  
    ctx.fillStyle = 'rgb(0,255, 0)';
    for(let n of npcs){
        ctx.fillRect(n.x, n.y, n.width, n.height);
    }
}
draw();

var intervalId = window.setInterval(function(){
    moveNpcs();
  }, 500);