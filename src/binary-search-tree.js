const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.nodes = [];
  }

  root() {
    if (this.nodes.length) {
      return { data: this.nodes[0] };
    } else {
      return null;
    }
  }

  add(data) {
    this.nodes.push(data);
  }

  has(data) {
    return this.nodes.includes(data);
  }

  find(data) {
    if (this.nodes.includes(data)) {
      return { data: data };
    } else {
      return null;
    }
  }

  remove(data) {
    let ind = this.nodes.indexOf(data);
    return this.nodes.splice(ind, 1);
  }

  min() {
    let min;
    if (!this.nodes.length) {
      min = null;
    } else {
      min = this.nodes[0];
    }

    for (let i = 1; i < this.nodes.length; i++) {
      if (this.nodes[i] < min) {
        min = this.nodes[i];
      }
    }

    return min;
  }

  max() {
    let max;
    if (!this.nodes.length) {
      max = null;
    } else {
      max = this.nodes[0];
    }

    for (let i = 1; i < this.nodes.length; i++) {
      if (this.nodes[i] > max) {
        max = this.nodes[i];
      }
    }

    return max;
  }
}

module.exports = {
  BinarySearchTree,
};
