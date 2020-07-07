import { component } from '../Models/component.js';
import { screen } from '../Models/screen.js';
import { injectPrinter } from '../Models/injectPrinter.js';
import { laserPrinter } from '../Models/laserPrinter.js';

export let Outputs: component[] = [
    new screen(),
    new injectPrinter(),
    new laserPrinter(),
    new screen(),
    new injectPrinter(),
    new laserPrinter(),
    new screen(),
]
