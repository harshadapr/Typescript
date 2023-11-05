// dfs-binary-tree.ts

class TreeNode<T> {
  constructor(public value: T, public left: TreeNode<T> | null = null, public right: TreeNode<T> | null = null) {}
}

function dfsBinaryTree(node: TreeNode<number> | null): number[] {
  if (!node) {
    return [];
  }

  const result: number[] = [];
  result.push(node.value);
  result.push(...dfsBinaryTree(node.left));
  result.push(...dfsBinaryTree(node.right));

  return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const dfsResult = dfsBinaryTree(root);
console.log(dfsResult); // [1, 2, 4, 5, 3]
