const qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
const zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

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

function f1 (qian, zhong) {
    if (qian == null || qian.length === 0 || zhong == null || zhong.length === 0 || qian.length !== zhong.length) return null;
    const root = new Node(qian[0]);
    // 找到根节点在中序遍历中的位置
    const i = zhong.indexOf(root.value);
    const qianLeft = qian.slice(1, i + 1);
    const qianRight = qian.slice(i + 1, qian.length);
    const zhongLeft = zhong.slice(0, i);
    const zhongRight = zhong.slice(i + 1, zhong.length);

    root.left = f1(qianLeft, zhongLeft);
    root.right = f1(qianRight, zhongRight);

    return root;
}

console.log(f1(qian, zhong));