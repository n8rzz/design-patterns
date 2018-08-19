import {IFactory} from './i-factory';
import {IPersona} from './i-persona';
import {Employee} from './employee';

export class EmployeeFactory implements IFactory {
    public create(name: string): IPersona {
        return new Employee(name);
    }
}
