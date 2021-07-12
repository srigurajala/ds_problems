
 var isAnagram = function(s, t) {
  if( s.length !== t.length ) return false;

    let map = {};

    for( let i of s) {
        if(!map[i]) {
            map[i] = 1;
        } else {
            map[i]++;
        }
    }

    console.log(map);

    for( let j of t) {
        if(!map[j]) {
            return false;
        }
        if(map[j] < 1) {
            return false;
        }
        map[j]--;
    }
    return true;
};