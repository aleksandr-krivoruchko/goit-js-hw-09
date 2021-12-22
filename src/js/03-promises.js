import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', onBtnSubmitCreatePromise);
let countPromise = 0;

function onBtnSubmitCreatePromise(e) {
  e.preventDefault();
  const {elements:{delay, step, amount}} = e.currentTarget;

  setInterval(() => {
	  if(countPromise === amount){
		  return;
	  }
	  countPromise += 1;
	  let qqq = 0;
	   qqq += Number(step.value);

  createPromise(countPromise, qqq);

  }, delay.value);

}



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
	  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
	  	  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);

  }
}
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

