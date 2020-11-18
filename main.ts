export {}
//for typescript to treat it as a module rather than a script
let message = "hello Yoma";
console.log(message);

//let cannot and can be initialized immediately(given a value)
let sum;
//const must be initialized
const title = "I am learning Typescript";


let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Yoma';

//template strings can span multiple lines and have embedded expressions
let sentence: string = `My name is ${name}
I am a beginner in Typescript`
console.log(sentence);

//subtypes of all other types
let n: null = null;
let u: undefined = undefined;

//subtypes examples
let isNew: boolean = null;
let myName: string = undefined;

// ARRAYS
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

//TUPPLE(array of mixed types, have fixed values and are position dependent)
let person1: [string, number] = ['Yoma', 19];

// ENUM(a set of standards)
enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;
console.log(c); //gives 1 as result...

// ANY TYPE
let randomValue: any = 10;
randomValue = true;
randomValue = "Yoma";

// UNKNOWN TYPE
let myVariable: unknown = "yoma";
(myVariable as string).toUpperCase();
// console.log(myVariable); not printing to upperCase


// Type inference
let a; //here type any is inferred
a = 10;
a = true;

let b = 20; // number type is inferred on the variable b

// UNION TYPES
let multiType : number | boolean;
multiType = 20;
multiType = true;

// FUNCTIONS
function add(num1: number, num2?: number): number{
    if(num2)
        return num1 + num2;
    else
        return num1
}
console.log(add(5, 10));
console.log(add(4));
 
// INTERFACE
interface Person{
    firstName: string,
    lastName?: string
}

function fullName(person: Person){
    console.log(`${person.firstName}`);
}

let p = {
    firstName: 'Ogheneyoma',
    // lastName: 'Emore'
}

fullName(p);

// CLASS
class  Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee("Yoma");
console.log(emp1.employeeName);
emp1.greet();

// inheritance
class Manager extends Employee{
    constructor(managerName: string){
        super(managerName)
    }
    delegateWork(){
        console.log('manager delegating tasks');
    }
}

let m1 = new Manager('Bruce')
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

// ACCESS MODIFIERS

