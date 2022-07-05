export class BinaryTreeNode {
  constructor(
    public val: any,
    public left: BinaryTreeNode | null = null,
    public right: BinaryTreeNode | null = null
  ) {}
}

export function serialize(node: BinaryTreeNode): string {
  return JSON.stringify(node);
}

export function deserialize(string: string): BinaryTreeNode {
  const { val, left, right } = JSON.parse(string);
  return new BinaryTreeNode(
    val,
    left ? deserialize(JSON.stringify(left)) : null,
    right ? deserialize(JSON.stringify(right)) : null
  );
}

/* istanbul ignore next */
if (require.main === module) {
  const node = new BinaryTreeNode(
    'root',
    new BinaryTreeNode('left', new BinaryTreeNode('left.left')),
    new BinaryTreeNode('right')
  );
  console.assert(deserialize(serialize(node))?.left?.left?.val === 'left.left');
}
