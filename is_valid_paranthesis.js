var isValid = function(s) {

  // store left and right paranthesis in an object
  var map = {
      '(': ')',
      '{': '}',
      '[': ']'
  };
  let stack = [];
  for( let i = 0; i < s.length; i++) {
      if(map[s[i]]) {
          stack.push(s[i]);
      } else {
          const leftBracket = stack.pop();
          const correctBracket = map[leftBracket];
          if(s[i] !== correctBracket) return false;
      }
  }

  return stack.length === 0;

};