const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

const timer = document.getElementById("timer");

let minutes = 25;
let seconds = 0;
let timerid;

console.log(timer, "timer");
start.addEventListener("click", () => {
  timerid = setInterval(() => {
    if (seconds === 0) {
      seconds = 59;
      if (minutes !== 0) {
        minutes--;
      }
    } else {
      seconds--;
    }
    timer.innerHTML = `${minutes}:${seconds} `;
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(timerid);
});

reset.addEventListener("click", () => {
  minutes = 25;
  seconds = 0;
  timer.innerHTML = `${minutes}:0${seconds}`;
});