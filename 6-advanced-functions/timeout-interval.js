// 6.8 Планирование setTimeout и setInterval

// Задача 1
// v1
function printNumbers1(from, to) {
    let current = from;

    const timerId = setInterval(() => {
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000)
}

printNumbers1(1, 3);


//v2
function printNumbers2(from, to) {
    let current = from;

    setTimeout(function step() {
        console.log(current);
        if (current < to) {
            setTimeout(step, 1000);
        }
        current++;
    }, 1000)
}

printNumbers2(1, 3);


// Задача 2

/**
В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное 
вычисление, для завершения которого требуется более 100 мс.

Когда будет выполнена запланированная функция?

1. После цикла.
2. Перед циклом.
3. В начале цикла.

Что покажет alert?
 */

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}

// Вызов будет после цикла. i = 100000000.