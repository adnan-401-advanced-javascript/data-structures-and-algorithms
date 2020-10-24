/* eslint-disable no-undef */
const leftJoin = require("../left-join.js");
const Hashtable = require("../../../Data-Structures/HashTable/hashtable.js");

const table1 = new Hashtable(15);
table1.add("fond", "enamored");
table1.add("wrath", "anger");
table1.add("diligent", "employed");
table1.add("outfit", "garb");
table1.add("guide", "usher");

const table2 = new Hashtable(15);
table2.add("fond", "averse");
table2.add("wrath", "delight");
table2.add("diligent", "idle");
table2.add("guide", "follow");
table2.add("flow", "jam");

const resultHash = leftJoin(table1, table2);

const expectedResults = [];

resultHash.entries.forEach((entry) => {
  const key = (Object.keys(entry.head.value)[0]);
  expectedResults.push([key, ...resultHash.get(key)]);
});

const actualResults = [
  ["wrath", "anger", "delight"],
  ["diligent", "employed", "idle"],
  ["outfit", "garb", null],
  ["guide", "usher", "follow"],
  ["fond", "enamored", "averse"],
];

describe("HashTable module", () => {
  it("test an empty HashTable", () => {
    expect(expectedResults).toStrictEqual(actualResults);
  });
});
