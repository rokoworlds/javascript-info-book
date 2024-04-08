// 5.5 Методы массивов

// Задача 1

//  border-left-width в borderLeftWidth

function camelize(str) {
    return str
        .split('-')
        .map((el, index) => index === 0 ? el : el[0].toUpperCase() + el.slice(1))
        .join('');
}

camelize('border-left-width');


// Задача 2

function filterRange(arr, a, b) {
    return  arr.filter((item) => item >= a && item <= b);
}

console.log( filtered ); // 3,1 (совпадающие значения)

console.log( arr ); // 5,3,8,1 (без изменений)

// Задача 3

function filterRangeInPlace(arr, a, b) {
    return arr.forEach((item, index) => (item >= a && item <= b) ? item : arr.splice(index, 1))
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

// Задача 4

let arr4 = [5, 2, 1, -10, 8];
console.log(arr4.sort((a, b) => b - a));

// Задача 5

function copySorted(arr) {
    let copy = arr
        .slice()
        .sort((a, b) => a.localeCompare(b))

    return copy;
}

let arr5 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr5);


// Задача 6

function Calculator() {
    this.operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }
    this.calculate = function(str) {
        let arr = str.split(' ');
        let a = Number(arr[0]);
        let b = Number(arr[2]);

        for (let key of this.operators) {
            if (key === arr[1]) {
                return this.operators[key](a, b);
            }
        }
    }
    this.addMethod = function(name, func) {
        this.operators[name] = func;
    }
}

// Задача 7

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let users1 = [ vasya1, petya1, masha1 ];

let names = users.map((item) => item.name)

console.log( names ); // Вася, Петя, Маша

// Задача 8

let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya2, petya2, masha2 ];

let usersMapped = users.map((item) => (
    {
        fullName: `${item.name} ${item.surname}`, 
        id: item.id,
    }
))

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин

// Задача 9

let vasya9 = { name: "Вася", age: 25 };
let petya9 = { name: "Петя", age: 30 };
let masha9 = { name: "Маша", age: 28 };

let arr9 = [ vasya9, petya9, masha9 ];

function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age)
}

sortByAge(arr9)

// Задача 10

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Задача 11

function getAverageAge(users) {
    return users.reduce((acc, item) => (acc += item.age), 0) / users.length;
}

// Задача 12

function unique(arr) {
    let result = [];
    for (let el of arr) {
        if (!result.includes(el)) {
            result.push(el);
        }
    }
    return result;
}

// Задача 13

// function groupById(arr) {
//     arr.map((item) => (
//         {
//         [item.id]: {...item}
//         }
// ))
// }

function groupById(arr) {
    arr.reduce((acc, item) => {
        acc[item.name] = {...item}
        return acc;
    }, {})
}