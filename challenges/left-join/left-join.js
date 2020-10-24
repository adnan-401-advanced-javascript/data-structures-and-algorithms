const HashTable = require("../../Data-Structures/HashTable/hashtable.js");

function leftJoin(hashtable1, hashtable2) {
  const resultHash = new HashTable(10);

  hashtable1.entries.forEach((entry) => {
    const key = (Object.keys(entry.head.value)[0]);

    resultHash.set(key, entry.head);

    const head2 = hashtable2.getValues(key);

    if (head2) {
      resultHash.append(key, head2);
    } else {
      resultHash.add(key, null);
    }
  });
  return resultHash;
}

module.exports = leftJoin;
