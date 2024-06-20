'use strict';

const buttons = document.querySelectorAll('th');

let expression = '';
let result = '';
let hasError = false; 

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
            hasError = false; 
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
results.addEventListener('mouseover', function (evt) {
    results.style.backgroundColor = 'white';
   }, false);   

results.addEventListener('mouseout', function (evt) {
    if(results.textContent != 'Error'){
        results.style.backgroundColor = 'rgb(153, 137, 137)';
    }else{
        results.style.backgroundColor = 'red';
    }
   }, false); 

buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});
