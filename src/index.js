import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildAst from './difference.js';
import render from './formatters/index.js';

const parseFile = (filePath) => {
  const fileData = fs.readFileSync(path.resolve(process.cwd(), filePath), 'utf-8');
  const extnameFile = path.extname(filePath).slice(1);
  return parse(extnameFile, fileData);
};
const makeDifference = (path1, path2, format) => {
  const dataBefore = parseFile(path1);
  const dataAfter = parseFile(path2);
  return render(buildAst(dataBefore, dataAfter), format);
};
export default makeDifference;
