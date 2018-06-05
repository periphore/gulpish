import { Generator } from './generator';
import * as yargs from 'yargs';

export class Gulpish {

  argv;

  constructor() {
    this.argv = yargs
      .usage('\nGulpish CLI\n\nUsage: [command]')
      .help('help').alias('help', 'h')
      .version('version', '0.1.6').alias('version', 'v')
      .command('generate', 'generate config', () => {
	console.log('generate');
      }).argv;
  }

  run() {}



}
