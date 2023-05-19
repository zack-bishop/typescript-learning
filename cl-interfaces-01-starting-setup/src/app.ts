class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
    }

    describe(this: Department) {
        // console.log('Department: ', this.name);
        // console.log('ID: ', this.id);

        console.log(`Department (${this.id}): ${this.name}`);
    }

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
}

class AccountingDepartment extends Department {

    private lastReport: string;

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

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');

        this.lastReport = reports[0];
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);

    }
}





const it = new ITDepartment('a1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Zack');

//accounting.employees[2] = 'Bob'; <-- wont work because we set `employees` to private
console.log(it);

const accounting = new AccountingDepartment('d2', ['report1', 'report2']);

accounting.addReport('Something went wrong');

accounting.mostRecentReport = 'Boop';

console.log(accounting.mostRecentReport);