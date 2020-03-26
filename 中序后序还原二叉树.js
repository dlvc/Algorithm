const zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];
const hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];

/**
 *              a
 *      c               b
 *   f      g       d       e
 *
 * 后序遍历：
 */

function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function f1 (zhong, hou) {
    if (zhong == null || zhong.length === 0 || hou == null || hou.length === 0 || zhong.length !== hou.length) return null;

    const houLen = hou.length;
    const zhongLen = zhong.length;
    const root = new Node(hou[houLen - 1]);

    const i = zhong.indexOf(root.value);
    const houLeft = hou.slice(0, i);
    const houRight = hou.slice(i, houLen - 1);
    const zhongLeft = zhong.slice(0, i);
    const zhongRight = zhong.slice(i + 1, zhongLen);

    root.left = f1(zhongLeft, houLeft);
    root.right = f1(zhongRight, houRight);

    return root;
}

console.log(f1(zhong, hou));