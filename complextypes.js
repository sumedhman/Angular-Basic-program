var sid = 101;
var sName = "Srikanth";
var isActive = true;
//Array
var arMarks = [56, 75, 45];
var totalMarks = 0;
for (var _i = 0, arMarks_1 = arMarks; _i < arMarks_1.length; _i++) {
    var i = arMarks_1[_i];
    totalMarks = totalMarks + arMarks[i];
}
console.log(totalMarks);
var arSubjects = ["Typescript", "Angular", "React JS", "jQuery"];
//Tuple
var arDOB = [22, "July", 1990];
//Enum
var Result;
(function (Result) {
    Result[Result["Pass"] = 0] = "Pass";
    Result[Result["Fail"] = 1] = "Fail";
    Result[Result["Distinction"] = 2] = "Distinction";
})(Result || (Result = {}));
var stdResult = Result.Pass;
