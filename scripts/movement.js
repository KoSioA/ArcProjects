export function move(character, walls) {
    switch (character.dir) {
        case "L":
            character.x -= character.speed;
            break;
        case "R":
            character.x += character.speed;
            break;
        case "U":
            character.y -= character.speed;
            break;
        case "D":
            character.y += character.speed;
            break;
    }
    limit(character, walls);
}

export function limit(character, walls) {
    let canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
    let top = character.y - character.radius;
    let bot = character.y + character.radius;
    let left = character.x - character.radius;
    let right = character.x + character.radius;
    if (left < 0) character.x = character.radius;
    else if (right > ctx.canvas.width) character.x = ctx.canvas.width - character.radius;
    if (top < 0) character.y = character.radius;
    else if (bot > ctx.canvas.height) character.y = ctx.canvas.height - character.radius;
    for (let wall of walls) {
        let wallLeft = wall.x;
        let wallRight = wall.x + wall.width;
        let wallTop = wall.y;
        let wallBot = wall.y + wall.height;
        if (left < wallRight && right > wallRight && top < wallBot && bot > wallTop) character.x = wall.x + wall.width + character.radius;
        if (right > wallLeft && left < wallLeft && top < wallBot && bot > wallTop) character.x = wall.x - character.radius;
        if (top < wallBot && bot > wallBot && left < wallRight && right > wallLeft) character.y = wall.y + wall.height + character.radius;
        if (bot > wallTop && top < wallTop && left < wallRight && right > wallLeft) character.y = wall.y - character.radius;
    }
}