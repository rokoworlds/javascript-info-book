/*
Создайте конструктор "Банковский счет", который будет представлять собой счет с
различными характеристиками, такими как баланс и активация аккаунта. 
У счета должны быть методы для:
- активации аккаунта,
- внесения средств, 
- снятия средств, 
- проверки баланса. 
Также добавьте метод, который будет выводить информацию о счете.

*/

let newAcc = {firstName: 'Bob', secondName: 'Lee'}

function BankAccount(name) {
    this.balance = 0;
    this.isActive = true;
    this.client = {
        firstName: name.firstName,
        secondName: name.secondName,
    }

    this.changeStatus = function() {
        this.isActive = !this.isActive;
    }

    this.deposit = function(amount) {
        if (this.isActive) {
            this.balance += amount;
        }
    }

    this.withdraw = function(amount) {
        if (this.isActive) {
            if (this.balance - +(amount) >= 0) {
                this.balance -= amount;
            } else {
                console.log('Not enough money on your balance!')
            }
        }
    }

    this.printBalance = function() {
        console.log('You current balance is: ' + this.balance)
    }

    this.info = function () {
        console.log('Client:' + this.client.firstName + ' ' + this.client.secondName);
        console.log('Account is activated: ' + this.isActive)
        console.log('You current balance is: ' + this.balance);
    }
}