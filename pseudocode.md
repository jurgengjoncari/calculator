There's a display and there's a numpad
1. the user starts the program
1. x -> 0
1. y -> ""
1. operator -> ""
1. the display shows x;
1. the user clicks a button
	- it is a digit
		- has the operator been clicked yet?
			- no
				- is x = 0?
					- yes
						: replace x with that digit
					- no
						: add the digit to the end of x
			- yes
				: add the digit to the end of y	
	- it is an operator
		1. operator -> button
	- it is the "=" sign
		1. call the operator function
		1. display the result
		1. x -> result
		1. y -> ""
		1. operator -> ""
	- it is the "Clear" button
		1. display "0"
		1. x -> "0"
		1. y -> ""
		1. operator -> ""
