import pkg from 'lodash';

const { isObject, union, has } = pkg;

const buildAst = (dataBefore, dataAfter) => {
  const keys = union(Object.keys(dataBefore), Object.keys(dataAfter)).sort();
  return keys.map((key) => {
    if (!has(dataAfter, key)) {
      return { type: 'removed', name: key, oldValue: dataBefore[key] };
    }
    if (!has(dataBefore, key)) {
      return { type: 'added', name: key, newValue: dataAfter[key] };
    }
    if (dataBefore[key] === dataAfter[key]) {
      return { type: 'unchanged', name: key, oldValue: dataBefore[key] };
    }
    if (isObject(dataBefore[key]) && isObject(dataAfter[key])) {
      return { type: 'nested', name: key, newValue: buildAst(dataBefore[key], dataAfter[key]) };
    }
    return {
      type: 'changed', name: key, newValue: dataAfter[key], oldValue: dataBefore[key],
    };
  });
};
export default buildAst;
