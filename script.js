// Assignment code here
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = window.prompt('Length of password (8-128)?');
    if (length => 8) {
        var confirmLength = window.confirm("Got it!");

        if (confirmLength) {
          console.log("length: ", length);
        }
    }
    else if (length <= 128) {
      var confirmLength = window.confirm("Got it!");

      if (confirmLength) {
        console.log("length: ", length);
      }
  }
  var hasUpper =  window.prompt('Uppercase letters y/n?');
  if (hasUpper === 'y' || 'n') {
    var confirmUpper = window.confirm("Got it!");

    if (confirmUpper) {
      console.log("hasUpper: ", hasUpper);
    }
}
  var hasLower = window.prompt('Lowercase letters y/n?');
  if (hasLower === 'y'|| 'n') {
    var confirmUpper = window.confirm("Got it!");

    if (confirmUpper) {
      console.log("hasLower: ", hasLower);
    }
}
  var hasNumber = window.prompt('Numbers y/n?');
  if (hasNumber === 'y' || 'n') {
    var confirmUpper = window.confirm("Got it!");

    if (confirmUpper) {
      console.log("hasNumber: ", hasNumber);
    }
}
  var hasSymbol = window.prompt('Symbols y/n?');
  if (hasSymbol === 'y'|| 'n') {
    var confirmUpper = window.confirm("Got it!");

    if (confirmUpper) {
      console.log("hasSymbol: ", hasSymbol);
    }
}


  var password = generatePassword(hasLower, hasNumber, hasUpper, hasSymbol, length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword(lower, upper, number, symbol, length) {
  let generatePassword = '';

  const typesCount = lower + upper + number + symbol;

  console.log('typesCount: ', typesCount);

  const typesArr = [lower, upper, number, symbol];

  console.log('typesArr: ', typesArr);

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
