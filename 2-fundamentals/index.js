// 2.10 Условное ветвление: if, '?';

// 3адача 1

// if ('0') {
//     console.log('Hello');
// }

/* 
JS приобразует строку "0" правдивому значению (true), 
так как это не число 0 и не пустая строка. 
Т.к. результат условия в скобках true, выполняется блок кода.
*/

// Задача 2

// const answer2 = prompt('Какое "официальное" название JavaScript?');

// if  (answer2 === 'ECMAScript') {
//     alert('Верно!');
// } else {
//     alert('Не знаете? “ECMAScript”!')
// }

// Задача 3

// const answer3 = prompt('enter a number', 0);

// if (answer3 > 0) {
//     alert(1);
// } else if (answer3 < 0) {
//     alert(-1);
// } else {
//     alert(0)
// }

// Задача 4
// const a = 1;
// const b = 13;
// const result = (a + b < 4) ? "Мало" : "Много";
// console.log(result);

// Задача 5
// const login = 'Директор';
// const message = (login == 'Сотрудник') ? 'Привет' : 
// (login == 'Директор') ? 'Здравствуйте' : 
// (login == '') ? 'Нет логина' :
// '';
// console.log(message)


// 2.11 Логические операторы

// Задачи 1 - 5

// alert(null || 2 || undefined); // 2
// alert(alert(1) || 2 || alert(2)); // alert returns undefined, so 1, 2
// alert(1 && null && 2); // null
// alert(alert(1) && alert(2)); // alert returns undefined, 1, undefined
// alert(null || 2 && 3 || 4); // 3

// Задача 6

// let value = NaN;

// value &&= 10; // NaN
// value ||= 20; // 20
// value &&= 30; // 30
// value ||= 40; // 30

// alert(value);

// Задача 7

// const age7 = 33;

// if (age7 >= 14 && age7 <= 90) {
//     console.log('Welcome');
// }


// Задача 8
// const age8var1 = 33;

// // var 1

// if (!(age8var1 >= 14 && age8var1 <= 90)) {
//     console.log('Welcome');
// }

// // var 2

// if (age8var1 < 14 || age8var1 > 90) {
//     console.log('Welcome');
// }

// Задача 9

// if (-1 || 0) alert( 'first' ); // yeah
// if (-1 && 0) alert( 'second' ); // nope
// if (null || -1 && 1) alert( 'third' ); // yep

// Задача 10

// const login = prompt('Кто там?', '');

// if (login === 'Админ') {
//     const pass = prompt('Пароль?', '');

//     if (pass === 'Я Главный') {
//         alert('Здравствуйте!');
//     } else if (pass === '' || pass === null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }
// } else if (login === '' || login === null) {
//     alert('Отменено');
// } else {
//     alert('Вы кто такие? Я вас не звал!');
// }


// 2.12 Циклы while и for

// // Задача 2
// let i1 = 0;
// while (++i1 < 5) alert( i1 );
// // 1, 2, 3, 4 - так как сначала происходит увеличение, а потом сравнение.

// let i2 = 0;
// while (i2++ < 5) alert( i2 );
// // 1, 2, 3, 4, 5 - так как просходит сравнение с предыдущим значением, а после увеличение.

// // Задача 5
// for (let i = 0; i < 5; i++) alert( i );
// // 0, 1, 2, 3, 4

// for (let i = 0; i < 5; ++i) alert( i );
// 0, 1, 2, 3, 4
// одинаково в обоих случаях, так как увеличение i происходит отдельно от сравнения.

// // Задача 6
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// // Задача 7
// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }

// Задача 8
// let num;
// do {
//     num = prompt('Enter a number bigger than 100', 0);
// } while (num < 100 && num)

// Задача 9
// const n = 10;
// next:
// for (let i = 2; i <= n; i++) {

//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) continue next;
//     }
//     console.log(i);
// }


// 2.13 Конструкция 'switch'
// Задача 1
// const browser = 'Safari';

// if (browser === 'Edge') {
//     alert("You've got the Edge!");
// } else if (
//     browser === 'Chrome' 
//     || browser === 'Firefox' 
//     || browser === 'Safari' 
//     || browser === 'Opera'
// ) {
//     alert('Okay we support these browsers too')
// } else {
//     alert('We hope that this page looks ok!')
// }

// Задача 2
// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }


// 2.15 Функции

// Задача 2
function checkAge1(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge2(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

// Задача 3
function min(a,b) {
    return (a > b) ? b : a
}

// Задача 43
function pow(x, n) {
    return x ** n;
}

const customX = prompt('x?');
const customN = prompt('n?');

if (customN >= 1 && customN % 1 === 0) {
    alert (pow(customX, customN));
} else  {
    alert(`Степень ${customN} не поддерживается, используйте натуральное число`);
}
