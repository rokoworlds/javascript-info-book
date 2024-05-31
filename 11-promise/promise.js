// 11.2 Promise basics

// Задача 1

let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert); // 1. Принимается только первый resolve

// Задача 2

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => alert('выполнилось через 3 секунды'));


  // 11.4 Обработка ошибок

  new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(alert);


  // 11.8 async / await

// Задача 1

async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)
  
    if (response.status == 200) {
      let json = await response.json(); // (3)
      return json;
    }
  
    throw new Error(response.status);
  }
  
  loadJson('no-such-user.json')
    .catch(alert); // Error: 404 (4)


// Задача 2


class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  }
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
  async function demoGithubUser() {
  
    let user;
    while(true) {
      let name = prompt("Введите логин?", "iliakan");
  
      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break; // ошибок не было, выходим из цикла
      } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
          // после alert начнётся новая итерация цикла
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        } else {
          // неизвестная ошибка, пробрасываем её
          throw err;
        }
      }
    }
  
  
    alert(`Полное имя: ${user.name}.`);
    return user;
  }
  
  demoGithubUser();

// Задача 3

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    // покажет 10 через 1 секунду
    wait().then(result => alert(result));
  }
  
  f();


  //////

  // 1. callback
const add = (a, b, callback) => {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
      callback(new Error('Invalid arguments'));
      return;
  }
  callback(null, a + b);
};

const res = add(2, 3, (error, result) => {
  if (error) console.error(error);
  console.log({result});
});


// 2 Promise

new Promise((resolve) => {
  console.log(1);
  resolve(2);
}).then(result => console.log(result))

console.log(3);

// 1 3 2