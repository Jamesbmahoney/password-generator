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

// Character type variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+{}[]>?,./";


// Prompt variables
var lowerCasePrompt = "";
var upperCasePrompt = "";
var symbolsPrompt = "";
var numbersPrompt = "";

// Start password function
function generatePassword() {
  // Variables for characters to return
  var characterTypes = "";
  var finalPassword = "";  
  var finalCharacterTypes = "";
  var charactersTotal = "";
  
 passwordChar();

function passwordChar() {
  characterTypes = "";
  // Choice of password length
  passwordLength = parseInt(prompt("Please choose password length between 8-128 characters"))
  // If statement in which the characters prompt isn't fulfilled
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.alert("Must be between 8-128 characters!");
    return;
  } 
    // Different prompts to add extra characters
    lowerCasePrompt = confirm("Would you like lower case characters in your password?");
    upperCasePrompt = confirm("Would you like upper case characters in your password?");
    symbolsPrompt = confirm("Would you like symbols in your password?");
    numbersPrompt = confirm("Would you like numbers in your password?");
  }      
  // If statements to confirm use of extra characters 
  if (lowerCasePrompt === true) {
    characterTypes += lowerCase;

  } if (upperCasePrompt === true) {
    characterTypes += upperCase;
  
  } if (symbolsPrompt === true) {
    characterTypes += symbols;
  
  } if (numbersPrompt === true) {
    characterTypes += numbers;  
  } 

// For loop for password length
  for (var i = 0; i < passwordLength; i++) {
    finalCharacterTypes = Math.floor(Math.random() * characterTypes.length);
    charactersTotal = characterTypes[finalCharacterTypes];
    finalPassword = finalPassword + charactersTotal;
  } return (finalPassword)
}
