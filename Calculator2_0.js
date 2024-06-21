'use strict';

const buttons = document.querySelectorAll('th');

let expression = ' ';
let result = '';
let hasError = false; 

const calc = document.getElementById('calc');
const results = document.getElementById('results');

function buttonClick(event) {
    const buttonValue = event.target.textContent;
    if (buttonValue === 'C') {
        if (hasError) {
            results.style.backgroundColor = 'rgb(153, 137, 137)';
            results.textContent = 'Please give correct input';
            hasError = false; 
        }else if(expression === ' '){
            results.textContent = 'Please input something';
        }
        expression = ' ';
        result = '';
    } else if (buttonValue === '←') {
        expression = expression.slice(0, -1);
    } else if (buttonValue === '=') {
        try {
            if (expression === ' ') {
                results.textContent = 'Please input something';
            } 
            else if(expression.includes('//')) {
                results.textContent = 'Error';
                results.style.backgroundColor = 'Red';
                hasError = true;
            }
            else {
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

calc.addEventListener('mouseover', function (evt) {
    calc.style.backgroundColor = 'white';
   }, false);  

calc.addEventListener('mouseout', function (evt) {
    calc.style.backgroundColor = 'rgb(153, 137, 137)';
   }, false); 

head.addEventListener('mouseover', function (evt) {
    head.style.backgroundColor = 'pink';
    this.innerHTML = "Thank you :)"
   }, false); 

head.addEventListener('mouseout', function (evt) {
    head.style.backgroundColor = 'darksalmon';
    this.innerHTML = "This is a simple calculator web app showcasing my skills in HTML, CSS AND JAVASCRIPT."
   }, false); 

buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});

document.addEventListener('mousemove', function (e) {
    createTrail(e.pageX, e.pageY);
});

function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
            trail.remove();
        },0); 
    }, 90);
}