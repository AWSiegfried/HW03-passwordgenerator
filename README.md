
### Description
For this assignment, we were supposed to create a password generator.  The user selects how many characters they'd like (I set a limit between 8 and 128).  They were then to choose if they wanted to include numbers, special characters, uppercase and lowercase letters.  It was to be set up so that when they click the generate password button, it would prompt them with those 5 questions, then display their new password in the text bubble.  

There is one functionality that I wouldn't do for a professional assignment but would leave in for something personal. If the user types in a word/letter opposed to a number for the initial prompt, it will only create a password as long as the number of future prompts they wish to include.  I understand that professionally speaking it is better to force them to choose a number, but honestly I find it funny that if they are trying to be snarky and put in a purposefully wrong input it gives a purposefully bad password.  This works because I set up my code to force a string from each chosen character type into the final password array each time they confirm a prompt.  That way it is a guarantee you have at least one character from each array in the final password, and also as long as you say yes to something (even when typing in a word), you get some answer. 

<hr>


### General Logic
The way I set up the code is as follows.
<li>Prompt the user the 5 questions on length and content of password.  I set the length they wanted the password to be = i. Note: to ensure that the user selected between 8 and 128, I set up an "if" statement so that if they did not, they were prompted with a message saying "Please choose a number between 8 and 128, and then killed the code, so they'd have to click the generate button again.  In a better model it would have been a function that then loops back into itself so the user doesn't have to reclick the generate button password, but I wanted to try to stick to concepts convered by the class and find other solutions. 
<li>Push the characters from each character type array they selected (uppercase, lowercase, etc.) into an empty array. (Note: to ensure that at least one character from each chosen character array would be included, everytime they choose to include one I not only added the whole array into an empty array, I also added one random character from that array into the final password array then decreased i by 1).
<li>Now that I have my new total array of desired characters, I filled the rest of the password array by randomly selecting strings from the total array until i was equal to the original number selected by the first prompt. 
<li>Then it was just a matter of returning it to the text box and linking it to the generate password button. 

<hr>

### Screenshot
![screenshot](/Assets/passwordgenerator.png?raw=true)

<hr>

### Links
Github page - https://github.com/AWSiegfried/HW03-passwordgenerator

Password Generator - https://awsiegfried.github.io/HW03-passwordgenerator/ 

<hr>

### Original Psuedocode
1. When User clicks generatePassword button, then prompt "how many characters do you want.
    1a. Characters min = 8, characters max = 128
    1b. If user chooses less than min or more than max, alert error and try again.
2. Criteria
    2a. Numbers
    2b. Special characters
    2c. Uppercase letters
    2d. Lowercase letters
3. Create an empty array for password
4. Create arrays for 4 character types
5. Run loop with i < 1bAnswer, filling empty array with randonm designated characters from 2. 
    5a. Randomize characters in this snippet
6. Return generated password in text box

