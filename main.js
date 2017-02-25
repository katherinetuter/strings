//make sure user only entered letters
var testString = "";
var strReverse = document.getElementById("str-reverse");
var strAlpha = document.getElementById("str-alpha");
var strPalindrome = document.getElementById("str-palindrome");


function validateInput (){
	var testString = document.getElementById("text-input").value;
	if (!testString= ) {
		alert("Please only enter letters!");
		return false;
	} else 
	
	reversal(testString);
	// alphabits(testString);
	// palindrome(testString); 
}


function reversal(testString) {
strReverse.innerHTML += testString.reverse();
}

// function alphabits() {

// }

// function palindrome() {

// }



//create a button to change the string
var stringButton = document.getElementById("submit-button");
stringButton.addEventListener("click", validateInput);

//determine if enter is pressed 
document.querySelector("#submit-button").addEventListener("keyPress", function (e) {
	var key = e.which || e.keyCode;
	if (key === 13) {
		validateInput;
	}
});
