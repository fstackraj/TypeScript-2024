export {};

// function type in typescript

const printUserDetails = (name: string, email: string, age?: number): void => {
  console.log(`Name: ${name}`);
  if (age) {
    console.log(`Age: ${age}`);
  }
  console.log(`Email: ${email}`);
};

printUserDetails("Raj", "hello@rajarshisamaddar.com");

printUserDetails("Raj", "hello@rajarshisamaddar.com", 20);

// printUserDetails("Raj", 20, "sad@sad.com"); // error - argument type mismatch
