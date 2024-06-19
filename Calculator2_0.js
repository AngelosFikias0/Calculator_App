'use strict';

const buttons = document.querySelectorAll('th');

let expression = '';
let result = '';

const calc = document.getElementById('calc');
const results = document.getElementById('results');

function buttonClick(event) {
    const buttonValue = event.target.textContent;
    
    if (buttonValue === 'C') {
        expression = '';
        result = '';
    } else if (buttonValue === '=') {
        try {
            if(expression === ''){
                results.textContent = 'Please input something';
            }else{
            result = eval(expression); 
            results.textContent = result;}
        } catch (error) {
            results.textContent = 'Error';
        }
    } else {
        expression += buttonValue;
    }
    calc.textContent = expression;
}

buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});
