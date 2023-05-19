abstract class Department {
    static fiscalYear = 2023;
    // private id: string;
    // private name: string;
    private employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {

    }

    static createEmployee(name: string) {
        return {name: name};
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('IT Department - ID: ', this.id);
    }
}

class AccountingDepartment extends Department {

    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No Report found.');
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass ina valid value!');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');

        this.lastReport = reports[0];
    }

    static getInstance() {
        if(this.instance) {
            return this.instance;
        }
        return this.instance = new AccountingDepartment('d2', []);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);

    }

    describe() {
        console.log('Accounting Department - ID: ', this.id);
    }
}

const employee1 = Department.createEmployee('Max');

console.log(employee1);
console.log(Department.fiscalYear);

const it = new ITDepartment('a1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Zack');

//accounting.employees[2] = 'Bob'; <-- wont work because we set `employees` to private
console.log(it);

const accounting =  AccountingDepartment.getInstance();

accounting.addReport('Something went wrong');

accounting.mostRecentReport = 'Boop';

console.log(accounting);