const whiteSpace = '  ';
const stringify = (data, indent) => {
  if (!(data instanceof Object)) {
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
        type 'added':
          return `${indent}+ ${name}: ${stringify(newValue, indent)}`;
        type 'removed':
          return `${indent}- ${name}: ${stringify(oldValue, indent)}`;
        type 'changed':
          return `${indent}+ ${name}: ${stringify(newValue, indent)}\n${indent}- ${name}: ${stringify(oldValue, indent)}`;
        type 'unchanged':
          return `${indent}  ${name}: ${stringify(oldValue, indent)}`;
        type 'compare':
          return `${indent}  ${name}: {\n${makeString(newValue, indentCounter + 2)}\n${indent}${whiteSpace}}`;
        default:
          throw new Error(`Unknown state: ${type}`);
      }
    }).join('\n');
  };
  return `{\n${makeString(items, 1)}\n}`;
};
export default stylish;
