/*
Challenge 2
Create a function delayedGreet that console logs welcome after 3 seconds.
*/

function delayedGreet() {
    setTimeout(() => console.log('Welcome'), 3000);
}

delayedGreet();

/*
Challenge 3
Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds.
*/

function helloGoodbye() {
    console.log('hello');

    setTimeout(() => console.log('good bye'), 2000);
}

helloGoodbye();


/*
Challenge 4
Create a function brokenRecord that console logs hi again every second. Use the End Code button to stop the console logs when you are satisfied that it is working.
*/

function brokenRecord() {
    setInterval(() => console.log('hi'), 1000);
}

brokenRecord();

/*
Challenge 5
Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.
*/

function limitedRepeat() {
    let timerId = setInterval(() => console.log('hi'), 1000);

    setTimeout(() => clearInterval(timerId), 5000);

}

limitedRepeat();


/*
Challenge 6
Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, and another number duration.
everyXsecsForYsecs will execute the given function every interval number of milliseconds, but then automatically stop after duration milliseconds.

*/

function everyXsecsForYsecs(func, interval, duration) {
    let timerId = setInterval(func, interval * 1000);

    setTimeout(() => clearInterval(timerId), duration * 1000)
}


function theEnd() {
  console.log('This is the end!');
}

everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds: This is the end!


/*
Challenge 7
Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.

When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.
*/

function delayCounter(target, wait) {
    let counter = 1;
    function print() {
       let timerId = setInterval(() => {
        if (counter <= target) {
            console.log(counter);
            counter++;
        } else {
            clearInterval(timerId)
        }
       }, wait)

    }

    return print;
}

const countLogger = delayCounter(3, 1000)
countLogger();

