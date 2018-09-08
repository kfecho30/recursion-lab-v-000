function printString(myString) {
  console.log(myString[0])

  if(myString.length > 1) {
    let sub = myString.substring(1);
    printString(sub)
  } else {
    return true;
  }
}


function reverseString(str) {
  if (str.length < 2) {
    return str;
  } else {
    return reverseString(str.substring(1) + str[0])
  }
}

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  } else if (str[str.length-1] === str[0]){
    return isPalindrome(str.substring(1))
  } else {
    return false;
  }
}
