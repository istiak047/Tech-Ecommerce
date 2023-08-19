const background = document.querySelector(".animated-background");
const backgroundStyle = window.getComputedStyle(background);
let backgroundWidth = backgroundStyle.getPropertyValue("width").split("px")[0];
let backgroundHeight = backgroundStyle
    .getPropertyValue("height")
    .split("px")[0];

// add bubbles //
background.innerHTML = "";
for (let i = 0; i < 20; i++) {
    background.innerHTML += '<div class="circle"></div>';
}
//  //

const circles = document.querySelectorAll(".animated-background .circle");

let circlesNum = circles.length;

let newCardenas = [];
for (let i = 0; i < circlesNum; i++) newCardenas.push({ x: 0, y: 0 });

function circleAnimation(circle, index) {
    let circleStyle = window.getComputedStyle(circle);

    let x = circleStyle.getPropertyValue("left").split("px")[0] * 1;
    let y = circleStyle.getPropertyValue("top").split("px")[0] * 1;

    let rest = newCardenas[index].x - x;
    if (rest < 0) rest *= -1;

    if (rest < 10) {
        newCardenas[index].x = Math.floor(
            Math.random() * (backgroundWidth * 1 + 200)
        );
        newCardenas[index].y = Math.floor(
            Math.random() * (backgroundHeight * 1 + 200)
        );

        let duration = Math.floor(
            Math.sqrt(
                Math.pow(newCardenas[index].x - x, 2) +
                    Math.pow(newCardenas[index].y - y, 2)
            ) / 14
        );

        circle.style.transition = duration + "s";

        setTimeout(() => {
            circle.style.left = newCardenas[index].x + "px";
            circle.style.top = newCardenas[index].y + "px";
        }, 1000);

        // console.log(`duration ${index + 1}: ` + duration);
    }
}

setInterval(() => {
    circles.forEach((obj, index) => {
        circleAnimation(obj, index);
    });
}, 1000);
