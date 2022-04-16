function Tree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const a = new Tree('a');
const b = new Tree('b');
const c = new Tree('c');
const d = new Tree('d');
const e = new Tree('e');
const f = new Tree('f');
const g = new Tree('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

function deepSearch(root, target) {
    if (root == null) return false;
    if (root.value == target) return true;
    const left = deepSearch(root.left, target);
    const right = deepSearch(root.right, target);
    return left || right;
} 

console.log(deepSearch(a, 'x'))