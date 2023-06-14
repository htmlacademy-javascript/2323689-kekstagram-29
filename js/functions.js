
// 1 задание
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}
// 2 задание
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(' ', '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return reversedStr === cleanedStr;
}


