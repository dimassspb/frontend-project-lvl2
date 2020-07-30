const stringify = (value) => {
  if (typeof value === 'object') return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return value;
};

const getPlain = (diff) => {
  const iter = (innerDiff, path) => innerDiff
    .filter(({ type }) => type !== 'unchanged')
    .map(({
      key, type, value, oldValue, newValue, children,
    }) => {
      const newPath = path.length <= 1 ? key : [path, key].join('.');
      switch (type) {
        case 'added':
          return `Property '${newPath}' was added with value: ${stringify(value)}`;
        case 'removed':
          return `Property '${newPath}' was removed`;
        case 'changed':
          return `Property '${newPath}' was changed from ${stringify(oldValue)} to ${stringify(newValue)}`;
        case 'nested':
          return iter(children, newPath);
        default:
          throw new Error(`Unexpected type: '${type}'.`);
      }
    }).join('\n');
  return iter(diff, []);
};
export default getPlain;
