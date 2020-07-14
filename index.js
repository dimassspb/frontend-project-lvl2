import fs from 'fs';
import path from 'path';
import genDiff from './difference.js';
import parse from './parsers.js';

const readFile = (filePath) => {
  const fileData = fs.readFileSync(path.resolve(filePath), 'utf-8');// unicode transformation format;
  const extnameFile = path.extname(filePath).slice(1);
  return parse(fileData, extnameFile);
};

const whiteSpace = '  ';
const tree = (items) => {
  const makeString = (data) => data.map(({
    type, name, newValue, oldValue,
  }) => {
    switch (type) {
      case 'compare':
        return `${whiteSpace}  ${name}: {\n${makeString(newValue)}`;
      case 'unchanged':
        return `${whiteSpace}  ${name}: ${oldValue}`;
      case 'removed':
        return `${whiteSpace}- ${name}: ${oldValue}`;
      case 'added':
        return `${whiteSpace}+ ${name}: ${newValue}`;
      case 'changed':
        return `${whiteSpace}+ ${name}: ${newValue}\n${whiteSpace}- ${name}: ${oldValue}`;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  }).join('\n');
  return `{\n${makeString(items)}\n}`;
};

const makeDifference = (path1, path2, format) => {
  const dataBefore = readFile(path1);
  const dataAfter = readFile(path2);
  return tree(genDiff(dataBefore, dataAfter), format);
};

export default makeDifference;
