//Declarations

let calculation = localStorage.getItem('calculation');//Saves current calculation in local storage
document.querySelector('.js-txt').innerHTML = calculation;
let numbers = document.querySelectorAll('.js-numbers');//Numbers
let operators = document.querySelectorAll('.js-operators');//Operators
let misc = document.querySelectorAll('.js-misc');//Special symbols ('.', '=', 'Ans', etc.)
let result = null;
let temp = false;

//Executables

//Accounts for all numbers inputted
numbers.forEach((num, index) => {//Beginning of numbers for.each
  num.addEventListener('click', (value, index) => {

    temp = false;
    updateCalculation(num.innerText);

    if (result !== null) {
      result = null;
      calculation = ' ';
      updateCalculation(num.innerText);
    }
  
  })

})//End of numbers for.each

//Accounts for all operators
operators.forEach((operator, index) => {//Beginning of operator for.each
  operator.addEventListener('click', () => {
    
      if (operator.innerText && temp !== false) {
        updateCalculation('Cleared');
        updateCalculation('Ans');
      }
      updateCalculation(operator.innerText);

  })
})//End of operator for.each

//Accounts for all special symbols
misc.forEach((sym, index) => {//Beginning of misc for.each
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

})//End of misc for.each

//Function that renders the calculation on the page
function updateCalculation (strg) {//Beginning of updateCalculation Function
  
  switch (strg) {

    case '=': {

      result = eval(calculation)
      answer = result; 
      temp = true;
      
      if (result !== undefined) {
        calculation = `= ${result}`;
      }

    }
      break;

    case 'Ans':
      calculation += answer;
      break;
      
    case 'Cleared': {
      calculation = ' ';
      result = null;
      localStorage.removeItem('calculation');
    }
      break;

    default: calculation += strg; temp = false;
  }
  
  document.querySelector('.js-field').innerHTML = calculation;
  localStorage.setItem('calculation', calculation);

}//End of updateCalculation Function
