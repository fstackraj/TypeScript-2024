export {};

// object type in typescript

let objectType: object;
objectType = { name: "John", age: 30 };
objectType = [1, 2, 3, 4, 5]; // array is also an object
// objectType = "Hello"; // error
// objectType = 10; // error
// objectType = true; // error

let objectType2: { name: string; age: number };
objectType2 = { name: "John", age: 30 };
// objectType2 = { name: "John" }; // error - age is missing

let objectType3: { name: string; age: number; isStudent: boolean };
objectType3 = { name: "John", age: 30, isStudent: true };
// objectType3 = { name: "John", age: 30, isStudent: "true" }; // error - isStudent should be boolean

let objectType4: {
  name: string;
  age: number;
  isStudent: boolean;
  hobbies: string[];
};
objectType4 = {
  name: "John",
  age: 30,
  isStudent: true,
  hobbies: ["reading", "music"],
};
// objectType4 = { name: "John", age: 30, isStudent: true, hobbies: ["reading", 10] }; // error - hobbies should be string array

let objectType5: {
  name: string;
  age: number;
  isStudent: boolean;
  hobbies: (string | number)[];
};
objectType5 = {
  name: "John",
  age: 30,
  isStudent: true,
  hobbies: ["reading", "music"],
};
objectType5 = {
  name: "John",
  age: 30,
  isStudent: true,
  hobbies: ["reading", 10],
};

let objectType6: {
  name: string;
  age?: number; // optional property
  isStudent: boolean;
  hobbies: (string | number)[];
  address: {
    city: string;
    state: string;
  };
};

objectType6 = {
  name: "John",
  isStudent: true,
  hobbies: ["reading", "music"],
  address: {
    city: "New York",
    state: "New York",
  },
};

objectType6 = {
  name: "John",
  age: 30,
  isStudent: true,
  hobbies: ["reading", "music"],
  address: {
    city: "New York",
    state: "New York",
  },
};
