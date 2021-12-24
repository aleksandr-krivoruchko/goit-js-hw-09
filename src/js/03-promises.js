import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', onBtnSubmitCreatePromise);
let position = 0;

function onBtnSubmitCreatePromise(e) {
  e.preventDefault();
  const { elements: { delay, step, amount } } = e.currentTarget;
  let DELAY;

  setInterval(() => {
    DELAY += (delay.value + step.value);
    if (position == amount.value) { return}
    position += 1;

createPromise(position, delay.value)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }, DELAY);
  
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
  setInterval(() => {
    const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    resolve({ position, delay });
  } 
    reject({ position, delay });
  
  }, delay);
   
  })
   return promise;
}


  