// 5.5 Map & Set

// Задача 1

function unique(arr) {
    let set = new Set(arr);
    return Array.from(set.keys());
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) );
// ['Hare', 'Krishna', ':-O']


// Задача 2

function aclean(arr) {
    let set = new Set();
    let result = [];

    for (let el of arr) {
        let setEl = el.split('').sort().join('').toLowerCase();
        if (!set.has(setEl)) {
            set.add(setEl);
            result.push(el);
        } 
    }

    return result;
}


// Задача 3

let map3 = new Map();

map3.set("name", "John");

let keys = Array.from(map3.keys()); // Используем метод Array.from для создания массива

keys.push("more");

//___________________________________________________

/*
GPT task

Ваша задача - создать программу для управления информацией о сотрудниках компании с использованием Map.

Инструкции:
Создайте пустую Map с именем companyInfo. Ключами будут имена сотрудников, а значениями - их должности в компании.
Напишите функцию addEmployee(name, position), которая принимает имя сотрудника и его должность, и добавляет их в companyInfo.
Напишите функцию removeEmployee(name), которая удаляет сотрудника из companyInfo по его имени.
Напишите функцию getEmployeePosition(name), которая возвращает должность сотрудника по его имени. Если сотрудник не найден, функция должна вернуть строку "Сотрудник не найден".
*/

const companyInfo = new Map();

function addEmployee(name, position) {
    return companyInfo.set(name, position);
}

function removeEmployee(name) {
    return companyInfo.delete(name);
}

function getEmployeePosition(name) {
    if (companyInfo.has(name)) {
        return companyInfo.get(name);
    } else {
        console.log("Сотрудник не найден");
    }
}

// Добавление сотрудников
addEmployee('Alice', 'Менеджер');
addEmployee('Bob', 'Разработчик');
addEmployee('Charlie', 'Дизайнер');

// Получение информации о сотрудниках
console.log(getEmployeePosition('Alice')); // Ожидаемый вывод: Менеджер
console.log(getEmployeePosition('Bob'));   // Ожидаемый вывод: Разработчик
console.log(getEmployeePosition('Dave'));  // Ожидаемый вывод: Сотрудник не найден

// Удаление сотрудника
removeEmployee('Bob');
console.log(getEmployeePosition('Bob'));   // Ожидаемый вывод: Сотрудник не найден

addEmployee('Raph', 'Разработчик');
addEmployee('Leo', 'Разработчик');
addEmployee('Donny', 'Разработчик');
addEmployee('Mike', 'Разработчик');


// 

let empGreetingsList = companyInfo.keys();

for (let name of empGreetingsList) {
    console.log(`Welcome ${name}!`)
}

/*
Welcome Alice!
Welcome Charlie!
Welcome Raph!
...
*/

companyInfo.forEach((val, key) => {
    if (val === 'Разработчик') {
        console.log(`${key} ждем вас на Ретро встрече в 16:30`)
    }
})

/*
Raph ждем вас на Ретро встрече в 16:30
Leo ждем вас на Ретро встрече в 16:30
...
*/


// __________________________________________________________

let map = new Map();
map.set(1, 'gold')
    .set(2, 'silver')
    .set(3, 'bronze');

let mapToObj = Object.fromEntries(map.entries()); // {1: 'gold', 2: 'silver', 3: 'bronze'}

let mapToObj2 = Object.fromEntries(map); // {1: 'gold', 2: 'silver', 3: 'bronze'}

// _________________________________________________________

/*
GPT task

Напишите функцию findUniqueValues(arr), которая принимает массив arr в качестве аргумента и возвращает новый массив, 
содержащий только уникальные значения из исходного массива. 
Используйте объект Set для решения этой задачи.

*/

function findUniqueValues(arr) {
    return Array.from(new Set(arr));
}

const arr = [1, 2, 3, 4, 2, 3, 5];

console.log(findUniqueValues(arr)); // [1, 2, 3, 4, 5]


/*
GPT task

Напишите функцию findCommonElements(arr1, arr2), которая принимает два массива arr1 и arr2 в качестве аргументов 
и возвращает новый массив, содержащий только те элементы, которые присутствуют в обоих исходных массивах. 
Используйте объект Set для решения этой задачи.

*/

function findCommonElements(arr1, arr2) {
    const set = new Set(arr1);
    let result = [];

    for (let el of arr2) {
        if (set.has(el)) {
            result.push(el);
        }
    }

    return result;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

console.log(findCommonElements(arr1, arr2));  // [3, 4, 5]


/*
GPT task

Подсчет количества общих уникальных элементов в нескольких массивах

Напишите функцию countUniqueCommonElements(arrays), которая принимает 
массив массивов arrays в качестве аргумента и возвращает количество уникальных 
элементов, которые встречаются в каждом из массивов. 
Используйте объект Set для решения этой задачи.

*/

// function countUniqueCommonElements(arrays) {
//     const set1 = new Set(arrays[0]);
//     const set2 = new Set();
//     const set3 = new Set();
//     let result = [];

//     for (let i = 1; i < arrays.length; i++) {
//         for (let el of arrays[i]) {
//             if (set1.has(el)) {
//                 set2.add(el)
//             }
//         }
//     }
// }

// const arrays = [
//     [1, 2, 3, 4, 5],
//     [3, 4, 5, 6, 7],
//     [5, 6, 7, 8, 9]
//   ];
//   console.log(countUniqueCommonElements(arrays)); 


  function countUniqueCommonElements(arrays) {
    if (arrays.length === 0) return 0;

    let commonElements = new Set(arrays[0]);

    for (let i = 1; i < arrays.length; i++) {
        const tempSet = new Set(arrays[i]);
        commonElements = intersectSets(commonElements, tempSet);
    }

    return commonElements.size;
}

function intersectSets(setA, setB) {
    const intersection = new Set();
    for (const elem of setB) {
        if (setA.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

// Пример использования:
const arrays = [
    [1, 2, 3, 4, 5],
    [3, 4, 5, 6, 7],
    [5, 6, 7, 8, 9]
];
console.log(countUniqueCommonElements(arrays)); // Выведет: 1