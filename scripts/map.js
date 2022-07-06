import { Wall, Pallet } from "./classes.js";
let startX = 50;
let startY = 50;
let tileSize = 20;
export function setupWalls(walls) {
    walls.push(new Wall(startX, startY, 28 * tileSize, tileSize / 2));//top wall
    walls.push(new Wall(startX, startY + tileSize / 2, tileSize / 2, 9 * tileSize + tileSize / 2));//top left wall
    walls.push(new Wall(startX + tileSize / 2, startY + 9 * tileSize + tileSize / 2, 5 * tileSize, tileSize / 2));//top left bottom wall
    walls.push(new Wall(startX + 2 * tileSize + tileSize / 2, startY + 2 * tileSize + tileSize / 2, 3 * tileSize, 2 * tileSize));//top left square
    walls.push(new Wall(startX + 7 * tileSize + tileSize / 2, startY + 2 * tileSize + tileSize / 2, 4 * tileSize, 2 * tileSize));//top left right square
    walls.push(new Wall(startX + 2 * tileSize + tileSize / 2, startY + 6 * tileSize + tileSize / 2, 3 * tileSize, tileSize));//top left line
    walls.push(new Wall(startX + 5 * tileSize, startY + 10 * tileSize, tileSize / 2, 3 * tileSize + tileSize / 2));// top left inner wall
    walls.push(new Wall(startX, startY + 13 * tileSize, 5 * tileSize + tileSize / 2, tileSize / 2));//top of left tunnel
    walls.push(new Wall(startX + 13 * tileSize + tileSize / 2, startY + tileSize / 2, tileSize, 4 * tileSize));//top middle line
    walls.push(new Wall(startX + 7 * tileSize + tileSize / 2, startY + 6 * tileSize + tileSize / 2, tileSize, 7 * tileSize));//top left T vertical line
    walls.push(new Wall(startX + 8 * tileSize + tileSize / 2, startY + 9 * tileSize + tileSize / 2, 3 * tileSize, tileSize));//top left T horizontal line
    walls.push(new Wall(startX + 10 * tileSize + tileSize / 2, startY + 6 * tileSize + tileSize / 2, 7 * tileSize, tileSize));// top middle T horizontal line
    walls.push(new Wall(startX + 13 * tileSize + tileSize / 2, startY + 7 * tileSize + tileSize / 2, tileSize, 3 * tileSize));//top middle T vertical line
    walls.push(new Wall(startX + 19 * tileSize + tileSize / 2, startY + 6 * tileSize + tileSize / 2, tileSize, 7 * tileSize));//top right T vertical line
    walls.push(new Wall(startX + 16 * tileSize + tileSize / 2, startY + 9 * tileSize + tileSize / 2, 3 * tileSize, tileSize));//top right T horizontal line

    walls.push(new Wall(startX + 2 * tileSize + tileSize / 2 + 20 * tileSize, startY + 2 * tileSize + tileSize / 2, 3 * tileSize, 2 * tileSize));//top right square
    walls.push(new Wall(startX + 16 * tileSize + tileSize / 2, startY + 2 * tileSize + tileSize / 2, 4 * tileSize, 2 * tileSize));//top right left square
    walls.push(new Wall(startX + 2 * tileSize + tileSize / 2 + 20 * tileSize, startY + 6 * tileSize + tileSize / 2, 3 * tileSize, tileSize));//top right line

    walls.push(new Wall(startX + 10 * tileSize + tileSize / 2, startY + 12 * tileSize + tileSize / 2, 7 * tileSize, 4 * tileSize))//ghost house

    walls.push(new Wall(startX + 27 * tileSize + tileSize / 2, startY + tileSize / 2, tileSize / 2, 9 * tileSize + tileSize / 2));//top right wall
    walls.push(new Wall(startX + 22 * tileSize + tileSize / 2, startY + 9 * tileSize + tileSize / 2, 5 * tileSize, tileSize / 2));//top right bottom wall
    walls.push(new Wall(startX + 27 * tileSize - 4 * tileSize - tileSize / 2, startY + 10 * tileSize, tileSize / 2, 3 * tileSize + tileSize / 2));// top right inner wall
    walls.push(new Wall(startX + 22 * tileSize + tileSize / 2, startY + 13 * tileSize, 5 * tileSize + tileSize / 2, tileSize / 2));//top of right tunnel
    walls.push(new Wall(startX + 22 * tileSize + tileSize / 2, startY + 15 * tileSize + tileSize / 2, 5 * tileSize + tileSize / 2, tileSize / 2));//bottom of right tunnel
    walls.push(new Wall(startX, startY + 15 * tileSize + tileSize / 2, 5 * tileSize + tileSize / 2, tileSize / 2));//bottom of left tunnel
    walls.push(new Wall(startX + 5 * tileSize, startY + 16 * tileSize, tileSize / 2, 3 * tileSize + tileSize / 2));// bottom left inner wall
    walls.push(new Wall(startX + 22 * tileSize + tileSize / 2, startY + 16 * tileSize, tileSize / 2, 3 * tileSize + tileSize / 2));// bottom right inner wall

    walls.push(new Wall(startX, startY + 19 * tileSize, 5 * tileSize + tileSize / 2, tileSize / 2));//bottom top left wall
    walls.push(new Wall(startX + 22 * tileSize + tileSize / 2, startY + 19 * tileSize, 5 * tileSize + tileSize / 2, tileSize / 2));//bottom top right wall
    walls.push(new Wall(startX, startY + 19 * tileSize + tileSize / 2, tileSize / 2, 11 * tileSize + tileSize / 2));//bottom left wall
    walls.push(new Wall(startX + 27 * tileSize + tileSize / 2, startY + 19 * tileSize + tileSize / 2, tileSize / 2, 11 * tileSize + tileSize / 2));//bottom right wall
    walls.push(new Wall(startX + tileSize / 2, startY + 30 * tileSize + tileSize / 2, 27 * tileSize, tileSize / 2))//bottom wall


    walls.push(new Wall(startX + 7 * tileSize + tileSize / 2, startY + 15 * tileSize + tileSize / 2, tileSize, 4 * tileSize));// middle left vertical line
    walls.push(new Wall(startX + 19 * tileSize + tileSize / 2, startY + 15 * tileSize + tileSize / 2, tileSize, 4 * tileSize));// middle right vertical line

    walls.push(new Wall(startX + 7 * tileSize + tileSize / 2, startY + 21 * tileSize + tileSize / 2, 4 * tileSize, tileSize));// middle left horizontal line
    walls.push(new Wall(startX + 16 * tileSize + tileSize / 2, startY + 21 * tileSize + tileSize / 2, 4 * tileSize, tileSize));// middle right horizontal line

    walls.push(new Wall(startX + 10 * tileSize + tileSize / 2, startY + 18 * tileSize + tileSize / 2, 7 * tileSize, tileSize));// bottom top T horizontal line
    walls.push(new Wall(startX + 13 * tileSize + tileSize / 2, startY + 19 * tileSize + tileSize / 2, tileSize, 3 * tileSize));//bottom top T vertical line
    walls.push(new Wall(startX + 10 * tileSize + tileSize / 2, startY + 24 * tileSize + tileSize / 2, 7 * tileSize, tileSize));// bottom T horizontal line
    walls.push(new Wall(startX + 13 * tileSize + tileSize / 2, startY + 25 * tileSize + tileSize / 2, tileSize, 3 * tileSize));//bottom T vertical line


    walls.push(new Wall(startX + 2 * tileSize + tileSize / 2, startY + 21 * tileSize + tileSize / 2, 3 * tileSize, tileSize));//left L horizontal line
    walls.push(new Wall(startX + 4 * tileSize + tileSize / 2, startY + 22 * tileSize + tileSize / 2, tileSize, 3 * tileSize));//left L vertical line
    walls.push(new Wall(startX + 22 * tileSize + tileSize / 2, startY + 21 * tileSize + tileSize / 2, 3 * tileSize, tileSize));//right L horizontal line
    walls.push(new Wall(startX + 22 * tileSize + tileSize / 2, startY + 22 * tileSize + tileSize / 2, tileSize, 3 * tileSize));//left L vertical line

    walls.push(new Wall(startX + 2 * tileSize + tileSize / 2, startY + 27 * tileSize + tileSize / 2, 9 * tileSize, tileSize)); //left upside down T horizontal line
    walls.push(new Wall(startX + 7 * tileSize + tileSize / 2, startY + 24 * tileSize + tileSize / 2, tileSize, 3 * tileSize))//left upside down T vertical line
    walls.push(new Wall(startX + 16 * tileSize + tileSize / 2, startY + 27 * tileSize + tileSize / 2, 9 * tileSize, tileSize)); //right upside down T horizontal line
    walls.push(new Wall(startX + 19 * tileSize + tileSize / 2, startY + 24 * tileSize + tileSize / 2, tileSize, 3 * tileSize))//right upside down T vertical line

    walls.push(new Wall(startX + tileSize / 2, startY + 24 * tileSize + tileSize / 2, 2 * tileSize, tileSize)); // bottom left wall line
    walls.push(new Wall(startX + 25 * tileSize + tileSize / 2, startY + 24 * tileSize + tileSize / 2, 2 * tileSize, tileSize)); // bottom right wall line
}

