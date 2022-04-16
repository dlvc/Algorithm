function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');
const G = new Node('G');

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

/**
 *              A
 *      B               C
 * 
 * D        E       F       G
 *
 */

function deepSearch (root, target) {
    if (root == null) return false;
    if (root.value === target) return true;
    const left = deepSearch(root.left, target);
    const right = deepSearch(root.right, target);

    return left || right;
}

console.log(deepSearch(A, 'F'));