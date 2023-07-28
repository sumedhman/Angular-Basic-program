class Address{
    AddressId:number;
    Address:string;
    City:string;
    State:string;
    Country:string;

    constructor(AddressId:number,Address:string,City:string,State:string,Country:string){
        this.AddressId = AddressId;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Country = Country;
    }
}
class Customer{
    CustomerId:number;
    public CustomerName:string;
    private CustomerBal:number
    CustomerAddress:Address;
    CustomerSpouse:string;

    constructor(id:number,name:string,balence:number,custAdd:Address,spouseName:string="Test"){
        this.CustomerId = id;
        this.CustomerName = name;
        this.CustomerBal = balence;
        this.CustomerAddress = custAdd;
        this.CustomerSpouse = spouseName;
    }    

    Display(){
        console.log(`Customer ID: ${this.CustomerId},
        Customer Name: ${this.CustomerName},
        Customer Account Balence: ${this.CustomerBal},
        Customer SpouseName: ${this.CustomerSpouse},
        Customer City: ${this.CustomerAddress.City},
        Customer State is: ${this.CustomerAddress.State}`);
    }

    Deposit(amt:number,transaction:string="Test",x?:number):number{
        this.CustomerBal = this.CustomerBal+amt;
        console.log(transaction);
        console.log(x);
        return this.CustomerBal;
    }
}

let addr:Address = new Address(1,"Hyd","Hyd","TS","India");
let obj:Customer = new Customer(10,'Srikanth',200,addr);
console.log(obj.CustomerName);
console.log(obj.CustomerAddress.City);

// obj.Display();
// console.log(obj.Deposit(120));
// let obj1:Customer = new Customer(20,"Krish",300,addr,"Sirisha");
// obj1.Display();
// console.log(obj1.Deposit(200,"Deposit"));
// console.log(obj1.Deposit(300,"Withdraw",10));