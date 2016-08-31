// Reverse the provided string.
function reverseString(str) {
  var strReverse = [];
  strReverse = str.split('').reverse().join('');
  console.log(strReverse);
  return str;
}

console.log(reverseString("hello"));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
