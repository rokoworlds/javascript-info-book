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