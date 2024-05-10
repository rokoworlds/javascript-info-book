// Замыкание

// Задача 1

let name1 = "John";

function sayHi() {
  alert("Hi, " + name1);
}

name1 = "Pete";

sayHi();

// Вернет имя Pete. 


// Задача 2

function makeWorker() {
    let name2 = "Pete";
  
    return function() {
      alert(name2);
    };
  }
  
  let name2 = "John";
  
  // создаём функцию
  let work = makeWorker();
  
  // вызываем её
  work(); // что будет показано?

  // Вернет имя Pete.


  // Задача 3

  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  alert( counter2() ); // 0
  alert( counter2() ); // 1



  // Задача 4

  function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter4 = new Counter();
  
  alert( counter4.up() ); // 1
  alert( counter4.up() ); // 2
  alert( counter4.down() ); // 1


  // Задача 5

  let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // Hello, John


// Задача 6

function sum(num1) {
    return function(num2) {
        return num1 + num2;
    }
}

console.log(sum(1)(2));


// Задача 7

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func(); // ReferenceError



// Задача 8

function inBetween(num1, num2) {
    function check(element) {
        if (element >= num1 && element <= num2) {
            return element;
        }

        return;
    }

    return check;
}

function inArray(arr) {
    function check(element) {
        if (arr.includes(element)) {
            return element;
        }

        return;
    }

    return check;
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2


// Задача 9

let users = [
    { name: "Иван", age: 20, surname: "Иванов" },
    { name: "Пётр", age: 18, surname: "Петров" },
    { name: "Анна", age: 19, surname: "Каренина" }
  ];

  function byField(type) {
    return (a, b) => a[type] > b[type] ? 1 : -1
  }

  console.log(users.sort(byField('name')));
  console.log(users.sort(byField('age')));


  // Задача 10

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let number = i
    let shooter = function() { // функция shooter
      alert( number ); // должна выводить порядковый номер
    };
    shooters.push(shooter); // и добавлять стрелка в массив
    i++;
  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.