// 3.1 Объекты

// // Задача 1
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name
console.log(user)

// // Задача 2
function isEmpty(obj) {
    for (let key in obj) {
        return true;
    }
    return false;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// Задача 3
const user = {
    name: "John"
  };
  // это будет работать?
  user.name = "Pete";

//   // да, так как меняется не сам объект, а его свойства.

// // Задача 4
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0; 
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum)

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



// 4.4 Методы объекта, this
// Задача 1
function makeUser() {
    return {
        name: 'John',
        ref: this,
    };
}

let user = makeUser();

alert(user.ref.name);

// результатом будет ошибка, потому что в данном случае this будет равно undefined

// Задача 2

let calculator = {
    a: 0,
    b: 0,
    res: 0,
    read() {
        this.a = +(prompt('a?'));
        this.b = +(prompt('b?'));
        return this
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b
    }

}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

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

// MDN Object.assign() examples

// syntax

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

console.log(target);

const returnedTarget = Object.assign(target, source);

console.log(target);
console.log(target === returnedTarget);

// cloning

const obj = { a: 1 };
const copy = Object.assign({}, obj);

console.log(copy)

// merging objects with same properties

const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const oMerged = Object.assign(o1, o2, o3); 

console.log(o1) // {a: 1, b: 2, c: 3}
console.log(o2) // {b: 2, c: 2}
console.log(o3) // {c: 3}

// primitives

const v1 = 'abc';
const v2 = true;
const v3 = 10;

const oPrimitives = Object.assign({}, v1, null, v2, undefined, v3);

console.log(oPrimitives);

// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.


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







// 4.5 Конструктор, оператор new

// Задача 1

let sameObject = {};

function A() {return sameObject};
function B() {return sameObject};

let a = new A();
let b = new B();

console.log(a == b) // true

// Задача 2

function Calculator() {
    let a;
    let b;

    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }
}


let newCalculator = new Calculator();
newCalculator.read();

console.log( "Sum=" + newCalculator.sum() );
console.log( "Mul=" + newCalculator.mul() );

// Задача 3

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('your num?', 0);
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value)


// 4.7 Symbol

// Задачка
/*
 Вам необходимо реализовать функцию, которая добавляет уникальный идентификатор к каждой задаче. 
 Используйте символы (Symbol) для создания этих уникальных идентификаторов.
*/

function Task(description) {
    this.id = Symbol();
    this.description = description;
    this.completed = false;
}

const task1 = new Task('Покорми кота');
const task2 = new Task('Поешь сам');

console.log(task1.id === task2.id); // Вернет false так как все символы уникальны.



// 4.8. Преобразование объектов

let user = {
    name: 'John',
    money: 1000,
    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == 'string' ? `{name: '${this.name}'}` : this.money;
    }
};

console.log(user); // string {name: "John"}
console.log(+user); // number 1000
console.log(user + 500); // number 1500