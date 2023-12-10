// get input fields value
function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueInString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueInString);
  inputField.value = '';
  return inputFieldValue;
}


// get element value by id
function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueInString = element.innerText;
  const elementValue = parseFloat(elementValueInString);
  return elementValue;
}


// set element inner Text
function setElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  return element.innerText = value;
}