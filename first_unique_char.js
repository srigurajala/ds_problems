// leetcode => { l: 1, e: 3, t: 1, c: 1, o: 1, d: 1}, return first unique char idx i.e 0 ('l')
var firstUniqChar = function(s) {
  //build hash map with counter
  let map = {};
  for ( let i of s ) {
      if(!map[i]) {
          map[i] = 1;
      } else {
          map[i]++;
      }
  }
  for(let i = 0; i < s.length; i++) {
      let char = s[i];
      if(map[char] === 1) {
          return i;
      }
  }

  return -1;

};
console.log(firstUniqChar('leetcode'));