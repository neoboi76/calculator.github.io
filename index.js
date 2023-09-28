let calculation = localStorage.getItem('calculation');
document.querySelector('.js-field').innerHTML = calculation;
let numbers = document.querySelectorAll('.js-numbers');
let operators = document.querySelectorAll('.js-operators');
let misc = document.querySelectorAll('.js-misc');
let test = 0;
let result = null;


numbers.forEach((num, index) => {
  num.addEventListener('click', (value, index) => {

    updateCalculation(num.innerText);

    if (result !== null) {
      result = null;
      calculation = ' ';
      updateCalculation(num.innerText);
    }
  
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

    if (sym.innerText === 'Clear') {
      updateCalculation('Cleared');
    }

    else if (sym.innerText === '=') {
      if (calculation != ' ') {
        updateCalculation('=');
      }
    }

  })
})

function updateCalculation (strg) {
 
  if (strg == '=') {

    result = eval(calculation)
    
    if (result !== undefined) {
      calculation = `= ${result}`;
    }
  }

  else if (strg == 'Cleared') {
    calculation = ' ';
    result = null;
    localStorage.removeItem(`calculation`);
  }
  

  else {
    calculation += strg;
  }

  


document.querySelector('.js-field').innerHTML = calculation;

localStorage.setItem('calculation', calculation); 

}
