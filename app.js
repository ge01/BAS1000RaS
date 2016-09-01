// Reverse the provided string.
function reverseString(str) {
  // Local variable
  var strReverse = [];

  // Turn string into an array
  // Reverse the array
  // Turn the array back into a string
  // Store the string in strReverse
  strReverse = str.split('').reverse().join('');

  // Transfers string back to original parameter
  str = strReverse;

  return str;
}

console.log(reverseString("hello"));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

// Factorialize a Number
function factorialize(num) {
  // Local variable
  var totalNum = 2;

  // Return the factorial of the provided integer.
  // factorialize(0) should return 1.
  if ( num === 0) {
    return num;
  } else {
    for (var n=3; n<=num; n++){
      totalNum *= n;
    }
    num = totalNum;
    return num;
  }
}

console.log(factorialize(5));
console.log(factorialize(0));
