// Написать софт на чайник на ООП

/**

logStat() выводит всю информацию о тостере - мощность, время нагрева, есть ли сейчас нагрев, есть ли хлеб внутри, сколько уже хлеб греется времени, сколько мощности ушло на хлебушек

logPower() вывести сколько мощности ушло на хлеб за время его работы (например 20 сек работали с мощностью 5, а потом 10 сек работали с мощностью 3 - получится 20 * 5 + 10 * 3 = 130). Нужна как общая сумма за все запуски так и сумма за последний. при ejectBread() или insertBread() - то есть когда у нас новый хлебушек вставился - счетчик обнуляется

 */


let kettle = {
    power: false,
    _waterLevel: 0,
    currentTemperature: 0,

    turnOn() {
        // turn on kettle
    },

    turnOff() {
        // turn off kattle 
            // - manualy or 
            // if water is boiled or 
            // if timer is over
    },

    heat() {
        // heats water while on
    },

    setTemperature(temp = 100) {
        // set temperature if needed;
    },

    getTemperature() {
        // get current temperature of water;
    },

    maintainTemperature(temp) {
        // maintain temperature of water while is on
    },

    stopMaintainTemperature() {
        // stop maintaining
    },

    checkOverheat() {
        // check kettle temp on overheat
    },

    activateOverheatProtection() {
        // activated if overheated
    },

    logStats() {
        // logs stats about current state of water
    },

    checkWaterLevel() {
        if (this._waterLevel > 1500 || this._waterLevel < 200) this.alertWaterLevel();
    }, 

    isWaterEnough() {
        // now sure if needed
    },

    alertWaterLevel() {
        if (this._waterLevel > 1500) {
            console.log('Water level is too high!')
        } 

        if (this._waterLevel < 200) {
            console.log('Water level is too low!')
        }

        console.log('Check water level before use!')
    },
    
    get waterLevel() {
        return this._waterLevel;
    },

    addWater(val) {
        if (val < 200) console.log('Add more water.')
        this._waterLevel = val;
    },

    removeWater(val) {
        if (val <= this._waterLevel) {
            this._waterLevel -= val;
        }
    }

}

// Налил воды
// Включил чайник
// 
// Чайник нагревает воду
// Вода закипает
// Чайник выключается
// 
//


let kettle2 = {
    power: false,

    waterLevel: 0,

    temperature: 0,

    currentTemperature: 0,


    checkWaterLevel() {
        if (this.waterLevel > 1500 || this.waterLevel < 200) this.alertWaterLevel();
    }, 

    alertWaterLevel() {
        if (this.waterLevel > 1500) {
            console.log('Water level is too high!')
        } 

        if (this.waterLevel < 200) {
            console.log('Water level is too low!')
        }

        console.log('Check water level before use!')
    },

    addWater(val) {
        this.waterLevel = val;
    },

    removeWater(val) {
        this.waterLevel -= val;
    },

    turnOn() {
        if (this.power) {
            this.heat();
        } else {
            console.log('Turn on power!')
        }
    },

    heat() {
        while(this.currentTemperature !== this.temperature) {
            this.currentTemperature * 2
        }
    },

    checkTemperature() {
        return this.currentTemperature;
    },

    turnOff() {

    },

    setTemperature(val) {
        this.temperature = val;
    }
}