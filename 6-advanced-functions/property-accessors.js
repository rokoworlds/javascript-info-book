// GPT Task: get and set

// Task 1
/**
Часть 1: Создание объекта с геттерами и сеттерами
Создайте объект rectangle с двумя свойствами:
    width (ширина)
    height (высота)
Добавьте в объект геттер для свойства area, который будет 
возвращать площадь прямоугольника (произведение width и height).

Добавьте в объект сеттер для свойства dimensions, который будет 
принимать объект с новыми значениями width и height и обновлять соответствующие свойства rectangle.

 */

const rectangle = {
    width: 10,
    height: 5,

    get area() {
        return this.width * this.height;
    },

    set dimensions({w, h}) {
        this.width = w,
        this.height = h
    }
}

/**
Часть 2. Добавление дополнительных геттеров и сеттеров
Добавьте геттер и сеттер для свойства perimeter, который будет возвращать
и задавать периметр прямоугольника. Для этого:
Геттер perimeter должен возвращать сумму всех сторон прямоугольника (2 * (width + height)).
Сеттер perimeter должен принимать новое значение периметра и изменять ширину
и высоту таким образом, чтобы сохранить соотношение сторон, но установить новый периметр.
 */

Object.defineProperty(rectangle, 'perimeter', {
    get() {
        return 2 * (this.width + this.height);
    },

    set(value) {
        const ratio = this.width / this.height;
        this.height = value / (2 * (ratio + 1));
        this.width = ratio * this.height;
    }
});

console.log(rectangle.perimeter); // 20
rectangle.perimeter = 24;
console.log(rectangle.width); // 6
console.log(rectangle.height); // 3
console.log(rectangle.perimeter); // 24



// Task 2

/**
Часть 1: Создание объекта с геттерами и сеттерами

Создайте объект user с следующими свойствами: firstName (имя), lastName (фамилия), birthYear (год рождения)
Добавьте в объект геттер для свойства age, 
который будет возвращать возраст пользователя на основе текущего года и birthYear.

Добавьте в объект сеттер для свойства fullName,
который будет принимать строку с полным именем (например, "Иван Иванов") и 
обновлять свойства firstName и lastName.

Часть 2: Валидация значений
Добавьте сеттер для свойства birthYear, который будет проверять,
чтобы значение было числом и было в допустимом диапазоне (например, между 1900 и текущим годом).
Если значение не подходит, выбрасывайте ошибку.

Добавьте геттер и сеттер для свойства email, который будет:
    В геттере возвращать текущий email.
    В сеттере проверять, что email имеет правильный формат (содержит "@" и "."). 
    Если формат неверный, выбрасывать ошибку.
 */


const user = {
    firstName: 'Bob',
    lastName: 'Bobinsky',
    _birthYear: 1900,
    _email: '',


    get age() {
        const currentYear = new Date().getFullYear();
        return currentYear - this._birthYear;
    },

    set fullName(val) {
        [this.firstName, this.lastName] = val.split(' ')
    },

    set birthYear(val) {
        if (typeof val !== 'number' || val < 1900 || val > new Date().getFullYear()) {
            throw new Error('Input should be valid year between 1900 and todays year in form YYYY');
        }

        this._birthYear = val;
    },

    get email() {
        return this._email;
    },

    set email(val) {
        if (typeof val !== 'string' || !val.includes('@') || val.lastIndexOf('.') < val.indexOf('@') + 1) {
            throw new Error('Invalid email format');
        }

        this._email = val;
    }
}

// Тестирование объекта user
try {
    user.birthYear = 2025; // Ошибка
} catch (error) {
    console.log(error.message);
}

try {
    user.email = 'invalid-email'; // Ошибка: Invalid email format
} catch (error) {
    console.log(error.message);
}

user.birthYear = 1985;
console.log(user.age); // 39 (если текущий год 2024)

user.email = 'jane.smith@example.com';
console.log(user.email); // jane.smith@example.com

user.fullName = 'Jane Smith';
console.log(user.firstName); // Jane
console.log(user.lastName); // Smith