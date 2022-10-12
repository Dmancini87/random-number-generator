// Assignment code here
let charaNum = prompt("How Many Characters? (8 minimum");
let symbChoice = confirm("Special Characters?")
let numChoice = confirm("Numbers?")
let upperChoice = confirm("Uppercase Letters?")
let lowerChoice = confirm("Lowercase Letters?")

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuzwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*_+-="

function generatePassword(){
return Math.floor(Math.random() * charaNum);

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
