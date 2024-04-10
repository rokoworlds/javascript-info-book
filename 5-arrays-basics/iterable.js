let range = {
    from: 1,
    to: 5,
};

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

for (let num of range) {
    console.log(num);
};


// __________________________________________________________________

let range2 = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return {done: true};
        }
    }
};

for (let num of range2) {
    console.log(num);
}

// __________________________________________________________________


let str = 'hello';

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next // что за методы throw* и return*
    if (result.done) break;
    console.log(result.value); // h e l l o
}


// __________________________________________________________________

const user = {
    firstName: 'Bob',
    lastName: 'Bobinski',
    age: 30,
    city: 'London',
    zip: 1234,

    [Symbol.iterator]() {
        const keys = Object.keys(this); // ['firstName', 'lastName', 'age', 'city', 'zip'];
        let counter = 0;
        const context = this; // есть ли другие варианты?
        return {
            next() {
                if (counter < keys.length) {
                    return {
                        done: false,
                        value: context[keys[counter++]]
                    }
                }
                return {done: true}
            }
        }
    }
}

for (let value of user) {
    console.log(value);
}

const userInfo = Array.from(user); 

console.log(userInfo) // (5) ['Bob', 'Bobinski', 30, 'London', 1234]

// __________________________________________________________________


const arrLikeNums = {
    0: 2,
    1: 4,
    2: 6,
    length: 3,

    // не будет length или неупорядоченные ключи - не сработает
}

let arrNums = Array.from(arrLikeNums);

console.log(arrNums); // [2, 4, 5]

let arrNumMult = Array.from(arrLikeNums, num => num * 2);
console.log(arrNumMult); // [4, 8, 12]