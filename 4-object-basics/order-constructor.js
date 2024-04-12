// Конструктор заказов

/*
написать функцию конструктор для заказа в магазине.
Новый инстанс - новый заказ
у него будут методы:
addItem(item, count) - добавить итем в чек (+ имя +цена)
removeItem(item, count) - убрать из чека count итемов (если не указано сколько - убрать все). Нельзя убрать больше чем было в чеке
getCheck() - получить информацию сколько каких итемов в чеке, общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р). Формат произвольный, чтобы был читабельный
lockOrder() - после вызова метода функции addItem/removeItem не должны делать что-либо. Можно как-то сообщать об ошибке, можно просто молча.
unlockOrder() - убрать блокировку заказа - снова можно добавлять итемы

*/



function Order() {

    this.isLocked = false;
    this.totalPrice = 0;
    this.check = [];

    this.addItem = function(item, count) {
        //  добавить итем в чек (+ имя +цена)
        if (this.isLocked) {
            console.log('Ошибка! Заказ заблокирован.');
            return;
        }

        let checkItem = {
            name : item.name,
            price: item.price,
            count: count,
        };

        this.check.push(checkItem);
        this.totalPrice += item.price * count;

    }

    this.removeItem = function(item, count) {
        // убрать из чека count итемов (если не указано сколько - убрать все). Нельзя убрать больше чем было в чеке
        if (this.isLocked) {
            console.log('Ошибка! Заказ заблокирован.');
            return;
        };

        const index = this.check.findIndex(checkItem => checkItem.name === item.name);

        if (index === -1) {
            console.log('Ошибка! Товар не найден в чеке.');
            return;
        };

        let currentCount = this.check[index].count;

        if (count === undefined || count >= currentCount) {
            this.totalPrice -= this.check[index].price * currentCount;
            this.check.splice(index, 1);
        } else {
            this.check[index].count -= count;
            this.totalPrice -= this.check[index].price * count;
        }
    }

    this.getCheck = function() {
        //  получить информацию сколько каких итемов в чеке, общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р). Формат произвольный, чтобы был читабельный
        console.log(this.check);
    }

    this.lockOrder = function() {
        // после вызова метода функции addItem/removeItem не должны делать что-либо. Можно как-то сообщать об ошибке, можно просто молча.
        this.isLocked = true;
        console.log('Заказ заблокирован, внесение изменений запрещено. Для отмены блокировки используйте .unlockOrder')
    }

    this.unlockOrder = function() {
        // убрать блокировку заказа - снова можно добавлять итемы
        this.isLocked = false;
        console.log('Блокировка снята.')
    }
}