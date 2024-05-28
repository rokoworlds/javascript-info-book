// Переписать чайник на классах


    class Kettle {
        
        power = 2000;
        specificHeatCapacity =  4184;

        constructor() {
            this.isOn = false;
            this.temperature = 100; // Дефолтная температура 100 градусов
            // this.power = 2000; // 2000W
            // this.specificHeatCapacity =  4184; // Удельная теплоёмкость воды в Дж/(кг·°C)
            this._waterLevel = 0;
            this.waterLevelIsOk = false;
            this.currentTemperature = 20; // Средняя комнатная температура воды
            this.startTime = null;
        }
    
        // Включение и выключение чайника
        toggle() {
            this.isOn = !this.isOn;
            if (this.isOn) {
                this.startTime = Date.now();
                this.checkTemperatureInterval = setInterval(() => this.checkTemperature(), 5000);
            } else {
                this.calculateCurrentTemperature();
                this.startTime = null;
                clearInterval(this.checkTemperatureInterval);
            }
            this.printStatus();
        }
    
        // Методы по работе с водой
    
        set waterLevel(val) {
            if (val < 100) {
                console.log('Минимальный уровень воды составляет 200мл.');
                return;
            }

            if (val > 1500) {
                console.log('Максимальный уровень воды составляет 1500мл.')
            }

            this._waterLevel = val;
            this.checkWaterLevel;
        }

        get waterLevel() {
            return this._waterLevel
        }

    
        checkWaterLevel() {
            if (this._waterLevel > 1500) {
                this.waterLevelIsOk = false;
                console.log('Уровень воды слишком высокий! Максимальный уровень воды: 1500мл.');
                console.log(`Текущий уровень воды: ${this._waterLevel}`);
                return;
            } 
            
            if (this._waterLevel < 200) {
                this.waterLevelIsOk = false;
                console.log('Уровень воды слишком низкий! Минимальный уровень воды: 200мл.');
                console.log(`Текущий уровень воды: ${this._waterLevel}`);
                return;
            } 
    
            this.waterLevelIsOk = true;
            console.log(`Уровень воды составляет ${this._waterLevel} мл.`);
    
        } 
    
        // Методы по работе с температурой
    
        calculateCurrentTemperature() {
            if (this.isOn && this.startTime) {
                const elapsedTimeInSeconds = (Date.now() - this.startTime) / 1000;
                const temperatureIncrease = (this.power * elapsedTimeInSeconds) / (this._waterLevel * this.specificHeatCapacity);
                this.currentTemperature = Number((this.currentTemperature + temperatureIncrease).toFixed(2));
            }
        }
    
        setTemperature(temp) {
            if (!this.isOn) {
                console.log('Чайник выключен! Включите его для установки температуры.');
                return;
            }

            if (temp < 0 || temp > 100) {
                console.log('Введите корректное значение температуры (от 0 до 100)');
                return;
            }

            this.temperature = temp;
            console.log(`Температура установлена на ${this.temperature}°C`);

        }
    
        checkTemperature() {
            this.calculateCurrentTemperature();
            if (this.currentTemperature >= this.temperature) {
                this.toggle();
                console.log(`Чайник достиг заданной температуры ${this.temperature}°C.`);
            }
        }
    
        // Проверка статуса
    
        printStatus() {
            this.calculateCurrentTemperature();
            if (this.isOn) {
                console.log(`Чайник включен, уровень воды: ${this._waterLevel}мл, температура: ${this.currentTemperature}°C`);
                return;
            }
    
            console.log(`Чайник выключен, уровень воды: ${this._waterLevel}мл.`);
        }
    
    }