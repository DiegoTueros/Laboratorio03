import { keyboard } from '../Models/keyboard.js';
import { mouse } from '../Models/mouse.js';
import { graficTable } from '../Models/graficTable.js';
export let Inputs = [
    new mouse(),
    new keyboard(),
    new graficTable(),
    new mouse(),
    new keyboard(),
    new graficTable()
];
