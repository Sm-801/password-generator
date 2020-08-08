// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  function generatePassword() {
       let password = "npassword";
       return password;
}
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


   
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Start: to start the app. the user will push the button "generate password button"
//The user will be exposed to certain prompts that will give parameters to which they will have to chose which ones will be included in the password. 
//collect user input for password criteria 
//A. length
    //-min of characters (8)
    //-max of characters (128)

let passwordLength = prompt("Pick a number between 8 and 128");{

let npassword= "";



//B. Symbols to included in the password 
    //-lowercase letters
  //-uppercase letters


let lowercase= confirm ("wanna include lowercase letters in your password?");
let whichLow= "abcdefghijklmnopqrstuvwxyz";

let uppercase= confirm ("wanna include uppercase letters in your password?");
let whichUpp= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  
  //-what types of symbols should I include ex (!@#$%^)
    //-numbers 
let symbols= confirm ("wanna include symbols in your password?");
let whichSym= "!@#$%^&*()-=+}{][";

let numbers= confirm ("wanna include numbers in your password?");
let whichNum= "0123456789";


//C. We need a random input of order (password)
    //-random numbers
    //-random letters/both upper and lowercase 
   // -random symbols
   // in order to get a random option we need to have an option where each option (number, symbol or lower/upper case are selected)
   // need to create conditional statement where the option selected are used and the others not selected are eliminated. 

let totalPackage= uppercase + lowercase + symbols + numbers;
if ((whichLow === true) && (whichUpp === true)&& (whichSym === true) && (whichNum === true) ) {
    for (i = 0; i < passwordLength; i++) { let character = Math.floor(Math.random() * totalPackage.length);
        npassword += totalPackage.charAt(character, character + 1);
    }
}
else if ((whichSym === false) && (whichNum=== false) && (whichLow === true) && (whichUpp === false)) {
    for (i = 0; i < passwordLength; i++) { let character = Math.floor(Math.random() * lowercase.length);
        npassword += lowercase.charAt(character, character + 1);
    }
}
else if ((whichLow === false) && (whichUpp === true)&&(whichSym === false) && (whichNum === false) ) {
    for (i = 0; i < passwordLength; i++) { let character = Math.floor(Math.random() * uppercase.length);
        npassword += uppercase.charAt(character, character + 1);
    }
}
else if ((whichSym === true) && (whichNum === false) && (whichLow === false) && (whichUpp === false)) {
    for (i = 0; i < passwordLength; i++) { let character = Math.floor(Math.random() * symbols.length);
        npassword += symbols.charAt(character, character + 1);
    }
}
else if ((whichSym === false) && (whichLow === false) && (whichUpp === false)&& (whichNum === true)) {
    for (i = 0; i < passwordLength; i++) { let character = Math.floor(Math.random() * numbers.length);
        npassword += numbers.charAt(character, character + 1);
    }
}
else if ((whichSym === false) && (whichNum === true) && (whichLow === true) && (whichUpp === true)) {
    for (i = 0; i < passwordLength; i++) { let character = Math.floor(Math.random() * nlu.length);
        npassword += nlu.charAt(character, character + 1);
    }
}
else if ((whichUpp === false) && (whichNum === true) && (whichLow === false) && (whichSym === true)) {
    for (i = 0; i < passwordLength; i++) { let character = Math.floor(Math.random() * sn.length);
        npassword += sn.charAt(character, character + 1);
    }
}
else if ((whichSym === false) && (whichNum === false) && (whichLow === true) && (whichUpp === true)) {
    for (i = 0; i < passwordLength; i++) { let character = Math.floor(Math.random() * lu.length);
        npassword += lu.charAt(character, character + 1);
    }
}

else if ((whichSym === true) && (whichNum === true) && (whichLow === true) && (whichUpp === false)) {
    for (i = 0; i < passwordLength; i++) { let character = Math.floor(Math.random() * snl.length);
        npassword += snl.charAt(character, character + 1);
    }
}

else if ((whichSym === false) &&(whichLow === true) && (whichUpp === false)&&(whichNum === true)) {
    for (i = 0; i < passwordLength; i++) { let character = Math.floor(Math.random() * nl.length);
        npassword += nl.charAt(character, character + 1);
    }
}
else if ((whichUpp === true) && (whichSym === true) && (whichNum === true) && (whichLow=== false)) {
    for (i = 0; i < passwordLength; i++) { let character = Math.floor(Math.random() * snu.length);
                npassword+= snu.charAt(character, character + 1);
    }
}
else if ((whichSym === true) && (whichNum === false) && (whichLow === true) && (whichUpp === true)) {
    for (i = 0; i < passwordLength; i++) { let character = Math.floor(Math.random() * slu.length);
        npassword += slu.charAt(character, character + 1);
    }
}
else if ((whichSym === true) && (whichNum === false) && (whichUpp === true)&& (whichLow === false)) {
    for (i = 0; i < passwordLength; i++) {let character = Math.floor(Math.random() * su.length);
        npassword += su.charAt(character, character + 1);
    }
}
else if ((whichSym === true) && (whichNum === false) && (whichLow === true) && (whichUpp === false)) {
    for (i = 0; i < passwordLength; i++) { let character = Math.floor(Math.random() * sl.length);
        npassword += sl.charAt(character, character + 1);
    }
}
else if ((whichUpp === true) && (whichSym === false) && (whichNum=== true) && (whichLow === false)) {
    for (i = 0; i < passwordLength; i++) { let character = Math.floor(Math.random() * un.length);
        npassword += un.charAt(character, character + 1);
    }
}

let nlu = lowercase + uppercase + numbers;
let sn = symbols + numbers;     
let lu= uppercase + lowercase;
let snl= symbols + numbers + lowercase;
let nl = lowercase + numbers;
let slu= uppercase + symbols + lowercase;
let su = uppercase + symbols; 
let snu= symbols + numbers + uppercase;
let sl = symbols + lowercase;
let un = uppercase + numbers;

}






//D. We need place to put password so user can see it. 