const milili = [10, 25, 4];

function myArr(mili) {
  "use strict";
  for (let i = 0; i < mili.length; i++) {
    milili[i] = mili[i];
  }
  return milili;
}

const mili = [4, 10 , 25];
console.log(myArr(mili));
module.exports = myArr;
