class Employee{
   empID:number;
   protected empName:string;
   protected basicSalary:number;

    constructor(empID:number,empName:string,basicSalary:number){
        this.empID = empID;
        this.empName = empName;
        this.basicSalary = basicSalary
    }

   Display(){
        console.log(`EmpID: ${this.empID}, EmpName: ${this.empName} and Salary: ${this.basicSalary}`);
    }
}
class Trainer extends Employee{
    subject:string;
    constructor(empID:number,empName:string,basicSalary:number,subject:string){
        super(empID,empName,basicSalary);
        this.subject = subject;
    }

    Display() {
        super.Display();
        //console.log(`EmpID: ${this.empID}, EmpName: ${this.empName} and Salary: ${this.basicSalary}`);
        console.log("Subject is: "+this.subject);
    }   
}

let obj:Trainer = new Trainer(10,"Srikanth",12345,'Angular');
obj.Display();
