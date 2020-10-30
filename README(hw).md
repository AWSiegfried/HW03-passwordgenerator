### Psuedocode
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


### Wilson's Psuedocode
1. We need to define global variables.  What are those global?
    1a. We need lowercase, uppercase, numbers, special characters
    1b. We need to store our values. We can use strings or arrays.  "abcd" or ["a", "b", "c", "d"]
    1c. Create our global variables
        ex.  var upperCase = ['a', 'b', 'c', 'd', etc.]
        * We need an empty array to push our manipulated values into this array.  We use this array to return our string abck to our user. 

2. We then create a function called start and we attach that function to our gnerate button.
    2a. We first work on our start function.  We need to create a variable that prompts the user withtin the start function. var userPrompt = prompt("user message")
    2b. We then need to create a condition restricing our user to chooise a number between 8 and 128. 
    2bi. Use an if statmeent to handle any number between these ranges.  8 <= n <= 128. 
    2b2. We can then create our 4 prompts to ask our user which characters would they like to inlclude in their password. We can use confrim because it is easier to evalueate a true or false value. 

3. Create functions to handle the logic in the case that the user wants to add each specific character
    3a. We take the array of the corresponding (i.e lowercase chars) and we push that array into our final array.  Ex. finalArray = [a-z, 0-1, special characters, A-Z] *in the case the user chooses all 4

4. Create a function to pick out the characters based on the user prompt
    4a.  Our user prompt will be defined as x = number, and we need to use a loop and Math.random to pick out x amount of characters and push it into a new array. *We can define a final final array to push our plucked characters into.

5. We are going to use .join() to join the array into a string. We then take that variable and set it into the html. 