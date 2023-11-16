const pig = document.querySelector('.pig');
const target = document.querySelector('.target');
const leftButton = document.querySelector('#left-btn');
const rightButton = document.querySelector('#right-btn');
const jumpButton = document.querySelector('#jump-btn');

let pigLeft = 0;
let pigBottom = 0;
let isJumping = false;
let isMovingLeft = false;
let isMovingRight = false;

function moveLeft() {
    isMovingLeft = true;
    pig.style.transform = "scaleX(-1)";
}

function moveRight() {
    isMovingRight = true;
    pig.style.transform = "scaleX(1)";
}

function stopMoving() {
    isMovingLeft = false;
    isMovingRight = false;
}

function jump() {
    if (!isJumping) {
        isJumping = true;
        let jumpInterval = setInterval(function() {
            if (pigBottom < 150) {
                pigBottom += 20;
                pig.style.bottom = pigBottom + 'px';
            } else {
                clearInterval(jumpInterval);
                let fallInterval = setInterval(function() {
                    if (pigBottom > 0) {
                        pigBottom -= 20;
                        pig.style.bottom = pigBottom + 'px';
                    } else {
                        clearInterval(fallInterval);
                        isJump