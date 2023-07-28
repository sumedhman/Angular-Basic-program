abstract class Employee{
    protected empID:number;
    protected empName:string;
    protected basicSalary:number;
 
     constructor(empID:number,empName:string,basicSalary:number){
         this.empID = empID;
         this.empName = empName;
         this.basicSalary = basicSalary
     }

    abstract CalSalary(hours:number);
 
    Display(){
         console.log(`EmpID: ${this.empID}, EmpName: ${this.empName} and Salary: ${this.basicSalary}`);
     }
 }
 class Trainer extends Employee{
     salary:number;
     subject:string;
     CalSalary(hours: number) {
         this.salary = this.basicSalary + hours +(this.basicSalary * hours) * 2.5/100;
     }
     constructor(empID:number,empName:string,basicSalary:number,subject:string){
       super(empID,empName,basicSalary);
       this.subject = subject;
    }
     Display(): void {
         super.Display();
         console.log("Subject is: "+this.subject);
         console.log("Total Salary is: "+this.salary);
     }
 }
 class Admin extends Employee{
    salary:number;
    batchName:string;
    CalSalary(hours: number) {
        this.salary = this.basicSalary + hours +(this.basicSalary * hours) * 1.5/100;
    }
    constructor(empID:number,empName:string,basicSalary:number,batchName:string){
      super(empID,empName,basicSalary);
      this.batchName = batchName;
   }
    Display(): void {
        super.Display();
        console.log("BatchName is: "+this.batchName);
        console.log("Total Salary is: "+this.salary);
    }
}


function Test(x:number){
    let emp:Employee;
    if(x==1){
        emp = new Trainer(10,'Srikanth',18000,'Angular'); 
    }
    else{
        emp = new Admin(20,'Ramesh',12000,'Angular15-3rdBatch'); 
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