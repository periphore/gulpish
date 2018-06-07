import { Generator } from './generator';
import * as yargs from 'yargs';
import * as fs from 'fs';

export class Gulpish {

    cli = yargs;

    constructor() {

        this.cli
            .usage('\nGulpish CLI\n\nUsage: $0 [commands]')
            .help('h', 'list of gulpish cli commands').alias('h', 'help')
            .version('v', 'current version', 'Current version: v0.1.6').alias('v', 'version')
            .wrap(72)
            .epilogue('for more information, find our manual at http://npmjs.com/gulpish');

        this.cli
            .command('init <plugins..>', 'generate config files', (yargs) => {
                yargs.positional('plugins', {
                    type: 'string',
                    default: 'typescript',
                    describe: 'supported:\n-  webpack\n-  typescript\n'
                });
            }, function (argv) {
                this.generateTasksFolder();
                console.log(argv.plugins);
            })
            .argv;

        this.cli.argv;
    }

    run() { }

    generate() { }

    generateTasksFolder() {
        let dir = './tasks';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    }

}
