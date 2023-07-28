var Address = /** @class */ (function () {
    function Address(AddressId, Address, City, State, Country) {
        this.AddressId = AddressId;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Country = Country;
    }
    return Address;
}());
var Customer = /** @class */ (function () {
    function Customer(id, name, balence, custAdd, spouseName) {
        if (spouseName === void 0) { spouseName = "Test"; }
        this.CustomerId = id;
        this.CustomerName = name;
        this.CustomerBal = balence;
        this.CustomerAddress = custAdd;
        this.CustomerSpouse = spouseName;
    }
    Customer.prototype.Display = function () {
        console.log("Customer ID: ".concat(this.CustomerId, ",\n        Customer Name: ").concat(this.CustomerName, ",\n        Customer Account Balence: ").concat(this.CustomerBal, ",\n        Customer SpouseName: ").concat(this.CustomerSpouse, ",\n        Customer City: ").concat(this.CustomerAddress.City, ",\n        Customer State is: ").concat(this.CustomerAddress.State));
    };
    Customer.prototype.Deposit = function (amt, transaction, x) {
        if (transaction === void 0) { transaction = "Test"; }
        this.CustomerBal = this.CustomerBal + amt;
        console.log(transaction);
        console.log(x);
        return this.CustomerBal;
    };
    return Customer;
}());
var addr = new Address(1, "Hyd", "Hyd", "TS", "India");
var obj = new Customer(10, 'Srikanth', 200, addr);
console.log(obj.CustomerName);
console.log(obj.CustomerAddress.City);
// obj.Display();
// console.log(obj.Deposit(120));
// let obj1:Customer = new Customer(20,"Krish",300,addr,"Sirisha");
// obj1.Display();
// console.log(obj1.Deposit(200,"Deposit"));
// console.log(obj1.Deposit(300,"Withdraw",10));
