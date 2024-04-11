// 5.8 WeakMap & WeakSet

// Задача 1
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let readedMessages = new WeakSet();

readedMessages.add(messages[0]);

// Задача 2

let readedMessagesTime = new WeakMap();

readedMessagesTime.add(messages[0], time)



/*
GPT Task

Предположим, у вас есть приложение для управления задачами. 
Каждая задача имеет свой уникальный идентификатор (например, строку) 
и статус (например, "выполнена" или "не выполнена").

Вам нужно создать систему для хранения статуса выполнения каждой задачи, 
при этом не удерживая ссылки на сами задачи, чтобы избежать утечек памяти.
*/ 

const taskStatus = new WeakMap();

function setTaskStatus(task, status) {
    taskStatus.set(task, status);
}

function getTaskStatus(task) {
    taskStatus.get(task);
}

let task1 = {id: 'task1'};
let task2 = {id: 'task2'};

setTaskStatus(task1, 'выполнена');
setTaskStatus(task2, 'не выполнена');

task1 = null;

console.log(taskStatus) // WeakMap {{…} => 'не выполнена'} т.е. первая таска удалилась автоматически.

/*
GPT Task

Представьте, что у вас есть приложение для учета пользователей. 
Каждый пользователь имеет уникальный идентификатор (например, число или строка).
Вы хотите создать механизм для отслеживания уникальных пользователей, 
но при этом не хранить сами объекты пользователей напрямую, чтобы избежать утечек памяти.
*/


const uniqueUsers = new WeakSet();

function addUser(user) {
    if (!uniqueUsers.has(user)) {
        uniqueUsers.add(user);
        console.log(`Пользователь ${user.name} добавлен`)
    } else {
        console.log(`Пользователь ${user.name} уже зарегистрирован`)
    }
}

let user1 = {name: 'Raph', status: 'Badass'};
let user2 = {name: 'Leo', status: 'Team lead'};
let user3 = {name: 'Mike', status: 'Pizza lover'};

addUser(user1);
addUser(user2);
addUser(user3);
addUser(user3);

user2 = null;

console.log(uniqueUsers);