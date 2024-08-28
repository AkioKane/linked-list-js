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
    this.sizeNode = 0;
  }

  append(value) {
    const newNode = new Node(value);
    console.log(newNode);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.sizeNode++;

      return this;
    }

    this.tail.nextNode = newNode;
    this.tail = newNode;
    this.sizeNode++;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);

    this.head = newNode;
    this.sizeNode++;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  size() {
    return this.sizeNode;
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

    while(current.nextNode !== this.tail) {
      current = current.nextNode;
    }
    current.nextNode = null;
    this.tail = null;
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

list.print();

list.pop();
list.print();