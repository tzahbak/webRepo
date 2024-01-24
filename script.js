let toCalc = "";

//Function to add characters to the equation based on button presses
function addToEquation(char) {
    let charToCalc, charToScreen;
    switch (char) {
        case "log":
            charToCalc = "Math.log10(";
            charToScreen = "log(";
            break;
        case "ln":
            charToCalc = "Math.log(";
            charToScreen = "ln(";
            break;
        case "e":
            charToCalc = "Math.E";
            charToScreen = "e";
            break;
        case "rpar":
            charToCalc = ")";
            charToScreen = ")";
            break;
        case "lpar":
            charToCalc = "(";
            charToScreen = "(";
            break;
        case "pi":
            charToCalc = "Math.PI";
            charToScreen = "π";
            break;
        case "mod":
            charToCalc = "%";
            charToScreen = "mod";
            break;
        case "exp":
            charToCalc = "Math.E**";
            charToScreen = "e^";
            break;
        case "abs":
            charToCalc = "Math.abs(";
            charToScreen = "abs(";
            break;
        case "sqrt":
            charToCalc = "Math.sqrt(";
            charToScreen = "√(";
            break;
        case "factorial":
            charToCalc = "calculateFac(";
            charToScreen = "fac(";
            break;
        case "**2":
            charToCalc = "**2";
            charToScreen = "^2";
            break;
        case "**":
            charToCalc = "**";
            charToScreen = "^";
            break;
        case "10**":
            charToCalc = "10**";
            charToScreen = "10^";
            break;
        default:
            charToCalc = char;
            charToScreen = char;
            break;
    }

    toCalc += charToCalc;
    let screen = document.querySelector('.screen');
    screen.innerText = screen.innerText === "0" ? charToScreen : screen.innerText + charToScreen;
}

//Function to clear the screen
function deleteAll() {
    toCalc = "";
    document.querySelector('.screen').innerText = '0';
}

//Function to delete characters from the equation based on button presses
function deleteFromEquation() {
    const operatorsToDelete = [
        { operator: "Math.log", displayLength: 2 },
        { operator: "Math.log10", displayLength: 3 },
        { operator: "Math.E", displayLength: 1 },
        { operator: "Math.PI", displayLength: 1 },
        { operator: "%", displayLength: 1 },
        { operator: "**", displayLength: 1 },
        { operator: "Math.sqrt", displayLength: 1 },
        { operator: "Math.abs", displayLength: 3 },
        { operator: "factorial", displayLength: 3 }
    ];

    let foundOperator = null;

    for (const { operator, displayLength } of operatorsToDelete) {
        if (toCalc.endsWith(operator)) {
            foundOperator = { operator, displayLength };
            break;
        }
    }

    if (foundOperator) {
        toCalc = toCalc.slice(0, -foundOperator.operator.length);
        document.querySelector('.screen').innerText = document.querySelector('.screen').innerText.slice(0, -foundOperator.displayLength);
    } else {
        toCalc = toCalc.slice(0, -1);
        document.querySelector('.screen').innerText = document.querySelector('.screen').innerText.slice(0, -1);
    }

    // Reset to default value if empty
    if (document.querySelector('.screen').innerText.trim() === "") {
        document.querySelector('.screen').innerText = '0';
        toSlice = "";
    }
}

//Function that solves the equation.
function solveEquation() {
    //Regex for the case when a factorial is being calculated.
    toCalc = toCalc.replace(/factorial\((\d+)\)/g, (match, number) => calculateFac(parseInt(number)));
    const result = eval(toCalc);
    toCalc = String(result);
    document.querySelector('.screen').innerText = result;
}

//Function to toggle between positive and negative numbers
function plusMinus() {
    if (!isNaN(parseFloat(toCalc))) {
        const result = String(parseFloat(toCalc) * -1);
        document.querySelector('.screen').innerText = result;
        toCalc = result;
    }
}

//Recursive function to calculate factorial
function calculateFac(n) {
    return n === 0 || n === 1 ? 1 : n * calculateFac(n - 1);
}

/* special scripts for integration in MTW gallery - must be placed at the bottom of the HTML after your code */

// custom config for the MTW app 
const mtwAppConfig = {
    border: true // app border in the MTW page                    
}

///////////////////////////////////////////////////////
// implement this functions in order to use private API        
const sendPrivateApiRequest = async () => {
    // your code here:
    // sendRequestToParent({ cat: 'getAssets' })
}

const acceptPrivateApiResponse = async (data) => {
    // process received data here:
    // console.log(data)
}

// use this in order to send on document load
document.addEventListener('DOMContentLoaded', () => {
    // your code here:
    //sendRequestToParent({ method: 'getAssets' })
})