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

const accounting = new Department('a1', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Zack');

//accounting.employees[2] = 'Bob'; <-- wont work because we set `employees` to private
console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'Dummy', describe: accounting.describe};
//
// accountingCopy.describe();
