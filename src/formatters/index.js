import getStylish from './stylish.js';
import getPlain from './plain.js';

const getJson = (data) => JSON.stringify(data, null, 2);
const render = {
  stylish: getStylish,
  json: getJson,
  plain: getPlain,
};

export default (data, format) => render[format](data);
