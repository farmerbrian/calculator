
let display = '';
//let input = [2,"+",6];
let input = '';
let operator;

// maybe input is itself + the next input? like storedValue1 = input + buttonInput ???

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    if (button.name == 'clr') {
        input = '';
        display = '';
        operator = '';
    } else if (button.name == '+' || button.name == '-' || button.name == 'x' || button.name == '/') {
        operator = button.name;
        if (display == '') {
        display = input;
        input = '';
        }
    } else if (button.name == '=') {
        if (operator == '+') {
            add(Number(display), Number(input));
        } else if (operator == '-') {
            subtract(Number(display), Number(input));
        } else if (operator == '/') {
            divide(Number(display), Number(input));
        } else if (operator == 'x') {
            multiply(Number(display), Number(input));
        }
        input = '';
        operator = '';

    } else if (input == '') {
        input = button.name;
    } else {input=input + button.name;}

    document.getElementById("input").innerHTML = input;
    if (operator == undefined) {
        document.getElementById("total").innerHTML = display;
    } else {document.getElementById("total").innerHTML = display+operator;}
    
  });
});


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

//let test = operate(input)

//console.log(input);

//console.log(test);


//document.getElementById("total").innerHTML = display;
//document.getElementById("input").innerHTML = input.join('');


// ----- Thoughts -----
// how to insert stored display value to beginning of array? 
// how to combine multiple buttons into 1 array item? - What if pressing an operator button takes all the prior button presses and concatenates them and dumps them into a variable or slot in the array? 
    //Maybe it checks to see if we entered anything to determine if it should go grab the previous calculation from the display...?