import { component } from './component.js';
import { IproccesData } from '../Interface/IproccesData.js';

export class cpu extends component implements IproccesData {
    proccesData: Function;
    constructor() {
        super("CPU", 50, "Intel",1);
        this.proccesData = () => {
            console.log("Yo proceso la data")
        }
    }
} 