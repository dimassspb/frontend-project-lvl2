import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const readFile = (filePath) => {
  const fullPath = path.resolve(filePath, process.cwd());
  const data = fs.readFileSync(filePath).toString();
  return [fullPath, data];
};

const genDiff = (data1, data2) => _.union(Object.keys(data1), Object.keys(data2)).map((key) => {
  if (!_.has(data2, key)) {
    return { type: 'removed', name: key, oldValue: data1[key] };
  }
  if (!_.has(data1, key)) {
    return { type: 'added', name: key, newValue: data2[key] };
  }
  if (data1[key] === data2[key]) {
    return { type: 'unchanged', name: key, oldValue: data1[key] };
  }
  if ((typeof data1[key] === 'object') && (typeof data2[key] === 'object')) {
    return { type: 'changed', name: key, newValue: genDiff(data1[key], data2[key]) };
  }
  return {
    type: 'modified', name: key, newValue: data2[key], oldValue: data1[key],
  };
});
const makeDifference = (path1, path2) => {
  const data1 = readFile(path1);
  const data2 = readFile(path2);
  const result = genDiff(data1, data2), format;
  return result;
};
export default makeDifference;
