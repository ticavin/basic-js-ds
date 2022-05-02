const { ListNode } = require("../extensions/list-node.js");

class Queue {

  getUnderlyingList() {
    return this.hd;
  }

  enqueue(value) {
    if (!this.hd) this.hd = new ListNode(value);
    else {
      let current = this.hd;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
  }

  dequeue() {
    const value = this.hd.value;
    this.hd = this.hd.next;
    return value;
  }
}

module.exports = {
  Queue
};
