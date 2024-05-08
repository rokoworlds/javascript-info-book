/*
Challenge 1
Create a function createFunction that creates and returns a function. 
When that created function is called, it should print "hello". 
When you think you completed createFunction, un-comment out those 
lines in the code and run it to see if it works.
*/

function createFunction() {
    function sayHello() {
        console.log('hello');
    }

    return sayHello;
}

const function1 = createFunction();
function1(); // => should console.log('hello');


/*
Challenge 2
Create a function createFunctionPrinter that accepts one input and returns a function. 
When that created function is called, it should print out the input that was used when the function was created.
*/

function createFunctionPrinter(input) {
    function print() {
        console.log(input)
    }

    return print;
}

const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


/*
Challenge 3
Examine the code for the outer function. 
Notice that we are returning a function and that function is using variables that are outside of its scope.
Uncomment those lines of code. Try to deduce the output before executing. 
*/

function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter () {
      counter ++;
      console.log('counter', counter);
    }
    return incrementCounter;
  }
  
  const willCounter = outer();
  const jasCounter = outer();
  
  // Uncomment each of these lines one by one.
  // Before your do, guess what will be logged from each function call.
  
  // /*** Uncomment these to check your work! ***/
  willCounter();
  willCounter();
  willCounter();
  
  jasCounter();
  willCounter();
  
  // Now we are going to create a function addByX that returns a function that will add an input by x.
  
  function addByX(x) {
    function add(num) {
        return num + x;
    }

    return add;
  }
  
  // /*** Uncomment these to check your work! ***/
  const addByTwo = addByX(2);
  addByTwo(1); // => should return 3
  addByTwo(2); // => should return 4
  addByTwo(3); // => should return 5
  
  const addByThree = addByX(3);
  addByThree(1); // => should return 4
  addByThree(2); // => should return 5
  
  const addByFour = addByX(4);
  addByFour(4); // => should return 8
  addByFour(5); // => should return 9


/*
Challenge 4
Write a function once that accepts a callback as input and returns a function. 
When the returned function is called the first time, it should call the callback and return that output. 
If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
*/

function once(func) {
    let used = false;
    let res;
    function useFunc(num) {
        if (!used) {
            used = true;
            res = func(num);
            return res;
        } else {
            return res;
        }
    }

    return useFunc;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6


/*
Challenge 5
Write a function after that takes the number of times the callback needs to be called before being
executed as the first parameter and the callback as the second parameter.
*/

function after(count, func) {
    let callCount = 0;
    function print() {
        callCount++;

        if (callCount >= count) {
            return func();
        } 

        return;
    }

    return print;
}


const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed



/*
Challenge 6
Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter.
Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
*/

function delay(callback, wait, ...args) {
    setTimeout(() => callback(...args), wait);
}

const cb = function(...params){ console.log("called!", ...params) };
delay(cb, 1000); // "called!" printed after 1000 ms
delay(cb, 2000, "param1", "param2"); // "called! param1 param2" printed after 2000 ms


/*
Challenge 7
Write a function rollCall that accepts an array of names and returns a function.
The first time the returned function is invoked, it should log the first name to the console.
The second time it is invoked, it should log the second name to the console, and so on, until all names have been called.
Once all names have been called, it should log 'Everyone accounted for'.
*/

function rollCall(names) {
    let count = 0;
    function print() {
        if (count >= names.length) {
            return console.log('Everyone accounted for');
            
        }
        console.log(names[count]);
        count++;
    }

    return print;

}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'


/*
Challenge 8
Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). 
saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. 
When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.
*/

function saveOutput(func, magicWord) {
    let cache = {};
    function print(arg) {
        if (arg === magicWord) {
            return cache;
        }

        cache[arg] = func(arg);

        return func(arg);
    }

    return print;
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }