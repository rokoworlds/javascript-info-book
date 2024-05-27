// Challenge 1

/**
Write a userCreator class that creates users with a name and a score. 
Add methods to output the user's name and to increment the score. 
Then create a paidUserCreator class that extends the functionality of userCreator 
by adding the ability to increase the account balance. 
Create instances of both classes and demonstrate their methods.
 */
{
class userCreator {
    constructor (name, score) {
        this.name = name;
        this.score = score;
    }
    sayName () {
        console.log('I am ' + this.name);
    }
    increment () {
        this.score++;
    }
}

const user1 = new userCreator('Roman', 9);

class paidUserCreator extends userCreator {
    constructor(paidName, paidScore, accountBalance) {
        super(paidName, paidScore);
        this.accountBalance = accountBalance;
    }
    increaseBalance () {
        this.accountBalance++;
    }
}

const paidUser1 = new paidUserCreator('Bob', 2, 28);

paidUser1.increaseBalance();
paidUser1.sayName();

}
// Реализация того же задания, но без class

function userCreator(name, score) {
    const newUser = Object.create(usersFunctions);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const usersFunctions = {
    sayName: function() {
        console.log('I am ' + this.name);
    },
    increment: function() {
        this.score++;
    }
}

const user2 = userCreator('Rob', 3);

user2.sayName() // I am Rob;

function paidUserCreator(paidName, paidScore, accountBalance) {
    const newPaidUser = userCreator(paidName, paidScore);
    Object.setPrototypeOf(newPaidUser, paidUserFuncitons);
    newPaidUser.accountBalance = accountBalance;
    return newPaidUser;
}

const paidUserFuncitons = {
    increaseBalance: function() {
        this.accountBalance++;
    }
};

Object.setPrototypeOf(paidUserFuncitons, usersFunctions);

const paidUser2 = paidUserCreator('Lola', 6, 66);

paidUser2.increaseBalance();
paidUser2.sayName();




// Challenge 2

/**
In this exercise, you will refactor some code that manages student enrollment records for a workshop, from the namespace pattern to the `class` pattern.

## Instructions
1. Define a class called `Helpers` that includes the functions that are not `this`-aware.
2. Define a class called `Workshop` that extends `Helpers`, which includes all the other functions. Hint: `constructor()` and `super()`.
3. Instantiate the `Workshop` class as `deepJS`.
 */
{
    // Initial code
const deepJS = {
	currentEnrollment: [],
	studentRecords: [],
	addStudent(id,name,paid) {
		this.studentRecords.push({ id, name, paid, });
	},
	enrollStudent(id) {
		if (!this.currentEnrollment.includes(id)) {
			this.currentEnrollment.push(id);
		}
	},
	printCurrentEnrollment() {
		this.printRecords(this.currentEnrollment);
	},
	enrollPaidStudents() {
		this.currentEnrollment = this.paidStudentsToEnroll();
		this.printCurrentEnrollment();
	},
	remindUnpaidStudents() {
		this.remindUnpaid(this.currentEnrollment);
	},
	getStudentFromId(studentId) {
		return this.studentRecords.find(matchId);

		// *************************

		function matchId(record) {
			return (record.id == studentId);
		}
	},
	printRecords(recordIds) {
		var records = recordIds.map(this.getStudentFromId.bind(this));

		records.sort(this.sortByNameAsc);

		records.forEach(this.printRecord);
	},
	sortByNameAsc(record1,record2){
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	},
	printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	},
	paidStudentsToEnroll() {
		var recordsToEnroll = this.studentRecords.filter(this.needToEnroll.bind(this));

		var idsToEnroll = recordsToEnroll.map(this.getStudentId);

		return [ ...this.currentEnrollment, ...idsToEnroll ];
	},
	needToEnroll(record) {
		return (record.paid && !this.currentEnrollment.includes(record.id));
	},
	getStudentId(record) {
		return record.id;
	},
	remindUnpaid(recordIds) {
		var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));

		this.printRecords(unpaidIds);
	},
	notYetPaid(studentId) {
		var record = this.getStudentFromId(studentId);
		return !record.paid;
	}
};

}

    // Refactored code

    class Helpers {
        sortByNameAsc(record1,record2){
            if (record1.name < record2.name) return -1;
            else if (record1.name > record2.name) return 1;
            else return 0;
        }
        printRecord(record) {
            console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
        }
    }

    class Workshop extends Helpers {
        constructor() {
            super();
            this.currentEnrollment = [];
            this.studentRecords = [];
        }

        addStudent(id,name,paid) {
            this.studentRecords.push({ id, name, paid, });
        }
        enrollStudent(id) {
            if (!this.currentEnrollment.includes(id)) {
                this.currentEnrollment.push(id);
            }
        }
        printCurrentEnrollment() {
            this.printRecords(this.currentEnrollment);
        }
        enrollPaidStudents() {
            this.currentEnrollment = this.paidStudentsToEnroll();
            this.printCurrentEnrollment();
        }
        remindUnpaidStudents() {
            this.remindUnpaid(this.currentEnrollment);
        }
        getStudentFromId(studentId) {
            return this.studentRecords.find(matchId);
    
            // *************************
    
            function matchId(record) {
                return (record.id == studentId);
            }
        }
        printRecords(recordIds) {
            var records = recordIds.map(this.getStudentFromId.bind(this));
    
            records.sort(this.sortByNameAsc);
    
            records.forEach(this.printRecord);
        }

        paidStudentsToEnroll() {
            var recordsToEnroll = this.studentRecords.filter(this.needToEnroll.bind(this));
    
            var idsToEnroll = recordsToEnroll.map(this.getStudentId);
    
            return [ ...this.currentEnrollment, ...idsToEnroll ];
        }
        needToEnroll(record) {
            return (record.paid && !this.currentEnrollment.includes(record.id));
        }
        getStudentId(record) {
            return record.id;
        }
        remindUnpaid(recordIds) {
            var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));
    
            this.printRecords(unpaidIds);
        }
        notYetPaid(studentId) {
            var record = this.getStudentFromId(studentId);
            return !record.paid;
        }
    };


