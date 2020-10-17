/* eslint-disable no-undef */
const HashTable = require("../hashtable");

describe("HashTable module", () => {
  it("test an empty HashTable", () => {
    const myHash = new HashTable(1024);
    expect(myHash.entries[0]).toBe(undefined);
  });

  it("test non empty HashTable", () => {
    const myHash = new HashTable(1024);
    myHash.add("adnan", "123");
    expect(myHash.get("adnan")).toStrictEqual(["123"]);
  });

  it("test non empty HashTable with collision", () => {
    const myHash = new HashTable(1024);
    myHash.add("adnan", "adnan1");
    myHash.add("adnan", "adnan2");
    expect(myHash.get("adnan")).toStrictEqual(["adnan1", "adnan2"]);
  });

  it("test HashTable contains", () => {
    const myHash = new HashTable(1024);
    myHash.add("adnan", "adnan1");
    expect(myHash.contains("adnan")).toBeTruthy();
  });

  it("test HashTable hash", () => {
    const myHash = new HashTable(1024);
    expect(myHash.hash("adnan")).toBe(686);
  });
});
