const bottle = document.getElementById('bottle');

let currentRotation = 0;

// function spinBottle(){
//     const rotationINcrement = Math.floor(720 = Math.random() * 720);

//     currentRotation += rotationINcrement;

//     bottle.style.transform = `rotate(${currentRotation}deg)`;
// }

function spinBottle2() {
    const rotations = [0, 90, 180, 270];

    const rotationIncrement = Math.floor(Math.random() * 4);

    currentRotation += 720 + rotations[rotationIncrement];

    bottle.style.transform = `rotate(${currentRotation}deg)`;
}