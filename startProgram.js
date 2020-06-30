import program from 'commander';
import makeDifference from './index.js';

export default () => {
  program.version('0.0.1');
  program
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'output format')
    .arguments('<path1> <path2>');
  program.action((path1, path2) => {
    const result = makeDifference(path1, path2);
    console.log(result);
  });

  program.parse(process.argv);
};
