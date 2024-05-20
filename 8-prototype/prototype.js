// 8.1 [[Prototype]]

// Задача 1

let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  alert( rabbit.jumps ); // true (1)
  
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // null (2)
  
  delete animal.jumps;
  
  alert( rabbit.jumps ); // undefined (3)


// Задача 2

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3
  };
  
  let bed = {
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    money: 2000
  };

  table.__proto__ = head;
  bed.__proto__ = table;
  pockets.__proto__ = bed;

// Задача 3

let animal3 = {
  eat() {
    this.full = true;
  }
};

let rabbit3 = {
  __proto__: animal
};

rabbit3.eat();

// свойство full получит rabbit


// Задача 4

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple


// 8.2 F.prototype

// Задание 1

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit821 = new Rabbit();

alert( rabbit821.eats ); // true

// 

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit822 = new Rabbit();

Rabbit.prototype = {};

alert( rabbit822.eats ); // true

//

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit823 = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit823.eats ); // false

//

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit824 = new Rabbit();

delete rabbit824.eats;

alert( rabbit824.eats ); // true

//

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit825 = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit825.eats ); // undefined


// Задание 2

function User(name) {
  this.name = name;
}

let user = new user.constructor("Bob");

console.log (user.name) // Bob


// 8.3 Native prototypes

// Задание 1

Function.prototype.defer = function(wait) {
      setTimeout(this, wait);
}

function f() {
  console.log("Hello!");
}


f.defer(1000); // выведет "Hello!" через 1 секунду

// Задание 2

Function.prototype.defer = function(wait) {
  let f = this;
  function func(...args) {
    setTimeout(() => f.apply(this, args), wait);
  }

  return func;
}

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.


// 8.4 Prototype Methods

// Задача 1

let dictionary = Object.create(null);

Object.defineProperty(dictionary, 'toString', {
  value: function() {
    Object.keys(this).join(',');
  },
  enumerable: false,
})

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"


// Задача 2

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit842 = new Rabbit("Rabbit");


rabbit842.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit842).sayHi(); // undefined
rabbit842.__proto__.sayHi(); // undefined