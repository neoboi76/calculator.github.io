let calculation = localStorage.getItem('calculation');  
document.querySelector('.js-field').innerHTML = calculation;
let numbers = document.querySelectorAll('.js-numbers');
let operators = document.querySelectorAll('.js-operators');
let misc = document.querySelectorAll('.js-misc');

if (!calculation) {

  let calculation = '';

}

numbers.forEach((num, index) => {
  num.addEventListener('click', (value, index) => {

    updateCalculation(num.innerText);
  
  })
})

operators.forEach((operator, index) => {
  operator.addEventListener('click', () => {
    
      updateCalculation(operator.innerText);
  })
})

misc.forEach((sym, index) => {
  sym.addEventListener('click', () => {
    
    updateCalculation(sym.innerText);

    if (sym.innerText == 'Clear') {
      calculation = '';
      updateCalculation('Cleared');
    }

  })
})


function updateCalculation (strg) {
 
  if (strg == '=') {
    calculation = `= ${eval(calculation)}`;
  }
  
  else if (strg == 'Cleared') {
    localStorage.removeItem(`calculation`);
  }
  
  else {
    calculation += strg;
    
  }


document.querySelector('.js-field').innerHTML = calculation;

localStorage.setItem('calculation',calculation); 

}
