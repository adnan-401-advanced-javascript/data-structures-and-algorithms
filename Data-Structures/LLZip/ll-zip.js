const LinkedList = require("../LinkedList/linked-list");

/**
   * [zipLists to concatenate two lists]
   * @method zipLists
   * @param  {LinkedList} list1
   * @param  {LinkedList} list2
   * @return {LinkedList}
   */

function zipLists(list1, list2) {
  const zippedList = new LinkedList();

  let current = list1.head;
  let current2 = list2.head;

  while (current || current2) {
    if (current) {
      zippedList.append(current.value);
      current = current.next;
    }

    if (current2) {
      zippedList.append(current2.value);
      current2 = current2.next;
    }
  }
  return zippedList;
}

module.exports = zipLists;
