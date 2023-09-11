let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.textContent == '0' && value != '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function setOperation(operator) {
    display.textContent += operator;
}

function clearDisplay() {
    display.textContent = '0';
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}
