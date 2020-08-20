import _ from 'lodash';

const indent = (depth) => '  '.repeat(depth * 2);
const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const entries = Object.keys(value).map((key) => `${indent(depth + 1)}${key}: ${stringify(value[key], depth + 1)}`);
  return ['{', ...entries, `${indent(depth)}}`].join('\n');
};
const stringifyNode = (sign, key, value, depth) => `${indent(depth)}  ${sign} ${key}: ${stringify(value, depth + 1)}`;
const mapping = {
  added: (node, nodeDepth) => stringifyNode('+', node.key, node.value, nodeDepth),
  removed: (node, nodeDepth) => stringifyNode('-', node.key, node.value, nodeDepth),
  unchanged: (node, nodeDepth) => stringifyNode(' ', node.key, node.value, nodeDepth),
  changed: (node, nodeDepth) => [
    stringifyNode('+', node.key, node.newValue, nodeDepth),
    stringifyNode('-', node.key, node.oldValue, nodeDepth),
  ],
  nested: (node, nodeDepth, render) => stringifyNode(' ', node.key, render(node.children, nodeDepth + 1), nodeDepth),
};
const render = (nodes) => {
  const inner = (innerNodes, depth) => {
    const result = innerNodes.flatMap((node) => mapping[node.type](node, depth, inner));
    return ['{', ...result, `${indent(depth)}}`].join('\n');
  };
  return inner(nodes, 0);
};
export default render;
