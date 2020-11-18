"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//for typescript to treat it as a module rather than a script
var message = "hello Yoma";
console.log(message);
//let cannot and can be initialized immediately(given a value)
var sum;
//const must be initialized
var title = "I am learning Typescript";
var isBeginner = true;
var total = 0;
var name = 'Yoma';
//template strings can span multiple lines and have embedded expressions
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
//subtypes of all other types
var n = null;
var u = undefined;
//subtypes examples
var isNew = null;
var myName = undefined;
// ARRAYS
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//TUPPLE(array of mixed types, have fixed values and are position dependent)
var person1 = ['Yoma', 19];
// ENUM(a set of standards)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); //gives 1 as result...
// ANY TYPE
var randomValue = 10;
randomValue = true;
randomValue = "Yoma";
// UNKNOWN TYPE
var myVariable = "yoma";
myVariable.toUpperCase();
// console.log(myVariable); not printing to upperCase
// Type inference
var a; //here type any is inferred
a = 10;
a = true;
var b = 20; // number type is inferred on the variable b
// UNION TYPES
var multiType;
multiType = 20;
multiType = true;
// FUNCTIONS
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(5, 10));
console.log(add(4));
function fullName(person) {
    console.log("" + person.firstName);
}
var p = {
    firstName: 'Ogheneyoma'
};
fullName(p);
// CLASS
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Yoma");
console.log(emp1.employeeName);
emp1.greet();
// inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('manager delegating tasks');
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
// ACCESS MODIFIERS
