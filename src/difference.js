import _ from 'lodash';

const buildAst = (dataBefore, dataAfter) => {
  const keys = _.union(Object.keys(dataBefore), Object.keys(dataAfter)).sort();
  return keys.map((key) => {
    if (!_.has(dataAfter, key)) {
      return { type: 'removed', key, value: dataBefore[key] };
    }
    if (!_.has(dataBefore, key)) {
      return { type: 'added', key, value: dataAfter[key] };
    }
    if (dataBefore[key] === dataAfter[key]) {
      return { type: 'unchanged', key, value: dataBefore[key] };
    }
    if (_.isObject(dataBefore[key]) && _.isObject(dataAfter[key])) {
      return { type: 'nested', key, children: buildAst(dataBefore[key], dataAfter[key]) };
    }
    return {
      type: 'changed', key, newValue: dataAfter[key], oldValue: dataBefore[key],
    };
  });
};
export default buildAst;
