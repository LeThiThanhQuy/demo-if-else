
// function Plane(x, y, height, width) {
//     this.x = x;
//     this.y = y;
//     this.height = height;
//     this.width = width;
//     this.isCrashed = false;
//
//     this.draw = function () {
//         ctx.drawImage(planeImage, this.x, this.y, this.height, this.width);
//     }
// }
//
// function drawPlane() {
//     for (let i = 1; i <= planes.length; i++) {
//         plane.draw();
//     }
// }
//
// function creatPlane() {
//     let listPlane = new Plane(0, Math.random() * 200 + 50, 50, 50);
//     planes.push(listPlane);
// }

function Tank(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.speed = 5;
    this.isMovingLeft = false;
    this.isMovingRight = false;

    this.draw = function () {
        ctx.drawImage(tankImage, this.x, this.y, this.height, this.width);
    }
}

window.addEventListener("keydown", move);
function move(event) {
    console.log(event.key);
    switch (event.key) {
        case "ArrowLeft":
            tank.isMovingRight = false;
            tank.isMovingLeft = true;
            break;
        case "ArrowRight":
            tank.isMovingLeft = false;
            tank.isMovingRight = true;
            break;
    }
}

function moveTank() {
    if (tank.isMovingLeft) {
        tank.x -= tank.speed;
    } else if (tank.isMovingRight) {
        tank.x += tank.speed;
    }

    if (tank.x < 0) {
        tank.x = 0;
    } else if (tank.x > document.getElementById("myCanvas").width - tank.width) {
        tank.x = document.getElementById("myCanvas").width - tank.width;
    }
}
//  class MyBullet {
//     constructor(x, y, radius) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//
//     }
//     drawBullet() {
//          for (let i = 1; i <= bullets.length; i++) {
//              ctx.beginPath();
//              ctx.fillStyle = "blue";
//              ctx.arc(bullet.x, bullet.y, this.radius, 0, 2 * Math.PI);
//              ctx.fill();
//          }
//      }
//      listBullets() {
//          this.drawBullet();
//          for (let i = 1; i <= bullets.length; i++)
//          bullets.push();
//      }
//  }
// let bullet = new MyBullet(tank.x + 23, tank.y, 5);
// let bullets = [];

function update() {
    // plane.x = (plane.x + 10) % 800;
    // if (plane.isCrashed)
    //     plane.y = plane.y + 20;

    // for (let plane of planes) {
    //     plane.x = plane.x + 5;
    //     if (plane.isCrashed) {
    //
    //         plane.y = plane.y + 20;
    //     }
    // }
    // for (let i = 1; i <= bullets.length; i++) {
    //     bullet.y = (bullet.y - 30)
    // }
    //
    // checkPlaneCrash();
    // crashedPlane();
    // resetScreen();
    // drawPlane();
    // bullet.listBullets();
    tank.draw();
    moveTank();
}

// function isBulletOnPlane(plane, bullet) {
//     if (Math.abs(plane.x - bullet.x) < 25 && Math.abs(plane.y - bullet.y) < 25)
//         return true;
//     else return false;
// }

// function checkPlaneCrash() {
//     for (let i = 1; i <= planes.length; i++) {
//         for (let plane of planes)
//             if (isBulletOnPlane(plane, bullet)) {
//                 plane.isCrashed = true;
//                 return plane.isCrashed;
//             }
//     }
// }

// function crashedPlane() {
//     if (plane.isCrashed) {
//
//         plane = {
//             x: 0,
//             y: 100,
//             isCrashed: false
//         }
//     }
// }


// let plane = new Plane(0, Math.random() * 200 + 50 , 50, 50);
let tank = new Tank(400, 500, 100, 100);
// let planes = [];



function resetScreen() {
    ctx.clearRect(0, 0, document.getElementById("myCanvas").width, document.getElementById("myCanvas").height);
}

// setInterval(creatPlane, 1000);
setInterval(update, 50);
// document.getElementById("myCanvas").addEventListener('click', bullet.listBullets, false);
