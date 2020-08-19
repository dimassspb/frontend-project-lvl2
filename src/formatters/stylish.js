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
const render = (nodes, depth = 0) => {
  const mapping = {
    added: (node, nodeDepth) => stringifyNode('+', node.key, node.value, nodeDepth),
    removed: (node, nodeDepth) => stringifyNode('-', node.key, node.value, nodeDepth),
    unchanged: (node, nodeDepth) => stringifyNode(' ', node.key, node.value, nodeDepth),
    changed: (node, nodeDepth) => [
      stringifyNode('+', node.key, node.newValue, nodeDepth),
      stringifyNode('-', node.key, node.oldValue, nodeDepth),
    ],
    nested: (node, nodeDepth) => stringifyNode(' ', node.key, render(node.children, nodeDepth + 1), nodeDepth),
  };
  const result = nodes.flatMap((node) => mapping[node.type](node, depth));
  return ['{', ...result, `${indent(depth)}}`].join('\n');
};
export default render;
