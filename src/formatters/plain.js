const stringify = (value) => {
  if (typeof value === 'object') return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return value;
};
const getTypeTree = {
  unchanged: () => null,
  added: ({ key, value }, path) => (`Property '${path}${key}' was added with value: ${stringify(value)}`),
  removed: ({ key }, path) => `Property '${path}${key}' was removed`,
  changed: ({ key, oldValue, newValue }, path) => (`Property '${path}${key}' was changed from ${stringify(oldValue)} to ${stringify(newValue)}`),
  nested: ({ key, children }, path, render) => render(children, `${path}${key}.`),
};
const render = (diff, path) => diff.map((node) => getTypeTree[node.type](node, path, render)).filter((node) => node).join('\n');
export default (diff) => render(diff, '');
