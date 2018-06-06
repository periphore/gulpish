import { Generator } from './generator';
import * as yargs from 'yargs';

export class Gulpish {

    cli = yargs;

    constructor() {

        this.cli
            .usage('\nGulpish CLI\n\nUsage: $0 [commands]')
            .help('h', 'List of Gulpish CLI commands').alias('h', 'help')
            .version('v', 'Current version', '0.1.6').alias('v', 'version')
            .wrap(68)
            .epilogue('for more information, find our manual at http://npmjs.com/gulpish');

        this.cli
            .command('init <project> [types..]', 'Bootstrap project', () => {
            });

        this.cli.argv;
    }

    run() { }

    generate() { }

}
