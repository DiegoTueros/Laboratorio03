import { component } from './component.js';
import { Iverifyofcomponents } from '../Interface/Iverify.js'

export class computer implements Iverifyofcomponents {
    verify: Function;
    public _components: component[] = [];

    constructor() {


        // 1:procesador
        // 2:input devices
        // 3:output devices
        // 4:especial devices



        this.verify = (): boolean => {
            let countp = 0
            let counti = 0
            let counto = 0
            let counts = 0
            console.log('Verificando...');
            for (const component of this._components) {
                if (component.gettype() == 1) {
                    countp++
                }
                if (component.gettype() == 2) {
                    counti++
                }
                if (component.gettype() == 3) {
                    counto++
                }
                if (component.gettype() == 4) {
                    counts++
                }
            }
            if (countp >= 1 && counts >= 1) {
                return true
            }
            else {
                if (countp >= 1 && counto >= 1 && counti >= 1) {
                    return true
                }
                else {
                    return false
                }

            }
        }

    }





    add(component: component) {
        this._components.push(component);
    }
    delete(component: component) : boolean {
        let index = -1;
        
        for (let i = 0; i < this._components.length; i++) {
            if (this._components[i].getname() === component.getname() && this._components[i].getbrand() === component.getbrand() && this._components[i].getprice() == component.getprice() && this._components[i].gettype() == component.gettype()) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            this._components.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
}

