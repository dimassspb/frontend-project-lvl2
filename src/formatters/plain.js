const getPath = (ancestry, name) => (ancestry.length === 0 ? name : `${ancestry}.${name}`);
const stringify = (value) => {
  if (value instanceof Object) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return value;
};
const plain = (items) => {
  const makeString = (data, path) => data.map(({
    type, name, newValue, oldValue,
  }) => {
    const key = getPath(path, name);
    switch (type) {
      case 'nested':
        return makeString(newValue, key);
      case 'removed':
        return `Property '${key}' was removed.`;
      case 'added':
        return `Property '${key}' was added with value: ${stringify(newValue)}.`;
      case 'changed':
        return `Property '${key}' was updated. From ${stringify(oldValue)} to ${stringify(newValue)}.`;
      case 'unchanged':
        return false;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  }).filter((item) => item).join('\n');
  return makeString(items, '');
};
export default plain;
