import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';


const refs = {
input: document.querySelector("#datetime-picker"),
btnStart: document.querySelector('button[data-start]'),
seconds: document.querySelector('span[data-seconds]'),
minutes: document.querySelector('span[data-minutes]'),
hours: document.querySelector('span[data-hours]'),
days: document.querySelector('span[data-days]'),
}
let futureTime;

refs.btnStart.disabled = true;
refs.btnStart.addEventListener('click', onBtnStart);
refs.input.addEventListener('input', setDate)


function setDate(e) {
	  futureTime = new Date(e.target.value).getTime();
}


function onBtnStart(e){

setInterval(() => {
const currentTime = Date.now();

const {days, hours, minutes, seconds} = convertMs(futureTime - currentTime);

  refs.seconds.textContent = addLeadingZero(seconds);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.hours.textContent = addLeadingZero(hours);
  refs.days.textContent = addLeadingZero(days);
  
  }, 1000);

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


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}


function addLeadingZero(value){
	return String(value).padStart(2, '0');
}

