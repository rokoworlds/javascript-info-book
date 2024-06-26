// Написать софт на чайник на ООП

/**
Методы взаимодействия с чайником:
    .toggle() - кнопка включения / выключения чайника
    .addWater() / .removeWater() - налить или слить воду
    .setTemperature() - задачть температуру до которой будет нагреваться чайник
    .printStatus() - выводит текущий статус работы чайника

 */


const kettle = {
    isOn : false,
    temperature : 100, // Дефолтная температура 100 градусов
    power : 2000, // 2000W
    specificHeatCapacity : 4184, // Удельная теплоёмкость воды в Дж/(кг·°C)
    waterLevel : 0,
    waterLevelIsOk: false,
    currentTemperature: 20, // Средняя комнатная температура воды
    startTime : null,

    // Включение и выключение чайника
    toggle() {
        this.isOn = !this.isOn;
        if (this.isOn) {
            this.startTime = Date.now();
            this.checkTemperatureInterval = setInterval(this.checkTemperature, 5000);
        } else {
            this.calculateCurrentTemperature();
            this.startTime = null;
            clearInterval(this.checkTemperatureInterval);
        }
        this.printStatus();
    },

    // Методы по работе с водой

    addWater(val) {
        if (this.waterLevel + val > 1500) {
            console.log('Превышен уровень допустимый уровень воды (1500мл).');
            console.log(`Текущий уровень воды: ${this.waterLevel}`);
            return;
        }
        this.waterLevel += val;
        this.checkWaterLevel();
    },

    removeWater(val) {
        if (this.waterLevel - val < 0) {
            this.waterLevel = 0;
            console.log('Чайник пуст. Уровень воды: 0');
            return;
        }
        this.waterLevel -= val;
        this.checkWaterLevel();
    },

    checkWaterLevel() {
        if (this.waterLevel > 1500) {
            this.waterLevelIsOk = false;
            console.log('Уровень воды слишком высокий! Максимальный уровень воды: 1500мл.');
            console.log(`Текущий уровень воды: ${this.waterLevel}`);
            return;
        } 
        
        if (this.waterLevel < 200) {
            this.waterLevelIsOk = false;
            console.log('Уровень воды слишком низкий! Минимальный уровень воды: 200мл.');
            console.log(`Текущий уровень воды: ${this.waterLevel}`);
            return;
        } 

        this.waterLevelIsOk = true;
        console.log(`Уровень воды составляет ${this.waterLevel} мл.`);

    }, 

    // Методы по работе с температурой

    calculateCurrentTemperature() {
        if (this.startTime) {
            const elapsedTimeInSeconds = (Date.now() - this.startTime) / 1000;
            const temperatureIncrease = (this.power * elapsedTimeInSeconds) / (this.waterLevel * this.specificHeatCapacity);
            this.currentTemperature = this.currentTemperature + Number(temperatureIncrease.toFixed(2));
        }
    },

    setTemperature(temp) {
        if (this.isOn) {

            if (temp >= 0 && temp <= 100) {
                this.temperature = temp;
                console.log(`Температура установлена на ${this.temperature}`);
                return;
            }

            console.log('Введите корректное значение температуры (от 0 до 100)')
            return;
            } 
        
        console.log('Чайник выключен! Включите его для установки температуры.')
        
    },

    checkTemperature() {
        this.calculateCurrentTemperature();
        if (this.currentTemperature >= this.temperature) {
            this.toggle();
            console.log(`Чайник достиг заданной температуры ${this.temperature}°C.`);
        }
    },

    // Проверка статуса

    printStatus() {
        this.calculateCurrentTemperature();
        if (this.isOn) {
            console.log(`Чайник включен, уровень воды: ${this.waterLevel}мл, температура: ${this.currentTemperature}°C`);
            return;
        }

        console.log(`Чайник выключен, уровень воды: ${this.waterLevel}мл`);
    }

}