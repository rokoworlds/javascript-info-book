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

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] = obj[key] * 2
//         }
//     }
// }

// console.log(multiplyNumeric(menu));



// 4.4 Методы объекта, this
// Задача 1
// function makeUser() {
//     return {
//         name: 'John',
//         ref: this,
//     };
// }

// let user = makeUser();

// alert(user.ref.name);

// результатом будет ошибка, потому что в данном случае this будет равно undefined

// Задача 2

// let calculator = {
//     a: 0,
//     b: 0,
//     res: 0,
//     read() {
//         this.a = +(prompt('a?'));
//         this.b = +(prompt('b?'));
//         return this
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b
//     }

// }

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Задача 3

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert(this.step);
        return this;
    }
};

// gpt problems

// Вам необходимо реализовать функцию deepCopy,
// которая принимает объект в качестве аргумента и 
// возвращает его глубокую копию.

const original = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// v1

const deepCopy1 = (orig) => {
    return structuredClone(orig);
}

// v2 

const deepCopy2 = (orig) => {
    return JSON.parse(JSON.stringify(orig))
}

// v3

const deepCopy3 = (orig) => {
    const copied = {};

    for (let key in orig) {
        if (orig[key] === 'object' && orig[key] !== null) {
            copied[key] = deepCopy3(orig[key]);
        } else {
            copied[key] = orig[key];
        }
    }

    return copied;
}


const copied = deepCopy3(original);


console.log(copied);
/* Ожидаемый результат:
{
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
}
*/

console.log(original === copied); // false
console.log(original.address === copied.address); // false