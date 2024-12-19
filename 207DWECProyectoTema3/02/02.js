function Objeto(a,c,d,e,f) {
    this.a = a;
    this.b = {
        c: c,
        d: d
    };
    this.e = e;
    this.f = function() {
        return (f);
    }
}

var obj1 = new Objeto(1,2,3,[4,5],6);
var obj2 = new Objeto(10,20,30,[40,50],60);

function mostrar(obj) {
    for (let x in obj) {
        if (obj[x] instanceof Object && !(obj[x] instanceof Function)) {
            console.log(x + ": {");
            mostrar(obj[x]);
            console.log("}");
        } else if (obj[x] instanceof Function) {
            console.log(x + "() = " + obj[x]());
        } else {
            console.log(x + ": " + obj[x]);
        }
    }
}