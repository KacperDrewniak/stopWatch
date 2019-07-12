const buttonStart = document.querySelector('.main');
const buttonReset = document.querySelector('.reset');
const display = document.querySelector('.time div');


let time = 0;
let active = false;
let interval;

const start = () => {
    if (!active) {
        active = !active;
        buttonStart.textContent = "Pauza";
        interval = setInterval(timer, 10);
    } else {
        active = !active;
        buttonStart.textContent = "Start";
        clearInterval(interval);
    }
}

const timer = () => {
    time++;
    display.textContent = (time / 100).toFixed(3);
    let timer = time * 100

}


const reset = () => {
    buttonStart.textContent = "Start";
    time = 0;
    clearInterval(interval);
    display.textContent = "___"
}

buttonStart.addEventListener('click', start);
buttonReset.addEventListener('click', reset);
en