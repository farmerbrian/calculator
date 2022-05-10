
let display;
let input = [2,"+",6];
// maybe input is itself + the next input? like storedValue1 = input + buttonInput ???


function add(a, b){
    display = a + b;
    return display;
};

function subtract(a, b){
    display = a - b;
    return display;    
};

function multiply(a, b){
    display = a * b;
    return display;   
};

function divide(a, b){
    display = a / b;
    return display;   
};

function operate(input) {
    if (input.includes("+")) {
        display = add(input[0], input[2]);
        return display;
    } else if (input.includes("-")) {
        display = subtract(input[0], input[2]);
        return display;
    } else if (input.includes("*")) {
        display = multiply(input[0], input[2]);
        return display;
    } else if (input.includes("/")) {
        display = divide(input[0], input[2]);
        return display;
    }
};

let test = operate(input)

console.log(input);

console.log(test);


document.getElementById("total").innerHTML = display;
document.getElementById("input").innerHTML = input.join('');


// ----- Thoughts -----
// how to insert stored display value to beginning of array? 
// how to combine multiple buttons into 1 array item? - What if pressing an operator button takes all the prior button presses and concatenates them and dumps them into a variable or slot in the array? 
    //Maybe it checks to see if we entered anything to determine if it should go grab the previous calculation from the display...?