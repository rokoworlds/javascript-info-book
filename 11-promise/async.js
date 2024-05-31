// 11.8 async await

// Задача 1
async function loadJson(url) {
        let response = await fetch(url);
        if (response.status === 200) {
            let json = await response.json();
            return json;
        }
        throw new Error(response.status);
    }
  
  loadJson('no-such-user.json')
    .catch(console.log); // Error: 404


// Задача 2

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let response = await fetch(url)
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


// Задание 3

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    // покажет 10 через 1 секунду
    wait().then(result => alert(result));
  }
  
  f();

///////



// 1

function getFile(file) {
	return new Promise(function(resolve){
		fakeAjax(file,resolve);
	});
}

async function loadFiles(files) {
	// request all files concurrently
    const promises = files.map(getFile);

	// print in order, sequentially
    for (let p of promises) {
        console.log(await p)
    }
}

loadFiles(["file1","file2","file3"]);


// **************************************


function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

// GPT task

/*
Работа с асинхронным кодом и API
Напиши асинхронную функцию, которая будет выполнять следующие шаги:
Получить список всех пользователей.
Для каждого пользователя получить его задачи (todos).
Вывести в консоль список пользователей с их задачами.
*/

async function getUsersAndTodos() {
    try {
        let usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await usersResponse.json();

        for (let user of users) {
            let todosResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`);
            let todos = await todosResponse.json();
            console.log(`User:${user.name}`);
            console.log('Todos:', todos);
        }
    } catch {
        console.error('Error: ', error);
    }
}

getUsersAndTodos();