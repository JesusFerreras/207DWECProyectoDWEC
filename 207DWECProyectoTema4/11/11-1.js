function rellenarCampos() {
    let inputs = window.opener.document.getElementsByTagName("input");

    for (let elemento of inputs) {
        elemento.value = elemento.getAttribute("placeholder");
    }

    let textarea = window.opener.document.getElementsByTagName("textarea")[0];
    textarea.value = textarea.getAttribute("placeholder");
}