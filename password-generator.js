var minLength = 8;
var maxLength = 128;
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";

function generatePassword() {
    var length = prompt("How many characters?");

    while(length < 8 || length >= 128) {
        length = prompt("Password length must be between 8 and 128 characters. How many characters?");
    }
        var lower = confirm("Would you like lowercase characters?");
        var upper = confirm("Would you like uppercase characters?");
        var special = confirm("Would you like special characters?");
        var numbers = confirm("Would you like numerical characters?");

    while(lower != true && upper != true && special != true && numbers != true) {
        alert("Please select at least one character type.");
        var lower = confirm("Would you like lowercase characters?");
        var upper = confirm("Would you like uppercase characters?");
        var special = confirm("Would you like special characters?");
        var numbers = confirm("Would you like numerical characters?");
    }

    var allPossibleCharacters = "";

    if(lower) {
        allPossibleCharacters += lowerCharacters;
    }

    if(upper) {
        allPossibleCharacters += upperCharacters;
    }

    if(numbers) {
        allPossibleCharacters += numberCharacters;
    }

    if(special) {
        allPossibleCharacters += specialCharacters;
    }

    var generatedPassword = "";
    for (var i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * allPossibleCharacters.length);
        var character = allPossibleCharacters[index];
        generatedPassword += character;
    }
   
    var passwordBox = document.getElementById("passwordBox");
    passwordBox.innerHTML = ""; 
    passwordBox.appendChild(document.createTextNode(generatedPassword));
}