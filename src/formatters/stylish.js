import _ from 'lodash';

const indent = (depth) => ' '.repeat(depth * 2);
const renderValue = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const entries = Object.keys(value).map((key) => `${indent(depth + 2)}${key}: ${value[key]}`);
  return ['{', ...entries, `${indent(depth)}}`].join('\n');
};
const renderKeyValue = (key, value, depth, sign) => (`${indent(depth + 1)}${sign} ${key}: ${renderValue(value, depth + 2)}`);
const mapping = {
  added: ({ key, value }, depth) => renderKeyValue(key, value, depth, '+'),
  removed: ({ key, value }, depth) => renderKeyValue(key, value, depth, '-'),
  unchanged: ({ key, value }, depth) => renderKeyValue(key, value, depth, ' '),
  changed: ({ key, oldValue, newValue }, depth) => [`${renderKeyValue(key, newValue, depth, '+')}`, `${renderKeyValue(key, oldValue, depth, '-')}`],
  nested: ({ key, children }, depth, render) => `${indent(depth + 2)}${key}: {\n${render(children, depth + 2)}\n${indent(depth + 2)}}`,
};
const render = (diff, depth) => diff.map((node) => mapping[node.type](node, depth, render));
export default (diff) => `{\n${_.flattenDeep(render(diff, 0))}\n}`.split(',').join('\n');
