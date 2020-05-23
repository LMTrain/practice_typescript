"use strict";
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
        // this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('id', 'Accounting');
accounting.addEmployee('Laycon');
accounting.addEmployee('Stella');
accounting.describe();
accounting.printEmployeeInformation();
// const accountingCopy = { name: 'Laycon', describe: accounting.describe };
// accountingCopy.describe();
