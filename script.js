
let display;
let input = [2,"+",5];



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


//Thoughts
// how to insert stored value to beginning of array? 
// how to combine multiple buttons into 1 item?