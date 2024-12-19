function encriptar(en) {
    let aLetras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    let txt = document.getElementById("texto").value;
    let txtE = "";
    let n = Math.abs(parseInt(Number(document.getElementById("numero").value)));

    for (let i = 0; i < txt.length; i++) {
        let letra = txt.charAt(i);
        if (aLetras.includes(letra)) {
            txtE += aLetras[(aLetras.indexOf(letra) + aLetras.length + en*(n%aLetras.length)) % aLetras.length];
        } else {
            txtE += (en<0? " ":"#");
        }
    }
    document.getElementById("resultado").innerHTML = txtE;
}