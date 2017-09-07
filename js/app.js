import * as calculate from './calculate';
import * as displayResault from './showResault';
import * as inputs from './inputs';

inputs.createInputs();
inputs.createButtons();
inputs.createOutput();

document.getElementsByClassName('calc')[0].addEventListener('click', function (event) {
    let number1 = parseFloat(document.getElementsByTagName('input')[0].value);
    let number2 = parseFloat(document.getElementsByTagName('input')[1].value);
    displayResault.displayResault(calculate.calculate(number1, number2, event.target.innerHTML));
});