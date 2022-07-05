#!/usr/bin/env python3
import json
from operator import itemgetter


class Node:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right


def serialize(node: Node) -> str :
  return json.dumps(node, default=lambda o: o.__dict__)


def deserialize(string: str) -> Node:
  val, left, right = itemgetter('val', 'left', 'right')(json.loads(string))
  left = None if left is None else deserialize(json.dumps(left))
  right = None if right is None else deserialize(json.dumps(right))
  return Node(val, left, right)


def main():
  node = Node('root', Node('left', Node('left.left')), Node('right'))
  assert deserialize(serialize(node)).left.left.val == 'left.left'


if __name__ == '__main__':
  main()