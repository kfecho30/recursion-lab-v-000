// Code your solution here!

function printString(myString) {
  console.log(myString[0])

  if(myString.length > 1) {
    let sub = myString.substring(1);
    printString(sub)
  } else {
    return true;
  }
}
