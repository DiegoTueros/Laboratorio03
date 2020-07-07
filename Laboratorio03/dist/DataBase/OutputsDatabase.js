import { screen } from '../Models/screen.js';
import { injectPrinter } from '../Models/injectPrinter.js';
import { laserPrinter } from '../Models/laserPrinter.js';
export let Outputs = [
    new screen(),
    new injectPrinter(),
    new laserPrinter(),
    new screen(),
    new injectPrinter(),
    new laserPrinter(),
    new screen(),
];
