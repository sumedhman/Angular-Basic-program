class Employee{
    empId:number;
    empName:string;
    empSalary:number;

    constructor(id:number,name:string,sal:number){
        this.empId = id;
        this.empName = name;
        this.empSalary = sal;
    }

    //Method - It will not return any value
    Display():void{
        console.log("EmpID is: "+this.empId);
        console.log("EmpName is: "+this.empName);
        console.log("Salary is: "+this.empSalary);
    }

    //Function - It return some value to calling place.
    Greet(name:string):string{
        return "Good Morning "+name;
    }
}

let obj:Employee = new Employee(101,"Srikanth",12000);
obj.Display();
console.log(obj.Greet("Srikanth"));