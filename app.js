// Reverse the provided string.
function reverseString(str) {
  var strReverse = [];
  strReverse = str.split('').reverse().join('');
  str = strReverse;
  return str;
}

console.log(reverseString("hello"));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

// Factorialize a Number
function factorialize(num) {
  var totalNum = 2;
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
