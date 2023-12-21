let displayValue = '0';
let firstOperand = null;
let operator = null;
let awaitingNextOperand = false;

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function handleButtonClick(event) {
    const buttonValue = event.target.value;

    if (awaitingNextOperand) {
        displayValue = buttonValue;
        awaitingNextOperand = false;
    } else {
        displayValue = displayValue === '0' ? buttonValue : displayValue + buttonValue;
    }

    updateDisplay();
}

function handleOperator(operatorValue) {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result
