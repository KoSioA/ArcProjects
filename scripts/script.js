import { player, playerMove } from './player.js';
import { Wall, Pallet, npc, UI } from './classes.js';
import { move, limit } from './movement.js';
import {setupWalls, setupPallets} from './map.js';

let canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let walls = [];
setupWalls(walls);

let pallets = [];
setupPallets(pallets, walls);

limit(player, walls);
let npcs = [];
let blinky = new npc(50 + 20 + 10, 80, 20, 10, "Blinky");
npcs.push(blinky);
npcs.push(new npc(50 + 120 + 10, 80, 20, 10, "Pinky"));
npcs.push(new npc(50 + 120 + 10, 160, 20, 10, "Clyde"));
npcs.push(new npc(50 + 20 + 10, 160, 20, 10, "Inky"));

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
      UI.score += 10;
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
//document.addEventListener("click", spawnNPC);

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

window.setInterval(function () {
  for (let n of npcs) {
    n.retarget(player, blinky);
    n.changeDir(walls);
  }
  moveEverything();
  draw();
}, 50);