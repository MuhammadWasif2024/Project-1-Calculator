/*let input = document.getElementById('inputbox');
let button = document.querySelectorAll('button');

let string = "";

let arr = Arrey.from(button);
arr foreach(button)*/

// Get the input box element
const inputBox = document.getElementById('inputbox');

// Add event listener to all buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    if (buttonText === 'AC') {
      // Clear the input box
      inputBox.value = '';
    } else if (buttonText === 'DEL') {
      // Delete the last character from input box
      inputBox.value = inputBox.value.slice(0, -1);
    } else if (buttonText === '=') {
      // Evaluate the expression in the input box
      try {
        const result = eval(inputBox.value);
        inputBox.value = result;
      } catch (error) {
        inputBox.value = 'Error';
      }
    } else {
      // Append the clicked button's text to the input box
      inputBox.value += buttonText;
    }
  });
});
