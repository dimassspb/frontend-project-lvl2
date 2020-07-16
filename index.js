import fs from 'fs';
import path from 'path';
import genDiff from './difference.js';
import parse from './parsers.js';
import stylish from './formatters/stylish.js';

const readFile = (filePath) => {
  const fileData = fs.readFileSync(path.resolve(filePath), 'utf-8');
  const extnameFile = path.extname(filePath).slice(1);
  return parse(fileData, extnameFile);
};
const makeDifference = (path1, path2, format) => {
  const dataBefore = readFile(path1);
  const dataAfter = readFile(path2);
  return stylish(genDiff(dataBefore, dataAfter), format);
};
export default makeDifference;
