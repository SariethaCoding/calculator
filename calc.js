
// Calculator Display Text
let calcDisplayText = "";


const buttons = document.querySelectorAll("input[type='button']");

//console.log("buttons :  " + buttons.length);

buttons.forEach((button) => {
    //console.log("this button i s: " + button);
    button.addEventListener("click", function() {
        updateCalcDisplay(this.value);
    });
    
});

function updateCalcDisplay(myValue) {
    console.log(myValue);
    calcDisplayText = calcDisplayText + myValue;
    console.log(calcDisplayText);
    document.getElementById("cDisplay").textContent = calcDisplayText;
}


function Add(num1, num2) {

}







function Operate(operator, num1, num2) {
    switch(operator) {
        case "add" :
            return Add(num1, num2);
            break;

        case "subtract" :
            break;

        case "multiply" :
            break;

        case "divide"  :
            break;
    } 
}