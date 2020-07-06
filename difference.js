import _ from 'lodash';

// eslint-disable-next-line max-len
const genDiff = (dataBefore, dataAfter) => _.union(Object.keys(dataBefore), Object.keys(dataAfter)).map((key) => {
  if (!_.has(dataAfter, key)) {
    return { type: 'removed', name: key, oldValue: dataBefore[key] };
  }
  if (!_.has(dataBefore, key)) {
    return { type: 'added', name: key, newValue: dataAfter[key] };
  }
  if (dataBefore[key] === dataAfter[key]) {
    return { type: 'unchanged', name: key, oldValue: dataBefore[key] };
  }
  if ((typeof dataBefore[key] === 'object') && (typeof dataAfter[key] === 'object')) {
    return { type: 'compare', name: key, newValue: genDiff(dataBefore[key], dataAfter[key]) };
  }
  return {
    type: 'changed', name: key, newValue: dataAfter[key], oldValue: dataBefore[key],
  };
});

export default genDiff;
