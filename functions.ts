enum Result {
    Pass=1,
    Fail = -1,
    Promote = 0
}
function Student(){
    let sId:number = 101;
    let sName:string = "Srikanth";
    let isActive:boolean = true;
    let sMarks: number[] = [45,67,89];
    let total:number = 0;
    for(let i of sMarks){
        total += i;
    }
    let avg:number = total/3;
    let subjects:Array<string> = ["Typescript","Angular","React"];
    let sResult:Result = Result.Pass;
    this.eResult = function(){
        if(avg >= 35){
            return Result.Pass;
        }
        else{
            return Result.Fail;
        }
    }
}

var std = new Student();
console.log("Student Name is: "+std.sName);
console.log("Student Marks are: "+std.sMarks);
console.log(std.eResult());
console.log(Result[std.eResult()]);
