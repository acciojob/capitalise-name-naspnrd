// Get the input field element by its id
const inputField = document.getElementById('fname');

// Add event listener for the "blur" event
inputField.addEventListener('blur', function() {
  // Get the current value of the input field
  const value = inputField.value;

  // Convert the value to uppercase
  const uppercaseValue = value.toUpperCase();

  // Set the uppercase value back to the input field
  inputField.value = uppercaseValue;
});