const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
constructor(){
  this.bones = null;
}
  root() {
    return this.bones;
    
  }

  add(data) {
    this.bones = addWithin(this.bones, data);

    function addWithin(node, data){
      if(!node){
        return new Node(data);
      }
      if(node.data === data){
        return node;
      }
      if(data<node.data){
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }
      return node
    }
    
  }

  has(data) {
    return searchWithin(this.bones, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }

  find(data) {
    return searchFind(this.bones, data);
    function searchFind(node, value) {
        if (!node) {
            return null;
        }
        if (node.data === value) {
            return node;
        }
        return value > node.data ? searchFind(node.right, value) 
        : searchFind(node.left, value);
    }
    
  }

  remove(data) {
    this.bones = removeNode(this.bones, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {

        if (!node.left && !node.right) {

          return null;
        }

        if (!node.left) {

          node = node.right;
          return node;
        }

        if (!node.right) {

          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
    
  }

  min() {
    if (!this.bones) {
      return;
    }

    let node = this.bones;
    while (node.left) {
      node = node.left;
    }

    return node.data;
    
  }

  max() {
    if (!this.bones) {
      return;
    }

    let node = this.bones;
    while (node.right) {
      node = node.right;
    }

    return node.data;
    
  }

}

module.exports = {
  BinarySearchTree
};