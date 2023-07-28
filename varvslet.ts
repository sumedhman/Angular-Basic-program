function Test(){
    const pi:number = 3.14;
    var marks:number = 33;

    let result:string = "Pass";
    
    if(marks < 35){
        let result:string = "Fail";
        console.log("Inside the if: "+result);

        const pi:number = 2.13;
    }
    console.log("Outside if block: "+result);
}

Test();