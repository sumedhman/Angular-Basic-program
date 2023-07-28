var Result;
(function (Result) {
    Result[Result["Pass"] = 1] = "Pass";
    Result[Result["Fail"] = -1] = "Fail";
    Result[Result["Promote"] = 0] = "Promote";
})(Result || (Result = {}));
function Student() {
    var sId = 101;
    var sName = "Srikanth";
    var isActive = true;
    var sMarks = [45, 67, 89];
    var total = 0;
    for (var _i = 0, sMarks_1 = sMarks; _i < sMarks_1.length; _i++) {
        var i = sMarks_1[_i];
        total += i;
    }
    var avg = total / 3;
    var subjects = ["Typescript", "Angular", "React"];
    var sResult = Result.Pass;
    this.eResult = function () {
        if (avg >= 35) {
            return Result.Pass;
        }
        else {
            return Result.Fail;
        }
    };
}
var std = new Student();
console.log("Student Name is: " + std.sName);
console.log("Student Marks are: " + std.sMarks);
console.log(std.eResult());
console.log(Result[std.eResult()]);
