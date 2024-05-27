// 8.1 Class
{
function Clock({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
}
// Перепишите Clock, используя современный синтаксис классов.

class Clock {
    constructor ({template}) {
        this.template = template;
    }

    render() {
        let date = new Date();
    
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
    
        console.log(output);
      }

      stop() {
        clearInterval(this.timer);
      };
    
      start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
      };
}

let clock = new Clock({template: 'h:m:s'});
clock.start();


// 8.2. Class Inheritance

// Задача 1

// Исправьте ошибку.
{
  class Animal {
  
      constructor(name) {
        this.name = name;
      }
    
    }
    
    class Rabbit extends Animal {
      constructor(name) {
        this.name = name;
        this.created = Date.now();
      }
    }
    
    let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
    console.log(rabbit.name);
  }
  
  // исправленный
  
  {
      class Animal {
  
          constructor(name) {
            this.name = name;
          }
        
        }
        
        class Rabbit extends Animal {
          constructor(name) {
            super(name); // дочерний класс вызывает супер, ошибка пропадает
            this.name = name;
            this.created = Date.now();
          }
        }
        
        let rabbit = new Rabbit("Белый кролик"); 
        console.log(rabbit.name);
  }
  
  // Задача 2
  
  class Clock {
      constructor({ template }) {
        this.template = template;
      }
    
      render() {
        let date = new Date();
    
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
    
        console.log(output);
      }
    
      stop() {
        clearInterval(this.timer);
      }
    
      start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
      }
    }
  
  
    class ExtendedClock extends Clock {
      constructor(optoins) {
          super(optoins);
          let {precision = 1000} = optoins;
          this.precision = precision;
      }
  
      start() {
          this.render();
          this.timer = setInterval(() => this.render(), this.precision);
      }
    }
  
    