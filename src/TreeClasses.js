export class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}
// Binary Search tree class
export class BinarySearchTree {
  constructor() {
    // root of a binary search tree
    this.root = null;
    this.preOrderList = [];
  }

  // returns root of the tree
  getRootNode() {
    return this.root;
  }

  insertNode(node, newNode) {
    // if the data is less than the node
    // data move left of the tree 
    if (newNode.data < node.data) {
      // if left is null insert node here
      if (node.left === null)
        node.left = newNode;
      else

        // if left is not null recur until 
        // null is found
        this.insertNode(node.left, newNode);
    }

    // if the data is more than the node
    // data move right of the tree 
    else {
      // if right is null insert node here
      if (node.right === null)
        node.right = newNode;
      else

        // if right is not null recur until 
        // null is found
        this.insertNode(node.right, newNode);
    }
  }

  insert(data) {
    // Creating a node and initialising 
    // with data 
    const newNode = new Node(data);

    // root is null then node will
    // be added to the tree and made root.
    if (this.root === null)
      this.root = newNode;
    else

      // find the correct position in the 
      // tree and add the node
      this.insertNode(this.root, newNode);
  }

  // Performs preorder traversal of a tree    
  preorder(node) {
    if (node !== null) {
      this.preOrderList.push(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

}