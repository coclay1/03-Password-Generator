// Assignment Code
var generateBtn = document.querySelector("#generate");
// Password variable values
var upperCaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
var specialChar = ["!", "@", "#", "$", "%", ",", "^", "&", "*", "(", ")", "<", ">", "?", ".", "/", "[", "]", "{", "}", "|", "\ ", "`", "~", "+", "=", "-", "_"]
// User input variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;

// declartion of the function
function generatePassword() {
  // Asks for uder imput, stores value in var of enter
  enter = prompt("Between 8 and 128 characters. Please enter how long you would like your password to be");
  if (!enter) {
    // alerts the user if condition is not met
    alert("This needs a value");
    // warns the user that the condition must be between 8 and 128
  } else if (enter < 8 || enter > 128) {
    enter = prompt("You must choose between 8 and 128 characters.");
    
  } else {
    // asks user for input on variable
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain characters?");
    confirmLowercase = confirm("Will this contain lowercase letters?");
    confirmUppercase = confirm("Will this contain uppercase letter?");
  };

  if (!confirmNumber && !confirmCharacter && !confirmLowercase && !confirmUppercase) {
    // warns user if all criterias are false
    choices = alert("You must choose at least one criteria!");
    // else if statement for 4 option
  } else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    choices = specialChar.concat(num, lowerCaseletters, upperCaseletters);
    // else if statement to choose 3 options
  } else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = specialChar.concat(num, upperCaseletters);

  } else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = specialChar.concat(num, lowerCaseletters);

  } else if (confirmNumber && confirmUppercase && confirmLowercase) {
    choices = num.concat(lowerCaseletters, upperCaseletters);

  } else if (confirmCharacter && confirmNumber) {
    choices = specialChar.concat(num);
    // else if statement to choose 2 options
  } else if (confirmCharacter && confirmLowercase) {
    choices = specialChar.concat(lowerCaseletters);

  } else if (confirmCharacter && confirmUppercase) {
    choices = specialChar.concat(upperCaseletters);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = lowerCaseletters.concat(num);

  } else if (confirmLowercase && confirmUppercase) {
    choices = lowerCaseletters.concat(upperCaseletters);

  } else if (confirmNumber && confirmUppercase) {
    choices = num.concat(upperCaseletters);
  // else if statement to choose 1 option
  } else if (confirmCharacter) {
    choices = specialChar;

  } else if (confirmNumber) {
    choices = num;

  } else if (confirmLowercase) {
    choices = lowerCaseletters;

  }else (confirmUppercase);

  var password = [];

  for (var i = 0; i < enter.length; i ++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)]
    password.push(pickChoices);
  }return;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
