const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// // Welcome the user to the password validator tool
// console.log("Welcome to the password validator tool.");

// // Prompt the user for a password to validate
reader.question("Please enter your password for validation, it must be at least 10 charqacters: ", function(input){
	let password = input.split('');
/*Check if the user’s password meets the following constraint:
 At least 10 characters long*/
 // If the user’s password meets the constraint, show a success message to the user
        if(password.length>=10){
            console.log ("Congratulations.  Your password meets the specified length requirement.")
 // If the user’s password fails the constraint, show a failure message to the user
        }else if(password.length<10){
                console.log ("Unfortunatley, your password does not meet the specified length requirement of at least 10 characters.");
        }
    reader.close();
});
