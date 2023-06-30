let calculation = localStorage.getItem('calculation'); 

if (!calculation) {

  let calculation = '';

}

console.log(eval('0.5 + 0.3'))

if (calculation === undefined || calculation === null) {

  calculation = undefined;
  document.querySelector('.js-field').innerHTML = calculation;

}

function updateCalculation (strg) {


calculation += strg;

console.log(calculation);

localStorage.setItem('calculation',calculation);

document.querySelector('.js-field').innerHTML = calculation;


}
