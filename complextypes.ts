let sid:number = 101;
let sName:string = "Srikanth";
let isActive:boolean = true;

//Array
let arMarks:Array<number> = [56,75,45];
let totalMarks:number = 0;
for(var i of arMarks){
    totalMarks = totalMarks+arMarks[i];
}
console.log(totalMarks);

let arSubjects: string[] = ["Typescript","Angular","React JS","jQuery"];

//Tuple
let arDOB:[number,string,number] = [22,"July",1990];

//Enum
enum Result {
    Pass,
    Fail,
    Distinction
}
let stdResult = Result.Pass;