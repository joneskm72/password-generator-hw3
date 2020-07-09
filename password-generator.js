var minLength = 8;
var maxLength = 128;
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_{|}~"

function generatePassword() {
    var length = prompt("How many characters?");

    while(length < 8 || length >= 128) {
        length = prompt("Password length must be between 8 and 128 characters. How many characters?");
    }
        var lower = confirm("Would you like lowercase characters?");
        var upper = confirm("Would you like uppercase characters?");
        var special = confirm("Would you like special characters?");
        var numbers = confirm("Would you like numerical characters?");

    while(lower != true && upper != true && special != true) {
        alert("Please select at least one character type.");
        var lower = confirm("Would you like lowercase characters?");
        var upper = confirm("Would you like uppercase characters?");
        var special = confirm("Would you like special characters?");
        var numbers = confirm("Would you like numerical characters?");
    }

    var generatedPassword = "passw0rd";
    document.getElementById("passwordBox").innerHTML = generatedPassword;
}