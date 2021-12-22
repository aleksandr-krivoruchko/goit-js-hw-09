// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

const refs = {
  form: document.querySelector('.form'),
  btnSubmit: document.querySelector('button'),
}


refs.form.addEventListener('input', input);
refs.btnSubmit.addEventListener('click', onBtnSubmitCreatePromise);

function input(e) {
  e.preventDefault();
  console.log(e.target.);
}


function onBtnSubmitCreatePromise(e) {
  e.preventDefault();
  console.log(e.target);
}


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });