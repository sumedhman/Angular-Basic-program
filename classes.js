var Employee = /** @class */ (function () {
    function Employee(id, name, sal) {
        this.empId = id;
        this.empName = name;
        this.empSalary = sal;
    }
    //Method - It will not return any value
    Employee.prototype.Display = function () {
        console.log("EmpID is: " + this.empId);
        console.log("EmpName is: " + this.empName);
        console.log("Salary is: " + this.empSalary);
    };
    //Function - It return some value to calling place.
    Employee.prototype.Greet = function (name) {
        return "Good Morning " + name;
    };
    return Employee;
}());
var obj = new Employee(101, "Srikanth", 12000);
obj.Display();
console.log(obj.Greet("Srikanth"));
