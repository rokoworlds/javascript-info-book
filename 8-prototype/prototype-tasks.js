// Реализовать forEach на прототипах

Array.prototype.myForEach = function(func, thisArg) {
    if (typeof func !== 'function') {
        throw new TypeError(func + 'is not a function');
    }

    const len = this.length;

    for (let i = 0; i < len; i++) {
        func.call(thisArg, this[i], i, this);
    }
};


const arr = [1, 2, 3, 4, 5];
arr.myForEach(function(element, index, array) {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});



// Реализовать map на прототипах

Array.prototype.myMap = function (func, thisArg) {
    if (typeof func !== 'function') {
        throw new TypeError(func + 'is not a function');
    } 

    const len = this.length;
    let result = [];

    for (let i = 0; i < len; i++) {
        result[i] = func.call(thisArg, this[i], i, this);
    }

    return result;
}

const arr2 = [1, 2, 3, 4, 5];
const newArr2 = arr2.myMap((num) => num + 1);

console.log(newArr2); // [2, 3, 4, 5, 6]



// Реализовать reduce на прототипах

Array.prototype.myReduce = function(func, initialValue) {
    if (typeof func !== 'function') {
        throw new TypeError(func + ' not a funciton');
    }

    const len = this.length;
    let accumulator = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < len; i++) {
        accumulator = func(accumulator, this[i], i, this)
    }

    return accumulator;
}

const arr3 = [1, 2, 3, 4, 5];
const sum = arr3.myReduce((acc, num) => acc + num, 0);

console.log(sum);


// MDN Guide

function User(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = [...interests];
};

const user1 = new User('Bob', 'Bobinsky', 30, 'male', ['music', 'running']);

const admin1 = Object.create(user1);

console.log(admin1.name) // {first: 'Bob', last: 'Bobinsky'}

// how .constructor works

console.log(user1.constructor) // logs User constructor funciton

const user2 = new user1.constructor('Lola', 'Lolinsky', 30, 'female', ['gaming', 'dancing']); // creates new user using User

console.log(user2.constructor.name); //  User


User.prototype.greetings = function() {
    console.log(this.name.first + ' solutes you!');
};

user1.greetings() // Bob solutes you!
user2.greetings() // Lola solutes you!



// Leetcode tasks

// 2619

/**
Write code that enhances all arrays such that you can call the array.last() method 
on any array and it will return the last element. 
If there are no elements in the array, it should return -1.
You may assume the array is the output of JSON.parse.
 */

Array.prototype.last = function() {
    if (!this.length) return -1;
    return this[this.length - 1];
}

// 2631

/**
Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.
The provided callback fn will accept an item in the array and return a string key.
The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
Please solve it without lodash's _.groupBy function.
 */


  Array.prototype.groupBy = function(fn) {
    const result = {};

    for (let obj of this) {
        let key = fn(obj);

        if (!result.hasOwnProperty(key)){
            result[key] = [];
        }

        result[key].push(obj);
    }

    return result;
};