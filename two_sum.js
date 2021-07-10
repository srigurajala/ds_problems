// approach 1 -> iteration time complexity o(n^2)
const twoSumIteration = (arr, target) => {
  // first iteration
  // console.log(arr.length);
  for(let i=0; i < arr.length; i++) {
  // index 0 -> all elements
    //second iteration
    for(let j=i+1; j < arr.length; j++) {
    // index 1 to remaining elements
      // compare both values and return the index
      if(arr[i] + arr[j] === target) {
        return [i, j]
      }
    }
  }
  // return not found
  return [-1, -1];
}

// approach 1 -> use hash map time complexity o(n)
// { '2': 1, '7': 0, '-2': 2, '-6': 3 }
const twoSumHashMap = (arr, target) => {
  var hashObj = {};
  for(let i=0; i < arr.length; i++) {
    if(hashObj[arr[i]] >= 0) {
      return [hashObj[arr[i]], i];
    }
    const numToFind = target - arr[i];
    hashObj[numToFind] = i;
  }
  // console.log(hashObj);
  // return [-1, -1];
}

const values = [2,7,11,15];
console.log(twoSumHashMap(values, 9));