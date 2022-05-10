// Let's set up some variables to use
let display = '';
let input = '';
let operator;
const buttons = document.querySelectorAll('button');

// Here's where we execute the code when we press a button on the calculator
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    if (button.name == 'clr') {
        input = '';
        display = '';
        operator = '';
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
    } else if (button.name == '+' || button.name == '-' || button.name == 'x' || button.name == '/') {
        //operator = button.name;
        if (operator == '') {
            operator = button.name;
            if (display == '') {
            display = input;
            input = '';
            //console.log('i am in this first if');
            //console.log(operator);
            } 
            // else {
            //     if (operator == '+') {
            //         add(Number(display), Number(input));
            //     } else if (operator == '-') {
            //         subtract(Number(display), Number(input));
            //     } else if (operator == '/') {
            //         divide(Number(display), Number(input));
            //     } else if (operator == 'x') {
            //         multiply(Number(display), Number(input));
            //     }
            //     input = '';
            //     console.log('why am i here');
            //     console.log(display);
                
            // } 
        } else {
            if (display == '') {
                display = input;
                operator = button.name;
                //console.log('first operator');
                input = '';
            } else {
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
                operator = button.name;
                //console.log('I am down in this else statement');
            }
        }
    } else if (input == '') {
        input = button.name;
        //console.log('step one maybe');
    } else {input=input + button.name;
    //console.log('step two maybe');
    }

    // Now to update the LCD on the calculator with our numbers
    document.getElementById("input").innerHTML = input;
    if (operator == undefined) {
        document.getElementById("total").innerHTML = display;
    } else {document.getElementById("total").innerHTML = display+operator;}
    
  });
});

// Below are all the math functions
function add(a, b){
    display = a + b;
    display = Math.round(display * 10) / 10;
    return display;
};

function subtract(a, b){
    display = a - b;
    display = Math.round(display * 10) / 10;
    return display;    
};

function multiply(a, b){
    display = a * b;
    display = Math.round(display * 10) / 10;
    return display;   
};

function divide(a, b){
    if (a == 0 || b == 0) {
        display = 'Start over loser';
    } else {
        display = a / b; 
        display = Math.round(display * 10) / 10;
    }
  
    return display;   
};

// function operate(input) {
//     if (input.includes("+")) {
//         display = add(input[0], input[2]);
//         return display;
//     } else if (input.includes("-")) {
//         display = subtract(input[0], input[2]);
//         return display;
//     } else if (input.includes("*")) {
//         display = multiply(input[0], input[2]);
//         return display;
//     } else if (input.includes("/")) {
//         display = divide(input[0], input[2]);
//         return display;
//     }
// };

