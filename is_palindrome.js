var isPalindrome = function(x) {
  let reversed = x.toString().split('').reverse().join('');
  return(x.toString() === reversed)
}

// console.log(isPalindrome(121));

var isPalindrome2 = function(x) {
  let reversedStr = '';
  let str = x.toString();
  for(let i of str) {
    reversedStr = i+reversedStr;
  }
  console.log(reversedStr);
  return(x.toString() === reversedStr)
}

// console.log(isPalindrome2(141));

var reverseString = function(s) {
  let left = 0;
  let right = s.length-1;

  while(left < right) {
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;

      left++;
      right--;
  }
  return s;
};
// console.log(reverseString(['h','e','l','l','o']));

var reverseInteger = function(n) {
  let    = 0;

  while(n != 0) {
    reversed = (reversed * 10) + n % 10;
    n = parseInt(n/10);
    console.log(reversed, n);
  }

  return reversed > Math.pow(2, 31) || reversed < Math.pow(-2, 31) ? 0 : reversed;
}
// console.log(reverseInteger(125))

var isPalindrome = function(s) {
  s = s.replace(/[^a-z0-9]/gi, "");
  let leftIndex = 0;
  let rightIndex = s.length-1;

  while( leftIndex < rightIndex) {
      if(s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()) return false;
      leftIndex++;
      rightIndex--;
  }
  return true;
};
isPalindrome("A man, a plan, a canal: Panama");