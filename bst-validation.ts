// bst-validation.ts

class TreeNode {
  constructor(public value: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

function isValidBST(root: TreeNode | null, min: number | null = null, max: number | null = null): boolean {
  if (!root) {
    return true;
  }

  if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) {
    return false;
  }

  return (
    isValidBST(root.left, min, root.value) &&
    isValidBST(root.right, root.value, max)
  );
}

const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

const isValid = isValidBST(root);
console.log(isValid); // true
