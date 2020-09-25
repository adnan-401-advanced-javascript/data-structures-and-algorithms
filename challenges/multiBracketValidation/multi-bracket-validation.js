/* eslint-disable consistent-return */
const Stack = require("../../Data-Structures/stacksAndQueues/stacks-and-queues").stack;

/**
 * [exports description]
 * @method vaidateBrackets
 * @param  {string} str
 * @return {boolean}
 */

module.exports = (str) => {
  const stack = new Stack();
  const openingBrackets = ["[", "(", "{"];
  const closedBrackets = ["]", ")", "}"];
  str.split("").forEach((char) => {
    if (openingBrackets.indexOf(char) !== -1) {
      stack.push(char);
    } else if (closedBrackets.indexOf(char) !== -1) {
      const popedBracket = stack.pop();
      const openedEquivalent = openingBrackets[closedBrackets.indexOf(char)];
      if (popedBracket !== openedEquivalent) return false;
    }
  });
  return stack.isEmpty();
};
