

function isPalindrome(str: string): boolean {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

const inputString = "A man, a plan, a canal, Panama";
const isPalindromeResult = isPalindrome(inputString);
console.log(`Is "${inputString}" a palindrome? ${isPalindromeResult}`);
