
// Assignment Code
const generateBtn = document.querySelector('#generate');
const inputCont = document.querySelector('#input-cont');
const charLngth = document.querySelector('#char-length');
const numbChk = document.querySelector('#pass-numbs');
const letterLowChk = document.querySelector('#pass-lows');
const letterCapChk = document.querySelector('#pass-caps');
const symbolChk = document.querySelector('#pass-symbs');

const passLetters = 'abcdefghijklmnopqrstuvwxyz';
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
  return passArray.join('');
}

charLngth.addEventListener('change', (event) => {
  var lengthVal = event.target.value;
  if (lengthVal > 128) {
    event.target.value = 128;
  } else if (lengthVal < 8) {
    event.target.value = 8;
  }  
  charLngth.setAttribute('value', lengthVal)
  console.log(charLngth.value);
});

const addToArray = (x, y) => {
  let me = charArray.indexOf(x);
  switch(y.hasAttribute('checked')){
    case true:
      charArray.splice(me, 1);
      y.removeAttribute('checked');
      console.log(charArray);
      break;
    case false:
      charArray.push(x);
      y.setAttribute('checked', true);
      console.log(charArray);
      break;
  }
};

letterLowChk.addEventListener('change', () => {addToArray(passLetters, letterLowChk)});
letterCapChk.addEventListener('change', () => {addToArray(passLettersCaps, letterCapChk)});
numbChk.addEventListener('change', () => {addToArray(passNumbs, numbChk)});
symbolChk.addEventListener('change', () => { addToArray(passSymbs, symbolChk)});

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
