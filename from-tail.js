function fromTail(linkedList, position) {
  let moveByOne = linkedList.head;
  let aheadByPosition = linkedList.head;

  while (position > 0) {
    if (aheadByPosition) {
      aheadByPosition = aheadByPosition.next;
      position--;
    } else {
      return null;
    }
  }

  while (aheadByPosition.next) {
    moveByOne = moveByOne.next;
    aheadByPosition = aheadByPosition.next;
  }

  return moveByOne;
}

function withCounter(linkedList, position) {
  let count = 0;
  let nextNode = linkedList.head;

  while (nextNode.next) {
    nextNode = nextNode.next;

    count++;
    if (count == position) {
      return nextNode;
    }
  }
  return null;
}

module.exports = { fromTail, withCounter };
