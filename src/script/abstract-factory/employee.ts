import {IPersona} from './i-persona';

export class Employee implements IPersona {
    public name: string = '';

    constructor(name: string) {
        this.name = name;
    }

    public speak(): void {
        // tslint:disable-next-line
        console.log(`${this.name} says Hello :wave:`);
    }
}
