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