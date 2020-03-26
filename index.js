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

function f1 (root, target) {
    const rootList = Object.prototype.toString.call(root) === "[object Array]" ? root : [root];
    if (rootList == null || rootList.length === 0) return false;
    let childList = [];
    for (const v of rootList) {
        if (v != null && v.value === target) return true;
        else {
            childList.push(v.left, v.right);
        }
    }
    return f1(childList, target);
}

console.log(f1(A, 'F'));