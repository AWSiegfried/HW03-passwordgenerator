// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);







// 1. When User clicks generatePassword button, then prompt "how many characters do you want.
var charNum = prompt("How many characters would you like?");
charNum = Math.floor(charNum);
console.log(charNum);

// 1a. If user chooses less than 8 or more than 128, alert error and try again.
if (charNum < 8 || charNum > 128) {
    badMinMax = alert("Please choose a number between 8 and 128.")
    var charNum = prompt("How many characters would you like?");
}


//Collection of Arrays 
var totalArray = [];
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specCharArray = [" ", "!", "#", "$", "%", "%", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "["]
var upCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Collection of Prompts
var numPrompt = confirm("Do you want to include numbers?")
var specCharPrompt = confirm("Do you want to include special characters?")
var lowCasePrompt = confirm("Do you want to include lowercase letters?")
var upCasePrompt = confirm("Do you want to include uppercase letters?")

//If prompt equals true, add that array into totalArray
if (numPrompt) {
    Array.prototype.push.apply(totalArray, numArray);
}
if (specCharPrompt) {
    Array.prototype.push.apply(totalArray, specCharArray);
}
if (lowCasePrompt) {
    Array.prototype.push.apply(totalArray, lowCaseArray);
}
if (upCasePrompt) {
    Array.prototype.push.apply(totalArray, upCaseArray);
}

// 3. Create an empty array for password.  Password will use RANDOM characters from totalArray, and be length charNum
var passwordArray = [];

function generatePassword() {
    for (var i = 0; i < charNum; i++) {
        var randomNumber = Math.floor(Math.random() * totalArray.length);
        passwordArray.push(totalArray[randomNumber])
    }
}
generatePassword();
console.log(passwordArray);
// 6. Return generated password in text box */