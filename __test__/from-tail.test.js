const LinkedList = require("../linked-list");
const { fromTail, withCounter } = require("../from-tail");

describe("Creates a linked list", () => {
  it("Create a linked list with head data of 1", () => {
    const list = new LinkedList();
    list.insertHead(1);

    expect(list.head.data).toBe(1);
  });
});

describe("From Tail of linkedlist", () => {
  it("Should step from tail of linkedlist", () => {
    const list = new LinkedList();
    list.insertHead(1);
    list.insertHead(2);
    list.insertHead(3);
    list.insertHead(4);
    list.insertHead(5);

    expect(fromTail(list, 2).data).toBe(3);
  });
});

describe("Failed attemp", () => {
  it("position is greater than length", () => {
    const list = new LinkedList();
    list.insertHead(1);
    list.insertHead(2);
    list.insertHead(3);
    list.insertHead(4);
    list.insertHead(5);

    expect(fromTail(list, 8)).toBe(null);
  });
});
describe("With counter", () => {
  it("should step from tail", () => {
    const list = new LinkedList();
    list.insertHead(1);
    list.insertHead(2);
    list.insertHead(3);
    list.insertHead(4);
    list.insertHead(5);

    expect(withCounter(list, 2).data).toBe(3);
  });
});
describe("With counter random test", () => {
  it("should step from tail", () => {
    const list = new LinkedList();
    list.insertHead(1);
    list.insertHead(2);
    list.insertHead(3);
    list.insertHead(4);
    list.insertHead(5);

    expect(withCounter(list, 1).data).toBe(4);
    expect(withCounter(list, 4).data).toBe(1);
  });
});

// This is a failing test update function to make this pass.
describe("With counter random test", () => {
  it("should step from tail", () => {
    const list = new LinkedList();
    for (let i = 0; i < 10; i++) {
      list.insertHead(i * 3);
    }

    expect(withCounter(list, 0).data).toBe(27);
  });
});
