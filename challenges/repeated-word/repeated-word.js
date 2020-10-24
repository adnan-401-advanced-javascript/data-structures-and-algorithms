module.exports = function (a) {
  const result = new Map();
  let max = 0;
  let maxRepeated = "";

  (a.match(/([^(,|\s)]+)/g)).forEach((key) => {
    if (result.has(key)) {
      const count = result.get(key) + 1;
      if (count > max) {
        max = count;
        maxRepeated = key;
      }
      result.set(key, count);
    } else {
      result.set(key, 1);
    }
  });
  console.log(result);
  return maxRepeated;
};
