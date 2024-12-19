function mostrarDif(date1, date2) {
    try {
        if (date1 == undefined) {
            throw ("date1 no esta definido");
        }
        if (date2 == undefined) {
            throw ("date2 no esta definido");
        }
        var dif = date2 - date1;
        alert(dif + "ms\n" + (dif/1000) + "s\n" + (dif/60000) + "min");
    }
    catch (error) {
        alert(error);
    }
}

var date1;
var date2;