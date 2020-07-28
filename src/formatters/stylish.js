import pkg from 'lodash';

const { isObject } = pkg;

const whiteSpace = '  ';
const stringify = (data, indent) => {
  if (!isObject(data)) {
    return data;
  }
  return Object.entries(data).map(([key, value]) => `{\n${indent}${whiteSpace.repeat(3)}${key}: ${value}\n${indent}${whiteSpace}}`);
};
const stylish = (items) => {
  const makeString = (data, indentCounter) => {
    const indent = whiteSpace.repeat(indentCounter);
    return data.map(({
      type, name, newValue, oldValue,
    }) => {
      switch (type) {
        case 'added':
          return `${indent}+ ${name}: ${stringify(newValue, indent)}`;
        case 'removed':
          return `${indent}- ${name}: ${stringify(oldValue, indent)}`;
        case 'changed':
          return `${indent}+ ${name}: ${stringify(newValue, indent)}\n${indent}- ${name}: ${stringify(oldValue, indent)}`;
        case 'unchanged':
          return `${indent}  ${name}: ${stringify(oldValue, indent)}`;
        case 'nested':
          return `${indent}  ${name}: {\n${makeString(newValue, indentCounter + 2)}\n${indent}${whiteSpace}}`;
        default:
          throw new Error(`Unknown type: ${type}`);
      }
    }).join('\n');
  };
  return `{\n${makeString(items, 1)}\n}`;
};
export default stylish;

