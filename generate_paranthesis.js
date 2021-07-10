const generateParenthesis = function(n) {
    const res = [];
    const gen = function(s='',left=0,right=0) {
        if (right + left === 2 * n) {
          res.push(s);
          return;
        }
        if (left < n) {
          gen(s + '(', left + 1, right);
        }
        if (right < left) {
          gen(s + ')', left, right + 1);
        }
    }
    gen();
    return res;
};
console.log(generateParenthesis(1));