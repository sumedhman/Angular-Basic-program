var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(empID, empName, basicSalary) {
        this.empID = empID;
        this.empName = empName;
        this.basicSalary = basicSalary;
    }
    Employee.prototype.Display = function () {
        console.log("EmpID: ".concat(this.empID, ", EmpName: ").concat(this.empName, " and Salary: ").concat(this.basicSalary));
    };
    return Employee;
}());
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(empID, empName, basicSalary, subject) {
        var _this = _super.call(this, empID, empName, basicSalary) || this;
        _this.subject = subject;
        return _this;
    }
    Trainer.prototype.CalSalary = function (hours) {
        this.salary = this.basicSalary + hours + (this.basicSalary * hours) * 2.5 / 100;
    };
    Trainer.prototype.Display = function () {
        _super.prototype.Display.call(this);
        console.log("Subject is: " + this.subject);
        console.log("Total Salary is: " + this.salary);
    };
    return Trainer;
}(Employee));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(empID, empName, basicSalary, batchName) {
        var _this = _super.call(this, empID, empName, basicSalary) || this;
        _this.batchName = batchName;
        return _this;
    }
    Admin.prototype.CalSalary = function (hours) {
        this.salary = this.basicSalary + hours + (this.basicSalary * hours) * 1.5 / 100;
    };
    Admin.prototype.Display = function () {
        _super.prototype.Display.call(this);
        console.log("BatchName is: " + this.batchName);
        console.log("Total Salary is: " + this.salary);
    };
    return Admin;
}(Employee));
function Test(x) {
    var emp;
    if (x == 1) {
        emp = new Trainer(10, 'Srikanth', 18000, 'Angular');
    }
    else {
        emp = new Admin(20, 'Ramesh', 12000, 'Angular15-3rdBatch');
    }
    emp.CalSalary(8);
    emp.Display();
}
Test(1);
Test(0);
// let emp:Employee;
// emp = new Trainer(10,'Srikanth',18000,'Angular');
// emp.CalSalary(8);
// emp.Display();
// emp = new Admin(20,'Ramesh',12000,'Angular15-3rdBatch');
// emp.CalSalary(8);
// emp.Display();
