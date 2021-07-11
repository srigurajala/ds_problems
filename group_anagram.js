var groupAnagrams = function(strs) {

  //hash map
  let obj = {}

  for(let i of strs) {
      // console.log(i)
      // convert each str items into an array, sort and convert back to string
      let key = i.split('').sort().join('');
      // add new category and value
      if(!obj[key]) {
          obj[key] = [i];
      } else {
          // push new values into the same category
          obj[key].push(i);
      }
  }
  console.log(obj);
  return Object.values(obj);

};

const strs = ["eat","tea","tan","ate","nat","bat"];
groupAnagrams(strs)