// ********************************

deepJS.addStudent(311,"Frank",/*paid=*/true);
deepJS.addStudent(410,"Suzy",/*paid=*/true);
deepJS.addStudent(709,"Brian",/*paid=*/false);
deepJS.addStudent(105,"Henry",/*paid=*/false);
deepJS.addStudent(502,"Mary",/*paid=*/true);
deepJS.addStudent(664,"Bob",/*paid=*/false);
deepJS.addStudent(250,"Peter",/*paid=*/true);
deepJS.addStudent(375,"Sarah",/*paid=*/true);
deepJS.addStudent(867,"Greg",/*paid=*/false);

deepJS.enrollStudent(410);
deepJS.enrollStudent(105);
deepJS.enrollStudent(664);
deepJS.enrollStudent(375);

deepJS.printCurrentEnrollment();
console.log("----");
deepJS.enrollPaidStudents();
console.log("----");
deepJS.remindUnpaidStudents();



// Challenge 3

/**
Write a SecondClock class, with two methods: start and reset.​
start: upon invocation, invokes a callback (this.cb, defined in the constructor) on an argument every second, with the argument to the callback being the current seconds "value".

In other words, the callback gets invoked every second on the "seconds hand" of the clock. Always start with 1 and don't utilize the seconds value of the current computer clock time.

The first "tick" with value 1 occurs 1 second after the initial "secondClock" invocation.
The second "tick" with value 2 occurs 2 seconds after the initial "secondClock" invocation.
...
The sixtieth "tick" with value 60 occurs 60 seconds after the initial "secondClock" invocation.
The sixty-first "tick" with value 1 occurs 61 seconds after the initial "secondClock" invocation.
The sixty-second "tick" with value 2 occurs 62 seconds after the initial "secondClock" invocation.
etc.
reset: upon invocation, completely stops the "clock".
Also resets the time back to the beginning.
​
Hint: look up setInterval and clearInterval.
 */

class SecondClock {
    constructor(callback) {
        this.cb = callback;
        this.seconds = 0;
    }
    start() {
        this.id = setInterval(() => {
            this.cb(++this.seconds % 60)
        }, 1000)
    }
 
    reset() {
        clearInterval(this.id);
        this.seconds = 0;
    }
}


const clock = new SecondClock((val) => { console.log(val) });
console.log("Started Clock.");
clock.start();
setTimeout(() => {
	clock.reset();
  console.log("Stopped Clock after 6 seconds.");
}, 6000);