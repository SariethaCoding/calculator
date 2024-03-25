
let calcDisplayText = "";
let firstNumber = "";
let secondNumber = "";
let firstNumberDone = false;
let storedOperator = "";

// --- Clear All 
const clearButton = document.querySelector(".clearbutton");
clearButton.addEventListener("click", clearAll);
// ---


// --- Number buttons listeners
const numButtons = document.querySelectorAll("div.calc-numbers input[type='button']");


numButtons.forEach((button) => {
    //console.log("this button i s: " + button);
    button.addEventListener("click", function() {
        updateNumbers(this.value);
        updateCalcDisplay(this.value,false);
    });
    
});

// ---


// --- Opertor buttons listeners
const operatorButtons = document.querySelectorAll("div.calc-operators input[type='button']");


operatorButtons.forEach((button) => {
    //console.log("this button i s: " + button);
    button.addEventListener("click", function() {
        operatorPressed(this.value);
      //updateCalcDisplay(this.value,true);
    });
    
});

// ---

function updateNumbers(pressedNum) {
    if(!firstNumberDone) {
        firstNumber = firstNumber + pressedNum;
    }
    else {
        if(secondNumber === "") {
            calcDisplayText = "";
        }
        secondNumber = secondNumber + pressedNum;
    } 

    console.log("First Number : " + firstNumber + " | Second Number : " + secondNumber);    

}

function updateCalcDisplay(myValue,clearDisplay) {
    if(clearDisplay) {
        calcDisplayText = "";
    }
    calcDisplayText = calcDisplayText + myValue;
    
    console.log("to display : " + calcDisplayText);
    
    document.getElementById("cDisplay").textContent = calcDisplayText;
}

function operatorPressed(pressedOperator) {
    if(!firstNumberDone) {
        firstNumberDone = true;
        storedOperator = pressedOperator;
        //updateCalcDisplay(firstNumber,true);
    }
    // else its the second number and we need to calculate the math
    else {
        console.log("go go math : " + firstNumber + " " + storedOperator + " " + secondNumber);
        result = Operate(storedOperator, firstNumber, secondNumber);
        updateCalcDisplay(result,true);

        // the result then becomes the first number to do the next calculation with
        firstNumber = result;
        secondNumber = "";
        storedOperator = pressedOperator;
    }
}


function clearAll() {
    console.log("CLEARING");
    document.getElementById("cDisplay").textContent = "0";
    calcDisplayText = "";
    firstNumber = "";
    secondNumber = "";
    firstNumberDone = false;
    storedOperator = "";

}


function Add(num1, num2) {
    let answer = num1 + num2;
    return answer;
}

function Subtract(num1, num2) {
    let answer = num1 - num2;
    return answer;
}

function Multiply(num1, num2) {
    let answer = num1 * num2;
    return answer;
}

function Divide(num1, num2) {
    // Check for divide by zero
    if (num1 == 0 || num2 == 0) {
        updateCalcDisplay("YOU BROKE IT",true);
        console.log("Divide by zero detected... Starting end of world sequence now...");
       return "";
     }
    else {
        let answer = num1 / num2;
        return answer;
    }
}


function validateNumber(num1,num2) {
    let valid = !isNaN(num1) && !isNaN(num2);
    return valid;
}


function Operate(operator, num1, num2) {
    if(validateNumber(num1,num2)) {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        switch(operator) {
            case "+" :
                result =  Add(num1, num2);
                break;

            case "-" :
                result =  Subtract(num1,num2);
                break;

            case "x" :
                result =  Multiply(num1, num2);
                break;

            case "/"  :
                result =  Divide(num1, num2);
                break;
        }

        console.log("Result : " + result);
        return result;
    }    
    else {
        console.log("Not valid numbers");
    }     
}