const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");

btnStart.addEventListener("click", onBtnStart);
btnStop.addEventListener("click", onBtnStop);


let timerId = null;

function onBtnStart() {

   timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
   }, 1000);

	btnStart.disabled=true;
}


function onBtnStop() {

   clearInterval(timerId);
	
		btnStart.disabled=false;

}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
