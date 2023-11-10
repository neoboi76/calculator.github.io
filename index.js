//Declarations

let calculation = localStorage.getItem('calculation');//Saves current calculation in local storage
document.querySelector('.js-field').innerHTML = calculation;
let numbers = document.querySelectorAll('.js-numbers');//Numbers
let operators = document.querySelectorAll('.js-operators');//Operators
let misc = document.querySelectorAll('.js-misc');//Special symbols ('.', '=', 'Ans', etc.)
let result = null;

//Executables

//Accounts for all numbers inputted
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

    if (result !== null) {
      result = null;
      calculation = ' ';
      updateCalculation(sym.innerText);
    }

  })
})

function updateCalculation (strg) {
  
  if (strg == '=') {

    result = eval(calculation)
    answer = result; 
    
    if (result !== undefined) {
      calculation = `= ${result}`;
    }
  }

  else if (strg == 'Ans') {
    calculation += answer;
  } 

  else if (strg == 'Cleared') {
    calculation = ' ';
    result = null;
    localStorage.removeItem('calculation');
  }

  else {
    calculation += strg;
  }


  document.querySelector('.js-field').innerHTML = calculation;
  localStorage.setItem('calculation', calculation);

}
