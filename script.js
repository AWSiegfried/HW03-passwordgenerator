// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    passwordText.innerHTML = "";
    // 1. When User clicks generatePassword button, then prompt "how many characters do you want.
    var charNum = prompt("How many characters would you like?");
    charNum = Math.floor(charNum);
    console.log(charNum);

    // 1a. If user chooses less than 8 or more than 128, alert error and try again.
    if (charNum < 8 || charNum > 128) {
        alert("Please choose a number between 8 and 128.");
        return "";
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
    var passwordArray = [];

    //If prompt equals true, add that array into totalArray
    if (numPrompt) {
        totalArray.push(...numArray)
        var randomNumber2 = Math.floor(Math.random() * numArray.length);
        passwordArray.push(numArray[randomNumber2])
        charNum--
    }
    if (specCharPrompt) {
        totalArray.push(...specCharArray)
        var randomNumber3 = Math.floor(Math.random() * specCharArray.length);
        passwordArray.push(specCharArray[randomNumber3])
        charNum--
    }
    if (lowCasePrompt) {
        totalArray.push(...lowCaseArray)
        var randomNumber4 = Math.floor(Math.random() * lowCaseArray.length);
        passwordArray.push(lowCaseArray[randomNumber4])
        charNum--
    }
    if (upCasePrompt) {
        totalArray.push(...upCaseArray)
        var randomNumber5 = Math.floor(Math.random() * upCaseArray.length);
        passwordArray.push(upCaseArray[randomNumber5])
        charNum--
    }

    // 3. Create an empty array for password.  Password will use RANDOM characters from totalArray, and be length charNum
    for (var i = 0; i < charNum; i++) {

        var randomNumber = Math.floor(Math.random() * totalArray.length);
        passwordArray.push(totalArray[randomNumber])

    }
    console.log(passwordArray);
    return passwordArray.join("");
}