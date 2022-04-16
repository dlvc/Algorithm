function Node(value) {
    this.value = value;
    this.next = null;
}

const a = new Node('1');
const b = new Node('2');
const c = new Node('3');
const d = new Node('4');
const e = new Node('5');
const f = new Node('6');
const g = new Node('7');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

function nizhi(root) {
    if (root.next.next == null) {
        root.next.next = root;
        return root.next;
    }else {
        const result = nizhi(root.next);
        root.next.next = root;
        root.next = null;
        return result;
    }
}

// nizhi(a);

function bianli(root) {
    if (root == null) {
        return ;
    }
    console.log(root.value);
    bianli(root.next);
}

bianli(nizhi(a));