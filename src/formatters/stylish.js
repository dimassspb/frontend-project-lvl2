import _ from 'lodash';

const renderValue = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const valueKeys = Object.keys(value).map((key) => `${' '.repeat(depth + 6)}${key}: ${value[key]}\n`);
  return `{\n${valueKeys.join('')}${' '.repeat(depth + 3)}}`;
};
const render = (keys, depth = 0) => {
  const buildString = keys.map(({
    type, key, value, oldValue, newValue, children,
  }) => {
    const renderKeyValue = (sign, value) => `${' '.repeat(depth)} ${sign} ${key}: ${renderValue(value, depth)}\n`;
    switch (type) {
      case 'added':
        return renderKeyValue('+', value);
      case 'removed':
        return renderKeyValue('-', value);
      case 'unchanged':
        return renderKeyValue(' ', value);
      case 'changed':
        return [renderKeyValue('+', newValue), renderKeyValue('-', oldValue)];
      case 'nested':
        return `${' '.repeat(depth + 3)}${key}: ${render(children, depth + 3)}\n`;
      default:
        throw new Error('Error!!! Unknown type.');
    }
  });
  return `{\n${_.flattenDeep(buildString).join('')}${' '.repeat(depth)}}`;
};

export default render;
