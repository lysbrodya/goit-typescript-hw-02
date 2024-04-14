// type User = {
//   name: string;
//   age: number;
// };

// let user: User = {
//   name: "Tom",
//   age: 30,
// };

// let userJack: User = {
//   name: "Jack",
//   age: 25,
// };

// export {};
// function fetchUserData(id: string, callback: (data: any) => void): void {
//   // Тут може бути якийсь запит, але ми його заповнимо самі
//   const responseData = { name: "Tom" };

//   callback(responseData);
// }

// // Використання функції:
// fetchUserData("123", (data) => {
//   console.log(data.name); // TypeScript не викличе помилку, навіть якщо поле name не існує
// });

// export {};

function fetchUserData() {
  return "Tom";
}

let userData: unknown = fetchUserData(); // fetchUserData повертає невідомі дані
if (typeof userData === "string") {
  console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
}
enum Role {
  ADMIN,
  USER,
}

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("Role: ", Role.ADMIN);
}

function combine(param1: number | string, param2: number | string) {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

export {};

// type Employee = {
//   name: string;
//   id: number;
// };

// type Manager = {
//   employees: Employee[];
// };

// type CEO = Employee & Manager;

// const ceo: CEO = {
//   name: "Alice",
//   id: 1,
//   employees: [
//     {
//       name: "Bob",
//       id: 2,
//     },
//   ],
// };

// export {};

type User = {
  id: number;
  name: string;
};

const getUserNames = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

let result = getUserNames(users);
console.log(result); // ['Alice', 'Bob', 'Charlie']

export {};
////////////////////

enum UserStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Banned = "BANNED",
}
let status: UserStatus = UserStatus.Active;
/////////////////////////////
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type AdminOrEmployee = Admin | Employee;

function printDetails(obj: AdminOrEmployee) {
  console.log(`Name: ${obj.name}`);

  if ("privileges" in obj) {
    console.log(`Privileges: ${obj.privileges.join(", ")}`);
  }

  if ("startDate" in obj) {
    console.log(`Start Date: ${obj.startDate}`);
  }
}

export {};

///////////////////////////////////////////////////////////////

type AdminType = {
  type: "admin";
  name: string;
  privileges: string[];
};

type UserType = {
  type: "user";
  name: string;
  registrationDate: Date;
};

function checkUser(name: string, type: "user"): UserType;
function checkUser(
  name: string,
  type: "admin",
  privileges: string[]
): AdminType;
function checkUser(
  name: string,
  type: "admin" | "user",
  privilegesOrRegistrationDate?: string[]
): AdminType | UserType {
  if (type === "admin") {
    return {
      type,
      name,
      privileges: privilegesOrRegistrationDate as string[],
    };
  }

  return {
    type,
    name,
    registrationDate: new Date(),
  };
}

const user = checkUser("Nikita", "user");
const admin = checkUser("Tonya", "admin", ["manageUsers", "deletePosts"]);

export {};

let arr: Array<string | number> = [];

arr = ["str", 10];

export {};

////////////////////////////

const promise: Promise<string> = new Promise((resolve) => {
  setInterval(() => {
    resolve("Done!");
  }, 1000);
});

promise.then((data) => {
  console.log(data);
});

export {};

////////////////////////////

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

let numbers = [1, 2, 3, 4, 5];
let firstNum = firstElement(numbers);

let strings = ["a", "b", "c", "d"];
let firstStr = firstElement(strings);

export {};

// type Person = {
//   name: string;
// };

// type AdditionFields = {
//   age: number;
// };

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const merged = merge<Person, AdditionFields>({ name: "Alisa" }, { age: 28 });

// merged.name;

// export {};

///////////////////////

type Length = {
  length: number;
};

function getLength<T extends Length>(str: T) {
  return str.length;
}

getLength("text");
getLength([1, 2, 3]);
getLength("100"); // Errro: Argument of type 'number' is not assignable to parameter of type 'ILength'

export {};

/////////////////////
type Point = { x: number; y: number };
const p1: Readonly<Point> = { x: 10, y: 20 };

type Animal = { id: number; name: string; type: string; age: number };
const dog: Pick<Animal, "name" | "age"> = { name: "Rex", age: 5 };

type ExampleType = { details: Record<"name" | "age", string> };
console.log("ExampleType");
