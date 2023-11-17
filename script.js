// Assignment Code
var generateBtn = document.querySelector("#generate");

// passwordString shows all the available combinations to use for the password
var passwordString="";
  // var chars = upper || lower || num || special;
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var num = ['0','1','2','3','4','5','6','7','8','9']
var special = ["!#$%&'()*+,-./:;<=>?@[ \ ]^_`{|}~"]
var chosenChars= [];
// Write password to the #password input
function writePassword() {
  var password = generatePassword() ;
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
}

function generatePassword() {
  var charLength = parseInt(prompt("How many characters you want? Password length must be between 8 to 128"));

  // checks to see if the length is correct
  if (!(charLength > 8 || charLength < 128 || charLength === "")) {
    alert("Please choose a length from(0-128)");
    generatePassword();
  }else{
    alert('Length added')
    // Asks to include combinations in prompt window
  var numberChoice = window.confirm("Include numbers");
  
  var upperChoice = window.confirm("Include UpperCase Letters");

  var lowerChoice = window.confirm("Include LowerCase Letters");

  // specialChoice adds the selection the user wanted to use
  var specialChoice = window.confirm("Include special characters");
    
    if (numberChoice) {
      chosenChars.push(...num);
      console.log(chosenChars)
    }
    if (upperChoice) {
      chosenChars.push(...upper)
      console.log(chosenChars)
    }
    if (lowerChoice) {
      chosenChars.push(...lower)
      console.log(chosenChars)
    }
    if (specialChoice) {
      chosenChars.push(...special)
      console.log(chosenChars)
    }
    // creates a random combination with choices accepted
    for (var i = 0; i < charLength; i++) {
    var randomNumber = Math.floor(Math.random() * chosenChars.length);
    console.log(randomNumber)
    passwordString += chosenChars[randomNumber]
    }
  }



// returns the passwordString so it doesnt create an infinite loop
  return passwordString;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// must return a string value that is the password
//prompt user to choose num between 8 and 128
  // var to save length
  // validate user num

// confirm user upper, lower, num, special characters ( 4 confirm prompts)
  // 4 vars to save T/F to included characters
 
  //  validate that atleast one cat was chosen
// vars that include all user options of each category. Array of string for each cat.
// var upper = [" A", " B"]
// If my user says yes to include that category choose random(Math.Random) elements from the array
  //  How to decide  how many elements to choose from each array
// Validate that atleast one cat was chosen
// join chosen elements into a string



