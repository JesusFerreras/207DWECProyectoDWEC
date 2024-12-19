/*
function Objeto(atr1, atr2, atr3) {
    this.atr1 = atr1;
    this.atr2 = atr2;
    this.atr3 = atr3;

    this.f1 = function() {
        return (true);
    }
}

function SubObjeto(atr1, atr2, atr3, atr4) {
    this.__proto__ = new Objeto(atr1, atr2, atr3);
    this.atr4 = atr4;

    this.f2 = function() {
        return (false);
    }
}
*/
class Objeto {
    constructor(atr1, atr2, atr3) {
        this.atr1 = atr1;
        this.atr2 = atr2;
        this.atr3 = atr3;
    }

    f1(x) {
        return (x);
    }
}

class SubObjeto extends Objeto {
    constructor(atr1, atr2, atr3, atr4) {
        super(atr1, atr2, atr3);
        this.atr4 = atr4;
    }

    f2(x) {
        return (x);
    }
}

Objeto.prototype.fN = function() {
    return (null);
};

var obj = new Objeto(1, 2, 3);
var subObj = new SubObjeto("a", "b", "c", "d");
    
function mostrar(o) {
    for (let x in o) {
        if (o[x] instanceof Object && !(o[x] instanceof Function)) {
            console.log(x + ": {");
            mostrar(o[x]);
            console.log("}");
        } else if (o[x] instanceof Function) {
            console.log(x + "() = " + o[x]());
        } else {
            console.log(x + ": " + o[x]);
        }
    }
    console.log("---");
}