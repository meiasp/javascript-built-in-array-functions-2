/* function isPalindrome(word) {
  return word.trim() === word.trim().split("").reverse().join("")
} */

const isPalindrome = (word) => word.trim() === word.trim().split("").reverse().join("")

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false