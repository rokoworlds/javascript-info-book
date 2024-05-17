// 6.9 Декораторы, call, apply

// Задача 1

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);

    return func.apply(...args);
  }

  wrapper.calls = [];

  return wrapper;
}


function work(a, b) {
  console.log( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}


  // Задача 2

  function delay(f, ms) {
    function wrapper() {
      setTimeout(() => f.apply(this, arguments), ms)
    }

    return wrapper;
  }


  function f(x) {
    alert(x);
  }
  
  // создаём обёртки
  let f1001 = delay(f, 1000);
  let f1500 = delay(f, 1500);
  
  f1001("test"); // показывает "test" после 1000 мс
  f1500("test"); // показывает "test" после 1500 мс



  // Задача 3

  function debounce(f, ms) {
    let timerId;
    function wrapper() {
      clearTimeout(timerId);
      timerId = setTimeout(() => f(this, arguments), ms);
    }

    return wrapper;
  }

  function log() {
    console.log('loged')
  }

  let logy = debounce(log, 2000);

  logy()
  logy() 
  logy()
  logy()


  // Задача 4

function throttle(f, ms) {
  let ready = true;
  let lastArgs;
  let lastThis;

  function wrapper() {
    if (!ready) {
      lastArgs = arguments;
      lastThis = this;
      return;
    }

    f.apply(this, arguments);

    ready = false;

    setTimeout(() => {
      ready = true;
      if(lastArgs) {
        wrapper.apply(lastThis, lastArgs);
        lastArgs = null;
        lastThis = null;
      }
    }, ms);
  }

  return wrapper;
}

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
f1000(4); // (ограничение, 1000 мс ещё нет)
f1000(5); // (ограничение, 1000 мс ещё нет)