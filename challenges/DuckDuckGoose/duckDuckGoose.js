let i = 1;
let length = 0;
const result = [];
/**
 * [duckDuckGoose]
 * @method duckDuckGoose
 * @param  {Array}       [strings=[]] "list of strings"
 * @param  {number}      k            "number of rounds"
 * @return {array}                   "result"
 */
function duckDuckGoose(strings = [], k) {
  if (strings.length > length) length = strings.length;
  while (i < length) {
    i += 1;
    let newArray = [...strings];
    if (strings.length >= k) {
      console.log("remove", strings[k - 1]);
      result.push(strings[k - 1]);
      newArray = [...strings.slice(k, strings.length), ...strings.slice(0, k - 1)];
    } else {
      let index = (k - strings.length - 1);
      index = strings.length === 2 && index !== 0 ? index - 1 : index; // the last element cause a prolbem out of domain by 1
      console.log("remove,", strings[index]);
      result.push(strings[index]);
      newArray = [...strings.slice(index + 1, strings.length), ...strings.slice(0, index)];
    }
    console.log(newArray);
    duckDuckGoose(newArray, k);
  }
  return result;
}

module.exports = duckDuckGoose;
