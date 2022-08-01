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
		} else if (
			button.name == '+' ||
			button.name == '-' ||
			button.name == 'x' ||
			button.name == '/'
		) {
			if (operator == '') {
				operator = button.name;
				if (display == '') {
					display = input;
					input = '';
				}
			} else {
				if (display == '') {
					display = input;
					operator = button.name;
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
				}
			}
		} else if (input == '') {
			input = button.name;
		} else {
			input = input + button.name;
		}

		// Now to update the LCD on the calculator with our numbers
		document.getElementById('input').innerHTML = input;
		if (operator == undefined) {
			document.getElementById('total').innerHTML = display;
		} else {
			document.getElementById('total').innerHTML = display + operator;
		}
	});
});

// Below are all the math functions
function add(a, b) {
	display = a + b;
	display = Math.round(display * 10) / 10;
	return display;
}

function subtract(a, b) {
	display = a - b;
	display = Math.round(display * 10) / 10;
	return display;
}

function multiply(a, b) {
	display = a * b;
	display = Math.round(display * 10) / 10;
	return display;
}

function divide(a, b) {
	if (a == 0 || b == 0) {
		display = 'Start over loser';
	} else {
		display = a / b;
		display = Math.round(display * 10) / 10;
	}

	return display;
}
