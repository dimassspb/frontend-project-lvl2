import getStylish from './stylish.js';
import getPlain from './plain.js';
import getJson from './json.js';

const render = {
  stylish: getStylish,
  json: getJson,
  plain: getPlain,
};

export default (data, format) => render[format](data);
