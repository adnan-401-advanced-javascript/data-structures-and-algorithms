/* eslint-disable consistent-return */
module.exports = function (str) {
  let result = true;
  const chars = new Set();

  str.split("").forEach((char) => {
    if (char !== " ") { // not-empty
      if (chars.has(char.toLocaleLowerCase())) {
        result = false;
        return result;
      }
      chars.add(char.toLowerCase());
    }
  });
  return result;
};
