Math.mcd = function mcd(n1, n2) {
    if (n1 < n2) {
        let x = n1;
        n1 = n2;
        n2 = x;
    }
    if (n1%n2 == 0) {
        return n2;
    } else {
        return mcd(n2, n1%n2);
    }
}

Math.mcm = function mcm(n1, n2) {
    return (n1 * n2 / Math.mcd(n1,n2));
}

Math.fc = function fc(a, b, c) {
    var discr = this.sqrt(b**2 - 4*a*c);
    return [(-b + discr)/(2 * a),(-b - discr)/(2 * a)];
}

function pedir(txt){
    try {
        x = document.getElementById(txt).value;
        if(x == "" || x == null) {
            throw " no debe ser vacio";
        }
        if(isNaN(x)) {
            throw " debe ser un número";
        }
        if(x%1 != 0) {
            throw " debe ser entero";
        }
        return Number(x);
    } catch (error) {
        alert(txt + error);
    }
}

function calcular1() {
    var n1 = pedir("n1");
    var n2 = pedir("n2");
    document.getElementById("mcd").innerHTML = ("mcd(" + n1 + "," + n2 + ")=" + Math.mcd(n1,n2));
    document.getElementById("mcm").innerHTML = ("mcm(" + n1 + "," + n2 + ")=" + Math.mcm(n1,n2));
}

function calcular2() {
    var a = pedir("a");
    var b = pedir("b");
    var c = pedir("c");
    var r = Math.fc(a, b, c);
    document.getElementById("x1").innerHTML = ("x_1 = " + r[0]);
    document.getElementById("x2").innerHTML = ("x_2 = " + r[1]);
}