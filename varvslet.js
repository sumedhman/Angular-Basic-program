function Test() {
    var pi = 3.14;
    var marks = 33;
    var result = "Pass";
    if (marks < 35) {
        var result_1 = "Fail";
        console.log("Inside the if: " + result_1);
        var pi_1 = 2.13;
    }
    console.log("Outside if block: " + result);
}
Test();
