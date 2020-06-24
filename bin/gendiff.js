#!/usr/bin/env node
import program from 'commander';
import genDiff from '..';

program.version('0.0.1');

program
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>');

program.action((filepath1, filepath2) => {
  const diff = genDiff(filepath1, filepath2, program.format);
  console.log(diff);
});

program.parse(process.argv);