export function setupPallets(pallets, walls) {
    /*for(let x = startX + tileSize/2; x < startX + 27 * tileSize + tileSize / 2; x += tileSize){
        for(let y = startY + tileSize/2; y < startY + 30 * tileSize + tileSize / 2; y += tileSize){
            let pallet = new Pallet(x, y);
            if(notTouchingWall(pallet, walls)){
                pallets.push(pallet);
            }
        }
    }
    let rects = [
        {
            x: startX,
            y:  startY + 9 * tileSize + tileSize / 2,
            width: 5 * tileSize,
            height: 9 * tileSize
        }

    ];
    for(let i in pallets){
        for(let rect of rects){
        if(intersects(pallets[i], rect)){
            pallets.splice(i, 1);
        }
    }
    }*/
    for(let x = startX + tileSize + tileSize/2; x < startX + 13 * tileSize; x += tileSize){
        pallets.push(new Pallet(x, startY + tileSize + tileSize/2));
    }
    for(let x = startX + 15 * tileSize + tileSize/2; x < startX + 27 * tileSize; x += tileSize){
        pallets.push(new Pallet(x, startY + tileSize + tileSize/2));
    }
    for(let x = startX + 2 * tileSize + tileSize/2; x < startX + 26 * tileSize; x += tileSize){
        pallets.push(new Pallet(x, startY + 29 * tileSize + tileSize/2));
    }
    for(let y = startY + tileSize + tileSize/2; y < startY + 26 * tileSize;y += tileSize){
        pallets.push(new Pallet(startX + 6 * tileSize + tileSize / 2, y));
        pallets.push(new Pallet(startX + 21 * tileSize + tileSize / 2, y));
    }
    for(let y = startY + 2 * tileSize + tileSize/2; y < startY + 9 * tileSize;y += tileSize){
        pallets.push(new Pallet(startX + tileSize + tileSize / 2, y));
        pallets.push(new Pallet(startX + 26 * tileSize + tileSize / 2, y));
    }
    for(let y = startY + 20 * tileSize + tileSize/2; y < startY + 24 * tileSize;y += tileSize){
        pallets.push(new Pallet(startX + tileSize + tileSize / 2, y));
        pallets.push(new Pallet(startX + 26 * tileSize + tileSize / 2, y));
    }
    for(let y = startY + 26 * tileSize + tileSize/2; y < 33 * tileSize;y += tileSize){
        pallets.push(new Pallet(startX + tileSize + tileSize / 2, y));
        pallets.push(new Pallet(startX + 26 * tileSize + tileSize / 2, y));
    }
    for(let y = startY + 23 * tileSize + tileSize/2; y < startY + 27 * tileSize;y += tileSize){
        pallets.push(new Pallet(startX + 3 * tileSize + tileSize / 2, y));
        pallets.push(new Pallet(startX + 9 * tileSize + tileSize / 2, y));
        pallets.push(new Pallet(startX + 18 * tileSize + tileSize / 2, y));
        pallets.push(new Pallet(startX + 24 * tileSize + tileSize / 2, y));
    }
    for(let x = startX + 2 * tileSize + tileSize/2; x < startY + 6 * tileSize; x += tileSize){
        pallets.push(new Pallet(x, startY + 5 * tileSize + tileSize/2));
        pallets.push(new Pallet(x, startY + 8 * tileSize + tileSize/2));
    }
    for(let x = startX + 22 * tileSize + tileSize/2; x < startY + 26 * tileSize; x += tileSize){
        pallets.push(new Pallet(x, startY + 5 * tileSize + tileSize/2));
        pallets.push(new Pallet(x, startY + 8 * tileSize + tileSize/2));
    }
    for(let x = startX + 7 * tileSize + tileSize/2; x < startY + 21 * tileSize; x += tileSize){
        pallets.push(new Pallet(x, startY + 5 * tileSize + tileSize/2));
    }
    for(let y = startY + 2 * tileSize + tileSize/2; y < startY + 5 * tileSize; y += tileSize){
        pallets.push(new Pallet(startX + 12 * tileSize + tileSize/2,y));
        pallets.push(new Pallet(startX + 15 * tileSize + tileSize/2,y));
    }
    for(let y = startY + 6 * tileSize + tileSize/2; y < startY + 9 * tileSize; y += tileSize){
        pallets.push(new Pallet(startX + 9 * tileSize + tileSize/2,y));
        pallets.push(new Pallet(startX + 18 * tileSize + tileSize/2,y));
    }
    for(let y = startY + 26 * tileSize + tileSize/2; y < startY + 29 * tileSize; y += tileSize){
        pallets.push(new Pallet(startX + 12 * tileSize + tileSize/2,y));
        pallets.push(new Pallet(startX + 15 * tileSize + tileSize/2,y));
    }
    for(let x = startX + 2 * tileSize + tileSize/2; x < startX + 6 * tileSize; x += tileSize){
        pallets.push(new Pallet(x, startY + 20 * tileSize + tileSize/2));
        pallets.push(new Pallet(x + tileSize * 20, startY + 20 * tileSize + tileSize/2));
    }
    pallets.push(new Pallet(startX + tileSize * 2 + tileSize/2, startY + 23 * tileSize + tileSize/2));
    pallets.push(new Pallet(startX + tileSize * 2 + tileSize/2, startY + 26 * tileSize + tileSize/2));
    pallets.push(new Pallet(startX + tileSize * 25 + tileSize/2, startY + 23 * tileSize + tileSize/2));
    pallets.push(new Pallet(startX + tileSize * 25+ tileSize/2, startY + 26 * tileSize + tileSize/2));

    pallets.push(new Pallet(startX + 8 * tileSize + tileSize / 2,  startY + 23 * tileSize + tileSize/2));
    pallets.push(new Pallet(startX + 7 * tileSize + tileSize / 2,  startY + 23 * tileSize + tileSize/2));
    pallets.push(new Pallet(startX + 19 * tileSize + tileSize / 2, startY + 23 * tileSize + tileSize/2));
    pallets.push(new Pallet(startX + 20 * tileSize + tileSize / 2, startY + 23 * tileSize + tileSize/2));

    pallets.push(new Pallet(startX + 10 * tileSize + tileSize / 2, startY + 26 * tileSize + tileSize/2));
    pallets.push(new Pallet(startX + 11 * tileSize + tileSize / 2, startY + 26 * tileSize + tileSize/2));
    pallets.push(new Pallet(startX + 16 * tileSize + tileSize / 2, startY + 26 * tileSize + tileSize/2));
    pallets.push(new Pallet(startX + 17 * tileSize + tileSize / 2, startY + 26 * tileSize + tileSize/2));
    for(let x = startX + 4 * tileSize + tileSize/2; x < startX + tileSize * 7; x += tileSize){
        pallets.push(new Pallet(x, startY + 26 * tileSize + tileSize/2));
        pallets.push(new Pallet(x + tileSize * 17, startY + 26 * tileSize + tileSize/2));
    }

    for(let x = startX + 7 * tileSize + tileSize/2; x< startX + tileSize * 13; x += tileSize){
        pallets.push(new Pallet(x, startY + 20 * tileSize + tileSize/2));
        pallets.push(new Pallet(x + tileSize * 8, startY + 20 * tileSize + tileSize/2));
    }
    for(let y = startY + 21 * tileSize + tileSize/2; y < startY + 24 * tileSize; y += tileSize){
        pallets.push(new Pallet(startX + tileSize * 12 + tileSize/2, y));
        pallets.push(new Pallet(startX + tileSize * 15 + tileSize/2, y));
    }
    pallets.push(new Pallet(startX + tileSize * 10 + tileSize/2, startY + 23 * tileSize + tileSize/2));
    pallets.push(new Pallet(startX + tileSize * 11 + tileSize/2, startY + 23 * tileSize + tileSize/2));
    pallets.push(new Pallet(startX + tileSize * 16 + tileSize/2, startY + 23 * tileSize + tileSize/2));
    pallets.push(new Pallet(startX + tileSize * 17 + tileSize/2, startY + 23 * tileSize + tileSize/2));
    for(let x = startX + 10 * tileSize + tileSize/2; x < startX + 13 * tileSize; x += tileSize){
        pallets.push(new Pallet(x, startY + 8 * tileSize + tileSize/2));
        pallets.push(new Pallet(x + 5 * tileSize, startY + 8 * tileSize + tileSize/2));
    }
    console.log(pallets.length);
}
/*
function notTouchingWall(pallet, walls){
    for(let wall of walls){
        if(intersects(pallet, wall)){
            return false;
        }
    }
    return true;
}

function intersects(circle, rect)
{
    let circleDistance = {
        x: 0,
        y: 0
    };
     circleDistance.x = Math.abs(circle.x - (rect.x + rect.width/2));
     circleDistance.y = Math.abs(circle.y - (rect.y + rect.height/2));
     console.log(circleDistance);
     console.log(rect);
    if (circleDistance.x > (rect.width/2 + circle.radius)) { console.log("this one?");return false; }
    if (circleDistance.y > (rect.height/2 + circle.radius)) { return false; }

    if (circleDistance.x <= (rect.width/2)) { return true; } 
    if (circleDistance.y <= (rect.height/2)) { return true; }

    let cornerDistance_sq = Math.pow((circleDistance.x - rect.width/2), 2) +
    Math.pow((circleDistance.y - rect.height/2), 2);

    return (cornerDistance_sq <= (Math.pow(circle.radius, 2)));
}*/