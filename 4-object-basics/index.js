// 3.1 Объекты

// // Задача 1
// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name
// console.log(user)

// // Задача 2
// function isEmpty(obj) {
//     for (let key in obj) {
//         return true;
//     }
//     return false;
// }

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// // Задача 3
// const user = {
//     name: "John"
//   };
//   // это будет работать?
//   user.name = "Pete";

//   // да, так как меняется не сам объект, а его свойства.

// // Задача 4
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// let sum = 0; 
// for (let key in salaries) {
//     sum += salaries[key];
// }

// console.log(sum)

// Задача 5

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key] * 2
        }
    }
}

console.log(multiplyNumeric(menu));