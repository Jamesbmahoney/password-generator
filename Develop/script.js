// Variables for prompts
var confirm;
var lowerCasePrompt;
var upperCasePrompt;
var symbolsPrompt;
var numbersPrompt;

// Variables for characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+{}[]>?,./";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Start password function
function generatePassword() {
  var password = "";
  var passwordChar = "";
  confirm = prompt("Please choose password length between 8-128 characters");

  // if statement in which the characters prompt isn't fulfilled
  if (confirm < 8 || confirm > 128) {
    confirm = alert("Must be between 8-128 characters!");
    return "";
  
  // else/if for each different symbol  
  } else {
    lowerCasePrompt = prompt("Would you like lower case characters in your password?");
    upperCasePrompt = prompt("Would you like upper case characters in your password?");
    symbolsPrompt = prompt("Would you like symbols in your password?");
    numbersPrompt = prompt ("Would you like numbers in your password?");    
  
  } if (lowerCasePrompt) {
    passwordChar += lowerCase;
  
  } if (upperCasePrompt) {
    passwordChar += upperCase;
  
  } if (symbolsPrompt) {
    passwordChar += symbols;
  
  } if (numbersPrompt) {
    passwordChar += numbers;
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
