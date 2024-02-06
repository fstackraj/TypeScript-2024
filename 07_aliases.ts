export {};

// aliases types are used to create a new name for a type

// Example 1
type userType = {
  username: string;
  email: string;
  age?: number;
};

const printUser = (user: userType) => {
  console.log(user.username);
  console.log(user.email);
  if (user.age) {
    console.log(user.age);
  }
};

// Example 2
type addFunction = (a: number, b: number, c?: number) => number;

const add: addFunction = (a, b, c) => {
  return a + b + (c || 0);
};

// Example 3

type userType2 = {
  username: string;
  email: string;
  age?: number;
  theme: "dark" | "light";
};

const printUser2 = (user: userType2) => {
  console.log(user.username);
  console.log(user.email);
  if (user.age) {
    console.log(user.age);
  }
  console.log(user.theme);
};

let myUser: userType2 = {
  username: "John",
  email: "ef@df.com",
  //   theme: "red", // Error because it is not a valid theme
  theme: "dark",
};
