

// ******************GPT Tasks******************
// Bind
/**
Задание 1
У тебя есть объект calculator, который выполняет основные арифметические операции. 
 */

const calculator = {
    value: 0,
    add: function(a) {
      this.value += a;
      return this.value;
    },
    subtract: function(a) {
      this.value -= a;
      return this.value;
    },
    multiply: function(a) {
      this.value *= a;
      return this.value;
    },
    divide: function(a) {
      if (a !== 0) {
        this.value /= a;
        return this.value;
      } else {
        console.log("Cannot divide by zero");
        return this.value;
      }
    }
  };
  
  // Функция, которая выполняет арифметическую операцию в переданном контексте
  function performOperation(operation, number) {
    return operation(number);
  }
  
  // Пример вызова функции performOperation:
  const add = calculator.add;
  console.log(performOperation(add, 5)); // Должно вывести 5, но будет ошибка, потому что this не указывает на calculator
  
  /**
Создай новые функции boundAdd, boundSubtract, boundMultiply и boundDivide, которые будут привязаны к контексту объекта calculator с помощью bind.
Используй функцию performOperation для выполнения операций add, subtract, multiply, и divide с помощью этих привязанных функций.
Убедись, что значение this внутри методов add, subtract, multiply и divide всегда указывает на объект calculator.
   */

const boundAdd = calculator.add.bind(calculator);
const boundDivide = calculator.divide.bind(calculator);
const boundMultiply = calculator.multiply.bind(calculator);
const boundSubtract = calculator.subtract.bind(calculator);


// Задание 2

/**
Задача
    Создай объект eventManager, который будет управлять списком событий. Каждое событие представлено как объект с полями id, name, и attendees (список участников). 
    Объект eventManager должен содержать методы для добавления события, удаления события, добавления участника к событию и вывода всех событий.

Требования:
Методы объекта eventManager:
    addEvent(name): добавляет новое событие с уникальным id и пустым списком участников.
    removeEvent(id): удаляет событие по id.
    addAttendee(eventId, attendeeName): добавляет участника к событию.
    listEvents(): выводит список всех событий и их участников.

Функция delayedCall:
    Эта функция должна вызывать произвольный метод объекта eventManager с задержкой.
    Функция принимает метод, задержку и аргументы для метода.

Использование bind:
    Привяжи методы объекта eventManager к его контексту с помощью bind, чтобы они корректно работали при передаче в функцию delayedCall.
 */

const eventManager = {
    events: [],
    nextId: 1,

    addEvent(name) {
        this.events.push({
            id: this.nextId++,
            name: name,
            attendees: [],
        });
    },

    removeEvent(id) {
        let index = this.events.findIndex((event) => event.id === id);
        if (index !== -1) {
            const removed = this.events.splice(index, 1);
            console.log(`Event ${removed[0].name} has been removed`);
        } else {
            console.log('No such event!')
        }
    },
    addAttendee(eventId, attendeeName) {
        let event = this.events.find((event) => event.id === eventId);
        if (event) {
            event.attendees.push(attendeeName);
            console.log(`Attendee has been added`);
        } else {
            console.log('No such event!')
        }
    },
    listEvents() {
        console.log('Current events:');
        this.events.forEach((event) => {
            console.log(`
                ${event.id})Event name: ${event.name}
                Attendees: ${event.attendees};
                `)
        })
    }
};


function delayedCall(func, delay, ...args) {
    setTimeout(() => func(...args), delay);
}

const boundAddEvent = eventManager.addEvent.bind(eventManager);
const boundRemoveEvent = eventManager.removeEvent.bind(eventManager);
const boundAddAttendee = eventManager.addAttendee.bind(eventManager);
const boundListEvents = eventManager.listEvents.bind(eventManager);

// Проверка
boundAddEvent("Conference 2024");
boundAddEvent("Workshop 2024");

boundAddAttendee(1, "Alice");
boundAddAttendee(1, "Bob");
boundAddAttendee(2, "Charlie");

delayedCall(boundRemoveEvent, 3000, 2);      // Через 3 секунды удалит событие с id 2
delayedCall(boundListEvents, 4000);          // Через 4 секунды выведет текущие события

// Начальный вывод списка событий
boundListEvents();