// 5.5 Массивы

// Задача 1

let fruits = ['Apples', 'Pears', 'Oranges'];

let shoppingCart = fruits;
shoppingCart.push('Bananas');

console.log(fruits.length); 

/*
    Ответ: Длина массива будет равна 4. Массивы, будучи объектами хранятся по ссылке,
    и присваивая массив другой переменной, мы создаем еще одну ссылку на тот же массив.
    Изменение по одной ссылке повлекут за собой изменение массива, и как следствие и второй по ссылке.
*/


// Задача 2

const styles = ['Jazz', 'Blues'];

styles.push('Rock-n-roll');
styles[Math.floor(styles.length - 1) / 2] = 'Classical';
console.log(styles.shift());
styles.unshift('Rap', 'Reggae');


// Задача 3

let arr = ['a', 'b'];

arr.push(function() {
    console.log( this );
});

arr[2]();

/*
    Ответ: выведет массив ['a', 'b', f] (где f это функция как третий элемент массива).
    Так произойдет потому что массив это объект и this будет работать как при обычном вызове метода у объекта.    
*/


// Задача 4
function sumIniput() {
    const arr = [];
    let input;
    do {
        input = prompt('?', 0);
        if(input !== null && !isNaN(input)) {
            arr.push(Number(input));
        }
    } while (input !== null && !isNaN(input));

    let answer = arr.reduce((sum, el) => sum + el, 0);
    return answer;
}