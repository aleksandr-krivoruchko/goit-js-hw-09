import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';


const refs = {
input: document.querySelector("#datetime-picker"),
btnStart: document.querySelector('button[data-start]'),
}

refs.btnStart.disabled = true;
refs.btnStart.addEventListener('click', onBtnStart);
refs.input.addEventListener('input', setDate)


function onBtnStart(e){
	console.log('qqq');
}


function setDate(e) {

}


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

   if(selectedDates[0].getTime() <= Date.now()){

		window.alert("Please choose a date in the future");
		} else {
			refs.btnStart.disabled = false;
		}
  },
};

flatpickr("#datetime-picker", options);



// class Timer {
// 	constructor{
		
// 	}
// }
