import { Wall } from "./classes.js";
let startX = 50;
let startY = 50;
let tileSize = 20;
export function setupWalls(walls){
    walls.push(new Wall(startX, startY, 28 * tileSize, tileSize/2));//top wall
walls.push(new Wall(startX, startY +  tileSize/2, tileSize/2, 9 * tileSize + tileSize/2));//top left wall
walls.push(new Wall(startX + tileSize/2, startY +9 * tileSize + tileSize/2 , 5 * tileSize, tileSize/2));//top left bottom wall
walls.push(new Wall(startX + 2 * tileSize + tileSize/2, startY + 2 * tileSize + tileSize/2, 3 * tileSize, 2 * tileSize));//top left square
walls.push(new Wall(startX + 7 * tileSize + tileSize/2, startY + 2 * tileSize + tileSize/2, 4 * tileSize, 2 * tileSize));//top left right square
walls.push(new Wall(startX + 2 * tileSize + tileSize/2, startY + 6 * tileSize +  tileSize/2, 3 * tileSize, tileSize));//top left line
walls.push(new Wall(startX + 5 * tileSize, startY + 10 * tileSize, tileSize/2, 3 * tileSize + tileSize/2));// top left inner wall
walls.push(new Wall(startX, startY + 13 * tileSize, 5 * tileSize + tileSize/2, tileSize/2));//top of left tunnel
walls.push(new Wall(startX + 13 * tileSize + tileSize/2, startY + tileSize/2, tileSize, 3 * tileSize + tileSize/2));//top middle line
walls.push(new Wall(startX + 7 * tileSize +  tileSize/2, startY + 6 * tileSize +  tileSize/2, tileSize, 7 * tileSize));//top left T vertical line
walls.push(new Wall(startX + 8 * tileSize +  tileSize/2, startY + 9 * tileSize +  tileSize/2, 3 * tileSize, tileSize));//top left T horizontal line
walls.push(new Wall(startX + 10 * tileSize + tileSize/2, startY + 6 * tileSize +  tileSize/2, 7 * tileSize, tileSize));// top middle T horizontal line
walls.push(new Wall(startX + 13 * tileSize +  tileSize/2, startY + 7 * tileSize +  tileSize/2, tileSize, 3 * tileSize));//top middle T vertical line
walls.push(new Wall(startX + 19 * tileSize +  tileSize/2, startY + 6 * tileSize +  tileSize/2, tileSize, 7 * tileSize));//top right T vertical line
walls.push(new Wall(startX + 16 * tileSize +  tileSize/2, startY + 9 * tileSize +  tileSize/2, 3 * tileSize, tileSize));//top right T horizontal line

walls.push(new Wall(startX + 2 * tileSize + tileSize/2 + 20 * tileSize, startY + 2 * tileSize + tileSize/2, 3 * tileSize, 2 * tileSize));//top right square
walls.push(new Wall(startX + 16 * tileSize +  tileSize/2, startY + 2 * tileSize + tileSize/2, 4 * tileSize, 2 * tileSize));//top right left square
walls.push(new Wall(startX + 2 * tileSize + tileSize/2 + 20 * tileSize, startY + 6 * tileSize +  tileSize/2, 3 * tileSize, tileSize));//top right line

walls.push(new Wall(startX + 10 * tileSize +  tileSize/2, startY + 12 * tileSize +  tileSize/2, 7 * tileSize, 4 * tileSize))//ghost house

walls.push(new Wall(startX + 27 * tileSize +  tileSize/2, startY +  tileSize/2,  tileSize/2, 9 * tileSize + tileSize/2));//top right wall
walls.push(new Wall(startX + 22 * tileSize +  tileSize/2, startY + 9 * tileSize +  tileSize/2, 5 * tileSize, tileSize/2));//top right bottom wall
walls.push(new Wall(startX + 27 * tileSize - 4 * tileSize - tileSize/2, startY + 10 *tileSize,  tileSize/2, 3 * tileSize + tileSize/2));// top right inner wall
walls.push(new Wall(startX + 22 * tileSize +  tileSize/2, startY + 13 * tileSize, 5 * tileSize + tileSize/2, tileSize/2));//top of right tunnel
walls.push(new Wall(startX + 22 * tileSize +  tileSize/2, startY + 15 * tileSize +  tileSize/2, 5 * tileSize + tileSize/2, tileSize/2));//bottom of right tunnel
walls.push(new Wall(startX, startY + 15 * tileSize +  tileSize/2, 5 * tileSize + tileSize/2, tileSize/2));//bottom of left tunnel
walls.push(new Wall(startX + 5 * tileSize, startY + 16 * tileSize, tileSize/2, 3 * tileSize + tileSize/2));// bottom left inner wall
walls.push(new Wall(startX + 22 * tileSize +  tileSize/2, startY + 16 * tileSize, tileSize/2, 3 * tileSize + tileSize/2));// bottom right inner wall

walls.push(new Wall(startX, startY + 19 * tileSize, 5 * tileSize + tileSize/2, tileSize/2));//bottom top left wall
walls.push(new Wall(startX + 22 * tileSize +  tileSize/2, startY + 19 * tileSize, 5 * tileSize + tileSize/2, tileSize/2));//bottom top right wall
walls.push(new Wall(startX, startY + 19 * tileSize + tileSize/2, tileSize/2, 11 * tileSize + tileSize/2));//bottom left wall
walls.push(new Wall(startX + 27 * tileSize +  tileSize/2, startY + 19 * tileSize + tileSize/2, tileSize/2, 11 * tileSize + tileSize/2));//bottom right wall
walls.push(new Wall(startX + tileSize/2, startY + 30 * tileSize + tileSize/2, 27 * tileSize, tileSize/2))//bottom wall


walls.push(new Wall(startX + 7 * tileSize + tileSize/2, startY + 16 * tileSize, tileSize, 3 * tileSize + tileSize/2));// middle left vertical line
walls.push(new Wall(startX + 19 * tileSize +  tileSize/2, startY + 16 * tileSize, tileSize, 3 * tileSize + tileSize/2));// middle right vertical line

walls.push(new Wall(startX + 7 * tileSize + tileSize/2, startY + 21 * tileSize + tileSize/2, 4 * tileSize, tileSize));// middle left horizontal line
walls.push(new Wall(startX + 16 * tileSize + tileSize/2, startY + 21 * tileSize + tileSize/2, 4 * tileSize, tileSize));// middle right horizontal line

walls.push(new Wall(startX + 10 * tileSize + tileSize/2, startY + 18 * tileSize +  tileSize/2, 7 * tileSize, tileSize));// bottom top T horizontal line
walls.push(new Wall(startX + 13 * tileSize +  tileSize/2, startY + 19 * tileSize +  tileSize/2, tileSize, 3 * tileSize));//bottom top T vertical line
walls.push(new Wall(startX + 10 * tileSize + tileSize/2, startY + 24 * tileSize +  tileSize/2, 7 * tileSize, tileSize));// bottom T horizontal line
walls.push(new Wall(startX + 13 * tileSize +  tileSize/2, startY + 25 * tileSize +  tileSize/2, tileSize, 3 * tileSize));//bottom T vertical line
//50 + 10 * 20 + 10 = 260
// + 3 * 20 + 10 = 260 + 70 = 340x;
//50 + 23 * 20 + 10 = 520y
walls.push(new Wall(startX + 2 * tileSize + tileSize/2, startY + 21 * tileSize + tileSize/2, 3 * tileSize, tileSize));//left L horizontal line
walls.push(new Wall(startX + 4 * tileSize + tileSize/2, startY + 22 * tileSize + tileSize/2, tileSize, 3 * tileSize));//left L vertical line
walls.push(new Wall(startX + 22 * tileSize + tileSize/2, startY + 21 * tileSize + tileSize/2, 3 * tileSize, tileSize));//right L horizontal line
walls.push(new Wall(startX + 22 * tileSize + tileSize/2, startY + 22 * tileSize + tileSize/2, tileSize, 3 * tileSize));//left L vertical line

walls.push(new Wall(startX + 2 * tileSize + tileSize/2, startY + 27 * tileSize + tileSize/2, 9 * tileSize, tileSize)); //left upside down T horizontal line
walls.push(new Wall(startX + 7 * tileSize + tileSize/2 ,startY + 24 * tileSize + tileSize/2, tileSize, 3 * tileSize))//left upside down T vertical line
walls.push(new Wall(startX + 16 * tileSize + tileSize/2, startY + 27 * tileSize + tileSize/2, 9 * tileSize, tileSize)); //right upside down T horizontal line
walls.push(new Wall(startX + 19 * tileSize + tileSize/2 ,startY + 24 * tileSize + tileSize/2, tileSize, 3 * tileSize))//right upside down T vertical line

walls.push(new Wall(startX + tileSize/2, startY + 24 * tileSize + tileSize/2, 2 * tileSize, tileSize)); // bottom left wall line
walls.push(new Wall(startX + 25 * tileSize +  tileSize/2, startY + 24 * tileSize + tileSize/2, 2 * tileSize, tileSize)); // bottom right wall line
}