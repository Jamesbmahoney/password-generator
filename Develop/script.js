// Variables for characters to be generated
var confirm
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+{}[]>?,./";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  var passwordChar = "";
  confirm = prompt("Please choose password length between 8-128 characters");

  if (confirm < 8 || confirm > 128) {
    confirm = prompt("Must be between 8-128 characters!");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
