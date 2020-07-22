import path from 'path';
import fs from 'fs';
import makeDifference from '../src/index.js';

const commonPath = '__tests__/__fixtures__/';

const makePath = (fileName) => path.join(commonPath, fileName);

const readFixture = (fixtureName) => {
  const fixturePath = makePath(fixtureName);
  const fixtureContent = fs.readFileSync(fixturePath, 'utf-8').trim();
  return fixtureContent;
};

test('Сomparing two flat .json files', () => {
    const path1 = path.join(commonPath, 'before.json');
    const path2 = path.join(commonPath, 'after.json');
    const expected = readFixture('flatStylishResult.txt');
    const format = 'stylish';
expect(makeDifference(path1, path2, format)).toBe(expected);
});

test('Сomparing two flat .yaml files', () => {
    const path1 = path.join(commonPath, 'before.yaml');
    const path2 = path.join(commonPath, 'after.yaml');
    const expected = readFixture('flatStylishResult.txt');
    const format = 'stylish';
expect(makeDifference(path1, path2, format)).toBe(expected);
});

test('Сomparing two flat .ini files', () => {
    const path1 = path.join(commonPath, 'before.ini');
    const path2 = path.join(commonPath, 'after.ini');
    const expected = readFixture('flatStylishResult.txt');
    const format = 'stylish';
expect(makeDifference(path1, path2, format)).toBe(expected);
});

test('Сomparing two .json files', () => {
    const path1 = path.join(commonPath, 'filepath1.json');
    const path2 = path.join(commonPath, 'filepath2.json');
    const expected = readFixture('recursionStylishResult.txt');
    const format = 'stylish';
expect(makeDifference(path1, path2, format)).toBe(expected);
});

test('Сomparing two .json files format = plain', () => {
    const path1 = path.join(commonPath, 'filepath1.json');
    const path2 = path.join(commonPath, 'filepath2.json');
    const expected = readFixture('plainResult.txt');
const format = 'plain';
expect(makeDifference(path1, path2, format)).toBe(expected);
});


test('Сomparing two .json files format = json', () => {
    const path1 = path.join(commonPath, 'filepath1.json');
    const path2 = path.join(commonPath, 'filepath2.json');
    const expected = readFixture('jsonResult.txt');
    const format = 'json';
expect(makeDifference(path1, path2, format)).toBe(expected);
});



