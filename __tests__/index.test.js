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

const expected1 = `{
    common: {
        setting1: Value 1
      - setting2: 200
      + setting3: {
            key: value
        }
      - setting3: true
        setting6: {
            key: value
          + ops: vops
        }
      + follow: false
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
    }
    group1: {
      + baz: bars
      - baz: bas
        foo: bar
      + nest: str
      - nest: {
            key: value
        }
    }
  - group2: {
        abc: 12345
    }
  + group3: {
        fee: 100500
    }
}`;

test('Сomparing two .ini files', () => {
    const path1 = path.join(commonPath, 'filepath1.json');
    const path2 = path.join(commonPath, 'filepath2.json');
expect(makeDifference(path1, path2)).toBe(expected1);
});
