/* eslint-disable consistent-return */
const Queue = require("../../Data-Structures/stacksAndQueues/stacks-and-queues").queue;

class AnimalShelter {
  /**
   * [AnimalShelter]
   * @class AnimalShelter
   */
  constructor() {
    this.catQueue = new Queue();
    this.dogQueue = new Queue();
  }

  /**
   * [enqueue]
   * @method enqueue
   * @param  {object} animal
   */
  enqueue(animal) {
    if (animal.type !== "cat" && animal.type !== "dog") {
      throw new Error("animal must be cat or dog");
    } else if (animal.type === "cat") {
      this.catQueue.enqueue(animal);
    } else {
      this.dogQueue.enqueue(animal);
    }
  }

  /**
   * [dequeue]
   * @method dequeue
   * @param  {pref} pref "cat"||"dog"
   * @return {object}
   */
  dequeue(pref) {
    if (pref !== "cat" && pref !== "dog") {
      throw new Error("pref must be cat or dog");
    } else if (pref === "cat") {
      return this.catQueue.dequeue();
    } else {
      return this.dogQueue.dequeue();
    }
  }
}

module.exports = AnimalShelter;
