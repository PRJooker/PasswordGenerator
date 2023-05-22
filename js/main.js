const showPassword=document.getElementById("showPassword");
const checkSpecialCharacter = document.getElementById("checkSpecialCharacter");
const checkAlphanumeric=document.getElementById("checkAlphanumeric");
const numberCharacters=document.getElementById("numberCharacters");
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '+', '-', '?', '_'];

showPassword.style.display="none";
function generatePassword() {
  const getnumberCharacters = parseInt(numberCharacters.value);
  if (isNaN(getnumberCharacters) || getnumberCharacters <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong please  type a number greater than zero!',
      
    })
    return;
  }

  let combinedArray = lowercaseLetters.concat(uppercaseLetters);
  if (checkAlphanumeric.checked) {
    combinedArray = combinedArray.concat(numbers);
  }
  if (checkSpecialCharacter.checked) {
    combinedArray = combinedArray.concat(specialCharacters);
  }

  let randomString = '';
  for (let i = 0; i < getnumberCharacters; i++) {
    const randomIndex = Math.floor(Math.random() * combinedArray.length);
    randomString += combinedArray[randomIndex];
  }

  document.getElementById("newPassword").innerText = randomString;
  numberCharacters.value = "";
  checkAlphanumeric.checked = false;
  checkSpecialCharacter.checked = false;
  showPassword.style.display="block";
}






