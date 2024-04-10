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