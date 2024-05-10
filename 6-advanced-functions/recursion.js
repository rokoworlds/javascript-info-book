// 6.1 Рекурсия

// Задача 1
// v1

function sumTo1(num) {
    let result = 0;
    for (let i = 0; i < num; i++) {
        result += i;
    }

    return result;
}

// v2

function sumTo2(num) {
    if (num === 1) {
        return 1
    } else {
        return sumTo2(num - 1) + num
    }
}


// v3

function sumTo3(num) {
    return num * (num + 1) / 2;
  }

  
// Задача 2

function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

factorial(5) // 120

// Задача 3

function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}


// Задача 4

let list4 = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

// v1

function printList1(list) {
    console.log(list.value);

    if (list.next !== null) {
        printList1(list.next)
    }
}

// v2

function printList2(list) {
    while (list !== null) {
        console.log(list.value);
        list = list.next
    }
}


// Задача 5

let list5 = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

// v1

function printListBackwards1(list) {
    if (list.next !== null) {
        printListBackwards1(list.next);
    }
    console.log(list.value);
}

// v2

function printListBackwards2(list) {
    let arr = [];

    while (list !== null) {
        arr.push(list.value);
        list = list.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}


// GPT task

let directory = {
    name: "Root",
    type: "directory",
    children: [
        {
            name: "Folder1",
            type: "directory",
            children: [
                {
                    name: "Subfolder1",
                    type: "directory",
                    children: []
                },
                {
                    name: "Subfolder2",
                    type: "directory",
                    children: []
                }
            ]
        },
        {
            name: "Folder2",
            type: "directory",
            children: [
                {
                    name: "Subfolder3",
                    type: "directory",
                    children: []
                },
                {
                    name: "File1.txt",
                    type: "file"
                }
            ]
        },
        {
            name: "File2.txt",
            type: "file"
        }
    ]
};


/*
    Напишите функцию printDirectoryStructure, которая рекурсивно выводит структуру каталогов, начиная с корневого каталога.
*/

function printDirectoryStructure(dir, counter = 0) {
    console.log(" ".repeat(counter) + dir.name);

    if (dir.type === 'directory') {
        dir.children.forEach((child) => printDirectoryStructure(child, counter + 1))
    }
}