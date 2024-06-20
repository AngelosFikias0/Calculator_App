'use strict';

const buttons = document.querySelectorAll('th');

let expression = '';
let result = '';
let hasError = false; // Flag to track if an error has occurred

const calc = document.getElementById('calc');
const results = document.getElementById('results');

function buttonClick(event) {
    const buttonValue = event.target.textContent;
    
    if (buttonValue === 'C') {
        expression = '';
        result = '';
        if (hasError) {
            results.style.backgroundColor = 'rgb(153, 137, 137)';
            results.textContent = 'Please give correct input';
            hasError = false; // Reset the error flag
        } else {
            results.textContent = 'Please input something';
        }
    } else if (buttonValue === '←') {
        expression = expression.slice(0, -1);
    } else if (buttonValue === '=') {
        try {
            if (expression === '') {
                results.textContent = 'Please input something';
            } else {
                result = eval(expression); 
                results.textContent = result;
                results.style.backgroundColor = 'rgb(153, 137, 137)';
                hasError = false; 
            }
        } catch (error) {
            results.textContent = 'Error';
            results.style.backgroundColor = 'Red';
            hasError = true; 
        }
    } else {
        expression += buttonValue;
    }
    calc.textContent = expression;
}

buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});
