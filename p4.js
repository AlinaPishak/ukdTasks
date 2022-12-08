class Phone {
    constructor (phoneYear, memory, price) {
        this.phoneYear = phoneYear;
        this.memory = memory;
        this.price = price;
    }
}

class Samsung extends Phone {
    constructor (phoneYear, memory, price, color = 'black') {
        super (phoneYear, memory, price)
        this.color = color;
    }
}

class Iphone extends Phone {
    constructor (phoneYear, memory, price, color = 'red') {
        super (phoneYear, memory, price)
        this.color = color;
    }
}

class Nokia extends Phone {
    constructor (phoneYear, memory, price, color = 'gold') {
        super (phoneYear, memory, price)
        this.color = color;
    }
}




const iphone = new Iphone(2019, 64, 10000)
const nokia = new Nokia(2017, 128, 9000)
const samsung = new Samsung(2016, 32, 3000)

console.log (iphone, nokia, samsung)
