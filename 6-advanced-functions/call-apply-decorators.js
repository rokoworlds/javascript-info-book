// 6.9 Декораторы, call, apply

// Задача 1

function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}


function work(a, b) {
    alert( a + b ); // произвольная функция или метод
  }
  
  work = spy(work);
  
  work(1, 2); // 3
  work(4, 5); // 9
  
  for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }


  // Задача 2

  function delay(func, wait) {
    function print() {
      return setTimeout(() => func.apply(this, arguments), wait)
    }

    return print;
  }

  function f(x) {
    alert(x);
  }
  
  // создаём обёртки
  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);
  
  f1000("test"); // показывает "test" после 1000 мс
  f1500("test");