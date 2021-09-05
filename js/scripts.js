//Password validator app
//Accepts 2 arguments: password and username
//Passord must:
// - be at least 8 characters 
// - cannot contain speces
// - cannot cintain username
// If all arguments are met, return true.
//Otherwise: false

//isValildPassword('89Fjj1nms', 'dogLuvr'); //true
//isValidPassword('dogLuvr123', 'dogLuvr); //falseType

// function isValidPassword(password, username) {
//   if(password.length < 8){
//     return false;
//   }
//   if(password.indexOf(' ') !== -1){
//     return false;
//   }
//   if(password.indexOf(username) !== -1){
//     return false;
//   }
//   return true;
// }

function isValidPassword(password, username) {
  const tooShort = password.length < 8;
  const hasSpaces = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  if (tooShort || hasSpaces || tooSimilar){
    return false;
  }
    else {
    return true;
    }
  }
  
