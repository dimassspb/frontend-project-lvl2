import program from 'commander';
import makeDifference from './index.js';

export default () => {
  program.version('0.0.1');
  program
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>', 'output format', 'stylish')
    .arguments('<firstConfig> <secondConfig>')
    .action((firstConfig, secondConfig) => {
      const result = makeDifference(firstConfig, secondConfig, program.format);
      console.log(result);
    })
    .parse(process.argv);
};
