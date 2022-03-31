# Calculator

This is a very basic calculator: https://jurgengjoncari.github.io/calculator/

To do this I've used classes - from ES6, and semantic HTML.

## Redesign plan
- Redesign the calculator completely. I do not like to treat it like the hand calculator, but just like the output of the calculations one might do by typing on the actual keyboard. Then, the virtual numpad is just like an accessory / help for those that don't use an actual keyboard. Think of it as the Wordle app. 
- Additionally, create the numpad as a web component. 
- Make the virtual numpad in a separate package and import it in this app. 
- Separate the javascript logic, which connects them to a number to some output, with the numpad package. 


## Bugs and improvements to be made eventually
- Try to compile all CSS into one file. 
- Fix the font in output, in order to load a fallback. 
- The digit font is not displayed in Safari. 
- Verify why the equals button doesn't change color on hover, and fix it. 
- Add the clear button
- Check combination of typing some buttons consequently, such as decimal, backspace, etc. Maybe write some tests cases. 
- When I type a function key from the keyboard, such as "F12", it is displayed in the calculator. 
- Polish the footer, maybe add the GitHub icon. 
- Make the font of the banner a bit more interesting. 
- Every time a button is typed, the output should flick. 
- Check the animations, such as the hover state, etc. 
- Fix colors: the blue and lime do not have the correct contrast with the black background. 
- The blue is too purple. 
- Make the colors look good for dark mode. 
- Find a way to differentiate the output from the background. 
