export {};

// array type in typescript

let arrayType = [1, 2, 3, 4, 5];
arrayType.push(6);
// arrayType.push("hi"); // error

let arrayType2: string[]; // array of string
let arrayType3: number[] = [1, 2, 3, 4, 5]; // array of number
let arrayType4: (number | string)[]; // array of number or string
