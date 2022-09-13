// Assignment Code
var generateBtn = document.querySelector("#generate");

// const passLetters = 'abcdefghijklmnopqrstuvwxyz';
const passLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', ];
const passLettersCaps = passLetters.map(x => x.toUpperCase());
console.log(passLetters);
console.log(passLettersCaps);
const passNumbs = ['1','2','3','4','5','6','7','8','9','0',]
const passSymbs = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','-','_','=','+',';',':','<','>',',','.','/','?',`'`,`"`,];
const charArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = () => {
  let passArray = [];
  return passArray.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
