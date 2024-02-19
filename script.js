const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".oper");
const display = document.querySelector("#display");

let firstValue = '';
let secondValue = '';

numbers.forEach((number) => {
    number.addEventListener("click", inputNumber);
})

function inputNumber(e) {
    console.log("event triggered");
    display.innerHTML = display.innerHTML + e.target.innerHTML;
    console.log(display.innerHTML);
}

var icon;
function inputOperator() {
    operators.forEach((operator) => {
        operator.addEventListener("click", (e) => {
            let value = e.target.innerHTML;
            console.log(value);
            if (value == '+' || value == '-' || value == '*' || value == '/') {
                firstValue = display.innerHTML;
                console.log("firstvalue", firstValue);
                icon = value;
                console.log("icon", icon);
                display.innerHTML = '';
            }
            else if (value == '=') {
                secondValue = display.innerHTML;
                console.log("secondValue", secondValue);
                let result = calculate(firstValue, icon, secondValue);
                console.log("result", result);
                display.innerHTML = result;
            }else if(value == 'C'){
                display.innerHTML = '';
            }
        })
    })
}
inputOperator();


function calculate(f,i,s){
    if(i == '+'){
        return parseInt(f,10) + parseInt(s,10);
    }else  if(i == '-'){
        return parseInt(f,10) - parseInt(s,10);
    }else  if(i == '*'){
        return parseInt(f,10) * parseInt(s,10);
    }else  if(i == '/'){
        return parseInt(f,10) / parseInt(s,10);
    }
}