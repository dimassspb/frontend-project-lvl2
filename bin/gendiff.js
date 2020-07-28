#!/usr/bin/env node

import program from 'commander';
import makeDifference from '../src/index.js';

program
  .version('0.0.1');
program
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    const result = makeDifference(firstConfig, secondConfig, program.format);
    console.log(result);
  });
program.parse(process.argv);
