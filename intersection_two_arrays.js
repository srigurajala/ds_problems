var intersectionUnique = function(arr1, arr2) {
  const unique = new Set(arr1);
  return [...unique].filter(item => arr2.indexOf(item) !== -1)
}
// console.log(intersectionUnique([1,2,2,1,3,4,5], [2,3,3,5]));

var intersection = function(arr1, arr2) {
  let obj = {};
  let result = [];

  for( let i of arr1) {
    if(!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }
  // console.log(obj);
  // { '1': 2, '2': 2 }

  for( let i of arr2) {
    if(obj[i] > 0) {
      result.push(i);
      obj[i]--;
    }
  }
  return result;
}
console.log(intersection([1,2,2,1], [2,2]));
