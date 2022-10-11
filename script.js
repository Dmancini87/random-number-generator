// Assignment code here
const charaNum = prompt("How Many Characters? (8 minimum");
const specChara = confirm("Special Characters?")
const numbers = confirm("Numbers?")
const uppercase = confirm("Uppercase Letters?")
const lowercase = confirm("Lowercase Letters?")

function generatePassword(){
return 

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
