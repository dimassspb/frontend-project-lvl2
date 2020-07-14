import path from 'path';
import makeDifference from '../index.js';

const commonPath = '__tests__/__fixtures__/';
const expected = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;

test('Сomparing two .json files', () => {
    const path1 = path.join(commonPath, 'before.json');
    const path2 = path.join(commonPath, 'after.json');
expect(makeDifference(path1, path2)).toBe(expected);
});

test('Сomparing two .yaml files', () => {
    const path1 = path.join(commonPath, 'before.yaml');
    const path2 = path.join(commonPath, 'after.yaml');
expect(makeDifference(path1, path2)).toBe(expected);
});

test('Сomparing two .ini files', () => {
    const path1 = path.join(commonPath, 'before.ini');
    const path2 = path.join(commonPath, 'after.ini');
expect(makeDifference(path1, path2)).toBe(expected);
});
