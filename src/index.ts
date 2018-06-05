#!/usr/bin/env node

import { Generator } from './generator';

const argc = process.argv.splice(2);

export class Main {

    static init() {
        let generator = new Generator((argc || [])[0]);
    }
}

Main.init();
