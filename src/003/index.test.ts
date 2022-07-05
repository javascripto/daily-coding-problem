import { BinaryTreeNode } from '.';
import { serialize, deserialize } from './index';

describe('BinaryTreeNode serialization/deserialization', () => {
  it('should serialize a binary tree node', () => {
    const node = new BinaryTreeNode(
      'root',
      new BinaryTreeNode('left', new BinaryTreeNode('left.left')),
      new BinaryTreeNode('right')
    );

    const serialized = serialize(node);
    const deserialized = deserialize(serialized);

    expect(serialized).toBe(
      `{"val":"root","left":{"val":"left","left":{"val":"left.left","left":null,"right":null},"right":null},"right":{"val":"right","left":null,"right":null}}`
    );
    expect(deserialized).toEqual(node);
  });
});
