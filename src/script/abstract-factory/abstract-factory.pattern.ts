import {Employee} from './employee';
import {EmployeeFactory} from './employee.factory';

class AbstractFactoryPattern {
    public employeeList: Employee[] = null;

    private _factory: EmployeeFactory = null;
    private _nameList: string[] = [
        'Fred',
        'Adam',
        'Eric',
        'Dan',
    ];

    constructor() {
        this._factory = new EmployeeFactory();
        this.employeeList = this._nameList.map((name): Employee => this._factory.create(name));

        // tslint:disable-next-line
        console.log(this.employeeList);
    }
}
