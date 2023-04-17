const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let node = rootNode => {
      if(!rootNode) {
        this.rootNode = new Node(data);

      } else if(data > rootNode.data) {
        if(!rootNode.right) rootNode.right = new Node(data);
        else node(rootNode.right);

      } else if(data < rootNode.data) {
        if(!rootNode.left) rootNode.left = new Node(data);
        else node(rootNode.left);
      }
    }
    return node(this.rootNode);
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if(!this.rootNode) return null;
    let node = this.rootNode;

    if(node.data === data) return node;
    else {
      while(node){
        if(node.data === data) {
          return node;
        } else {
          if(data > node.data) node = node.right;
          else node = node.left;
        }}
    }

    return null;
  }

  remove(data) {
    this.rootNode = removeThisNode(this.rootNode, data);
    function removeThisNode(node, data){

      if(!node) return null;

      else if(data > node.data){
        node.right = removeThisNode(node.right, data);
        return node;
      }

      else if(data < node.data){
        node.left = removeThisNode(node.left, data);
        return node;
      }

      else{
        if(!node.left && !node.right) return null;
        if(!node.left) {node = node.right; return node;}
        if(!node.right) {node = node.left; return node;}

        let min = node.right;
        while (min.left) {min = min.left;}
        node.data = min.data;
        node.right = removeThisNode(node.right, min.data);
        return node;
      }
    }
  }

  min() {
    if(!this.rootNode) return null;

    let node = this.rootNode;
    while(node.left) node = node.left;
    return node.data;
  }

  max() {
    if(!this.rootNode) return null;

    let node = this.rootNode;
    while(node.right) node = node.right;
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};