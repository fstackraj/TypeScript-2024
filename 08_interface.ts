export {};

// Interfaces are used to define the shape of an object

// Example 1
interface IUser {
  username: string;
  email: string;
  age?: number;
}

const printUser = (user: IUser) => {
  console.log(user.username);
  console.log(user.email);
  if (user.age) {
    console.log(user.age);
  }
};

interface IEmployee extends IUser {
  employeeId: number;
}

let myEmployee: IEmployee = {
  username: "John",
  email: "em@em.com",
  employeeId: 123,
};

const printEmployee = (employee: IEmployee) => {
  console.log(employee.username);
  console.log(employee.email);
  console.log(employee.employeeId);
};
