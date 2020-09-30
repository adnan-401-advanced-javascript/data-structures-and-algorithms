/* eslint-disable no-undef */

const AnimalShelter = require("../fifo-animal-shelter.js");

describe("Queue Tests", () => {
  it("Can successfully push on a cat queue", () => {
    const shelter = new AnimalShelter();
    shelter.enqueue({ type: "cat" });
    expect(shelter.dequeue("cat").type).toBe("cat");
  });

  it("Can successfully push on a dog queue", () => {
    const shelter = new AnimalShelter();
    shelter.enqueue({ type: "dog" });
    expect(shelter.dequeue("dog").type).toBe("dog");
  });

  it("can't push a queue", () => {
    const shelter = new AnimalShelter();
    try {
      shelter.enqueue("test");
    } catch (e) {
      expect(e.message).toBe("animal must be cat or dog");
    }
  });

  it("can't dequeue a queue", () => {
    const shelter = new AnimalShelter();
    try {
      shelter.dequeue("test");
    } catch (e) {
      expect(e.message).toBe("pref must be cat or dog");
    }
  });
});
