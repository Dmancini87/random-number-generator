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

function generatePassword() {
   var password = "";
for (var i = 0; i <= charaNum; i++) {
  if(lowerChoice === true){
 var randomLower = Math.floor(Math.random() * lower.length);
 password += lower.substring(randomLower, randomLower +1);
  }
  if(upperChoice === true){
 var randomUpper = Math.floor(Math.random() * upper.length);
 password += upper.substring(randomUpper, randomUpper +1);
  }
  if(symbChoice === true){
    var randomSymb = Math.floor(Math.random() * symbol.length);
    password += symbol.substring(randomSymb, randomSymb +1);
     }
if(numChoice === true){
    var randomNum = Math.floor(Math.random() * number.length);
    password += number.substring(randomNum, randomNum +1);
     }
}
      document.getElementById("password").value = password;
      return password;
}

// function generatePassword(){
// return Math.floor(Math.random() * );
// if(symbChoice === true){
// password.concat(symbol, number, upper, lower)
  // }
// if(numChoice === true){

// }
// if(upperChoice === true){

// }
// if(lowerChoice === true){

// }

// }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var randomPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = randomPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// let password = ""
// const upper = "ABC"
// const lower = "abc"

// console.log (password.concat(upper, lower))

