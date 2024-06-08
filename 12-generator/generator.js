// 12.1 Генераторы

/*
Задачей является создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.
next = previous * 16807 % 2147483647
*/

function* pseudoRandom(seed) {
    let value = seed;
    while (true) {
        value = value * 16807 % 2147483647;
        yield value;
    }
}

let generator = pseudoRandom(1);

console.log(generator.next().value);


// 

// 1.
{

function *createFlow() {
    const num = 10;
    const newNum = yield num;
    yield 5 + newNum;
    yield 6;
}

const returnNextEl = createFlow();
const el1 = returnNextEl.next(); // 10
const el2 = returnNextEl.next(2); // 7

}



// 2


{
function doWhenDataReceived(value) {
    returnNextElement.next(value);

}

function* createFlow() {
    const promise = new Promise((resolve) => setTimeout(() => resolve('hello'), 1000));
    const data = yield promise;
    console.log(data);
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next().value;

futureData.then(doWhenDataReceived);


}

// 3 same but with async/await

{
    async function createFlow() {
        console.log('First!');
        const promise = new Promise((resolve) => setTimeout(() => resolve('Third!'), 1000));
        const data = await promise;
        console.log(data);
    }


    createFlow(); 

    console.log('Second!')

}
// CHALLENGES

// Iterator Function

function createFunction(array) {
    let i = 0;
    function inner() {
        const element = array[i];
        i++;
        return element;
    }

    return inner;
}

const returnNextElement = createFunction([3, 4, 5]);

const element1 = returnNextElement();
const element2 = returnNextElement();


/*
Challenge 1
A) Create a for loop that iterates through an array and returns the sum of the elements of the array.
B) Create a functional iterator for an array that returns each value of the array when called, one element at a time.
*/

function sumFunc(arr) {
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    return sum;
  }
  
  const array = [1, 2, 3, 4];
  console.log(sumFunc(array)); // -> should log 10
  

  function returnIterator(arr) {
    // YOUR CODE HERE
    let i = 0;
    function next() {
        const element = arr[i];
        i++;
        return element;
    }

    return next;
  }
  
  const array2 = ['a', 'b', 'c', 'd'];
  const myIterator = returnIterator(array2);
  console.log(myIterator()); // -> should log 'a'
  console.log(myIterator()); // -> should log 'b'
  console.log(myIterator()); // -> should log 'c'
  console.log(myIterator()); // -> should log 'd'



/*
Challenge 2
Create an iterator with a next method that returns each value of the array when .next is called.
*/

    function nextIterator(arr) {
        // YOUR CODE HERE
      let i = 0;
      const iterator = {
        next: function () {
            const element = arr[i];
            i++;
            return element
        }
      }

      return iterator;
      }
      
      const array3 = [1, 2, 3];
      const iteratorWithNext = nextIterator(array3);
      console.log(iteratorWithNext.next()); // -> should log 1
      console.log(iteratorWithNext.next()); // -> should log 2
      console.log(iteratorWithNext.next()); // -> should log 3

/*
Challenge 3
Write code to iterate through an entire array using your nextIterator and sum the values.
*/

function sumArray(arr) {
    // use your nextIterator function
    let sum = 0;
    let iterator = nextIterator(arr);
    let next = iterator.next();

    while(next) {
        sum += next;
        next = iterator.next()
    }
    return sum;
  }

  const array4 = [1, 2, 3, 4];
  console.log(sumArray(array4)); // -> should log 10


/*
Challenge 4
Create an iterator with a next method that returns each value of a set when .next is called
*/

function setIterator(set) {
    let setIterator = set.values();
    const iterator = {
        next: function() {
            let next = setIterator.next();
            return next['value'];
        }
    }
    return iterator;
  }


  const mySet = new Set('hey');
  const iterateSet = setIterator(mySet);
  console.log(iterateSet.next()); // -> should log 'h'
  console.log(iterateSet.next()); // -> should log 'e'
  console.log(iterateSet.next()); // -> should log 'y'
  

/*
GPT Task
Реализация асинхронного генератора для обработки данных.
Требования:
Асинхронный генератор: Реализуй асинхронный генератор async function* processData(data) для обработки массива данных data.
Имитировать асинхронные операции: Используй setTimeout или Promise для имитации асинхронной операции над каждым элементом массива.
Обработка данных: Для каждого элемента массива выполняй имитацию асинхронной операции (например, увеличение значения на 1 с задержкой).
Вывод результатов: Используй for await...of для итерации по результатам работы асинхронного генератора и вывода обработанных данных в консоль.
*/


const data = [1, 2, 3, 4, 5];

function asyncOperation(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num + 1);
        }, 1000)
    } )
}

async function* processData(data) {
    for (let el of data) {
        let result = await asyncOperation(el);
        yield result;
    }
}

(async () => {
    for await (let result of processData(data)) {
        console.log(result);
    }
})();