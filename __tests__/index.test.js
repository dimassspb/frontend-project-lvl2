
import fs from 'fs';
import path from 'path';
import makeDifference from '../src/index.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const buildPath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);
const readFixture = (fixtureName) => {
  const fixturePath = buildPath(fixtureName);
  const fixtureContent = fs.readFileSync(fixturePath, 'utf-8').trim();
  return fixtureContent;
};
const extensions = ['json', 'yaml', 'ini'];
const formats = ['stylish', 'plain', 'json'];
formats.forEach((format) => {
test.each(extensions)(`makeDifference extension: %s, format: ${format}`, (extension) => {
  const before = buildPath(`filePath1.${extension}`);
  const after = buildPath(`filePath2.${extension}`);
expect(makeDifference(before, after, format)).toEqual(readFixture(`${format}.txt`));
},
);
});
