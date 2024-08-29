class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  append(value) {
    let newNode = new Node(value);

    if (!this.tail || !this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.count++;

      return this;
    }

    this.tail.nextNode = newNode;
    this.tail = newNode;
    this.count++;
  }

  prepend(value) {
    let newNode = new Node(value, this.head);

    this.head = newNode;
    this.count++;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  size() {
    return this.count;
  }

  headInfo() {
    return this.head.value;
  }

  tailInfo() {
    return this.tail.value;
  }

  at(index) {
    let current = this.head;
    let value = 0;

    while (value < index) {
      current = current.nextNode;
      value++;
    }
    return current;
  }

  pop() {
    let current = this.head;

    if (!this.tail) {
      return null;
    }

    if (current === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    while (current.nextNode !== this.tail) {
      current = current.nextNode;
    }
    current.nextNode = null;
    this.tail = current;

    return this;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
  }

  print() {
    console.log(this.head);
    console.log(this.tail);
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
