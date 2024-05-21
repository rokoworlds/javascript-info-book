/**
  1) Объясните, что будет выведено в консоль и почему.
    @description В блоке "ОТВЕТ" нужно описать поведение "this" или почему ответ именно такой.
*/
{
    // а)
    function showThis() {
      console.log(this);
    }
    showThis();
    /*
      Ответ: 
    window
    */
  }
  
  {
    // б)
    const person = {
      name: "Alice",
      showName: function () {
        console.log(this.name);
      },
    };
    person.showName();
    /*
      Ответ: 
        Alice
    */
  }
  
  {
    // в)
    const person1 = {
      name: "Bob",
      showName: () => {
        console.log(this.name);
      },
    };
    person1.showName();
    /*
      Ответ: 
    window.name = ''
    */
  }
  
  {
    // г)
    const course111 = {
      title: "JavaScript",
      duration: "3 months",
      getInfo() {
        const foo = () => {
          const bar = () => {
            const dodo = () => {
              console.log(this);
            };
  
            dodo();
          };
  
          bar();
        };
  
        foo();
      },
    };
    course111.getInfo();
    /*
      Ответ: title: 'JavaScript', duration: '3 months',
    */
  }
  
  {
    // д)
    function Person(name) {
      this.name = name;
    }
    const john = new Person("John");
    console.log(john.name);
    /*
      Ответ: John
    */
  }
  
  ///
  ///
  ///
  ///
  /** 
    2) Потеря контекста.
    @description Какой будет результат вывоза функции?
    @description В блоке "ОТВЕТ" нужно описать поведение "this" или почему ответ именно такой.
  */
  
  {
    // а)
    const person2 = {
      name: "Carol",
      showName: function () {
        console.log(this.name);
      },
    };
    const show = person2.showName;
    show(); // ???
    /*
      Ответ: window.name = ''
        
    */
  }
  
  {
    // б)
    const calculator = {
      value: 100,
      increment() {
        return this.value + 1;
      },
    };
    const incrementValue = calculator.increment;
    console.log(incrementValue()); // ???
    /*
      Ответ: undefined + 1 = NaN
  
    */
  }
  
  {
    // в)
    const library = {
      name: "City Library",
      books: ["Book1", "Book2"],
  
      showBooksDelayed() {
        setTimeout(() => {
          this.books.forEach(function (book) {
            console.log(`${book} is available at ${this.name}`);
          });
        }, 1000);
      },
    };
    library.showBooksDelayed(); // ???
    /*
      Ответ: 
      Book1 is available at ''
      Book2 is available at ''
  
    */
  }
  
  {
    // Г)
    const manager = {
      employees: ["Alice", "Bob"],
      getEmployeeList() {
        return this.employees.map((employee) => `${employee} works here.`);
      },
    };
  
    function printEmployeeList(getListFn) {
      console.log(getListFn());
    }
  
    printEmployeeList(manager.getEmployeeList); // ???
    /*
      Ответ: TypeError, потому что попробуем применить метод map к undefined
  
    */
  }
  
  {
    // Д)
    const course = {
      title: "JavaScript",
      duration: "3 months",
      getInfo() {
        console.log(`Course: ${this.title}, Duration: ${this.duration}`);
      },
    };
  
    function executeCallback(callback) {
      callback();
    }
  
    executeCallback(course.getInfo.call(course)); // ???
    executeCallback(course.getInfo.bind(course)); // ???
    /*
      Ответ: 
      1) Course: JavaScript, Duration: 3 months (вызов через call) + TypeError потому что пытаемся вызвать строку
      2) Course: JavaScript, Duration: 3 months без ошибок
  
    */
  }
  
  // Е)
  {
    const someObject = {
      title: "ЭКНЦИКЛОПЕДИЯ",
      outerMethod: function () {
        const innerArrowFunction = () => {
          console.log("title:", this.title);
        };
  
        innerArrowFunction();
      },
    };
  
    someObject.outerMethod(); // ???
  
    const newOuterMethod = someObject.outerMethod;
    newOuterMethod(); //
    /*
      Ответ: 
      Первый вызов: title: ЭКНЦИКЛОПЕДИЯ
      Второй вызов: title: undefined
    
    */
  }
  
  {
    // Ж)
    function Person(name) {
      this.name = name;
  
      this.arrowFunction = () => {
        console.log("name:", this.name);
      };
    }
  
    const john1 = new Person("John");
    john1.arrowFunction(); // ??? John
  
    const extractedArrow = john1.arrowFunction;
  
    extractedArrow(); // ??? John
    /*
    Ответ: 
  
  */
  }
  