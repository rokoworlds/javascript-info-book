// 5.9. Object.keys, values, entries

// Задача 1

function sumSalaries(salaries) {
    let values = Object.values(salaries);
    let result = 0

    for (let val of values) {
        result += val;
    }

    return result;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650

// Задача 2

function count(obj) {
    return Object.keys(obj).length;
}