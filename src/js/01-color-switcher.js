const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");

btnStart.addEventListener("click", onBtnStart);
btnStop.addEventListener("click", onBtnStop);

// btnStart.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     document.body.style.backgroundColor = getRandomHexColor();
//   }, 1000);
// });

let timerId = null;

function onBtnStart() {
   timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
   }, 1000);
}


function onBtnStop() {
   clearInterval(timerId);
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
