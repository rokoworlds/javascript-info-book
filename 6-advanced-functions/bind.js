// 6.10 Привязка контекста к функции. Bind

// Задача 1

  function f() {
    ( this ); // null (with use strict) or window (without use strict)
  }
  
  let user1 = {
    g: f.bind(null)
  };
  
  user.g();


// Задача 2

function f() {
    alert(this.name);
  }
  
  f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
  
  f();

  // Вернент "Вася". Существующую привязку контекста изменить нельзя.

//  Задача 3

function sayHi() {
    alert( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "Вася"
  });
  
  alert( bound.test ); // что выведет? почему?

  // undefined - потому что this для этой функции будет полностью переписан, и свойства test не будет.


//  Задача 4

  function askPassword4(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user3 = {
    name: 'Вася',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
  };
  
  let ask = askPassword4.bind(user3, user3.loginOk, user3.loginFail);
  
  ask();


// Задача 5

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  let ask2 = askPassword.bind(user3, user3.loginOk, user3.loginFail);
  
  ask2();