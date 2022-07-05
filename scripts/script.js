import { player, playerMove } from './player.js';
import { Wall, Pallet, npc, UI } from './classes.js';
import { move, limit } from './movement.js';

let canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let walls = [];
walls.push(new Wall(200, 200, 150, 30));
walls.push(new Wall(200, 130, 150, 30));
walls.push(new Wall(260, 230, 30, 100));
walls.push(new Wall(390, 130, 30, 150));
let pallets = [];
pallets.push(new Pallet(365, 130));
pallets.push(new Pallet(365, 180));
pallets.push(new Pallet(365, 220));
pallets.push(new Pallet(365, 250));

limit(player, walls);
let npcs = [
  new npc(100, 100, 20, 7)
];

function hitCheck() {
  for (let n of npcs) {
    let dist = Math.abs(Math.pow(player.x - n.x, 2) + Math.pow(player.y - n.y, 2));
    if (dist < Math.pow(player.radius + n.radius, 2)) {
      UI.score -= 10;
      if (UI.score < 0) UI.score = 0;
    }
  }

  for (let pal in pallets) {
    let dist = Math.abs(Math.pow(player.x - pallets[pal].x, 2) + Math.pow(player.y - pallets[pal].y, 2));
    if (dist < Math.pow(player.radius + pallets[pal].radius, 2)) {
      UI.score += 100;
      pallets.splice(pal, 1);
    }
  }
}

function moveEverything() {
  for (let n of npcs) {
    move(n, walls);
  }
  move(player, walls);
  hitCheck();
}
document.addEventListener("click", spawnNPC);

function spawnNPC(e) {
  let newNpc = new npc(e.clientX - 10, e.clientY - 10, 20, 7);
  limit(newNpc, walls);
  npcs.push(newNpc);
}
document.addEventListener("keydown", playerMove);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.draw();
  for (let n of npcs) {
    n.draw();
  }
  for (let wall of walls) {
    wall.draw();
  }
  for (let pallet of pallets) {
    pallet.draw();
  }
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.font = "30px Arial";
  ctx.fillText(UI.score, 10, 25);
}
draw();

var intervalId = window.setInterval(function () {
  moveEverything();
  draw();
}, 33);

window.setInterval(function () {
  for (let n of npcs) {
    let rand = Math.floor(Math.random() * 3);
    if (rand != 0) {
      n.changeDir();
    }
  }
}, 500);