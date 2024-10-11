/**
 * Todo: When Defining Variables
 *  ? We can assign variable type
 */

// Number
let myAge:number = 5;

// String
let myName: string = "Joshua Minga";

// Boolean
let isTanzanian: boolean = true;

// Any
let randomInfo: any = "can be string, boolean, array or number (any)";

// Array(s)
let mySchools:string[] = ['Kigamboni Priamry','Presbyterian Seminary','Jitegemee Highschool']; // Array of string

let bestYears: number[] = [1992,2004,2010,2013,2018,2024]; // Array of Numbers

let mixedInfo: any[] = ['Lumuli Minga',3,'Harrier',true];

// Todo: test calling values
const callValue = (thisValue) => { // Ts will have an issue here because we have not defined (thisValue) type 
    return thisValue;
}

console.log(callValue(mySchools));

// To define type for the above we can do
const callString = (a:number, b: string ) => {
    return a + b;
} 

console.log(callString(myAge,randomInfo));

// To specifiy a return type
const returnThis = (c:string,d:string): string[] => {
    return [c,d]; // Notify we're returning an array of string
}

console.log(returnThis(myName,randomInfo));