
const inputField = document.getElementById("fname");

inputField.addEventListener("blur", function(){
	const value = inputField.value;
	const upperCaseValue = value.toUpperCase();
	inputField.value = upperCaseValue;
})