var archivo = new XMLHttpRequest();
var ruta = "tabla-vacunas.txt";
archivo.open("GET", ruta, false);
archivo.send(null);
if (archivo.length >= 0){
    readFile(archivo);
}

function readFile(archivo) {
    let tabla = document.querySelector(".table-body"); /*Obtener el elemento tbody con clase .table-body*/
    
    var array = new Array();
    var cad = "";
    var txt = archivo.responseText;

    for (var i = 0; i < txt.length; i++) {
        cad += txt[i];
        if (txt[i] == String.fromCharCode(10)) {
            let celdas = cad.split(',');    /*Separar los tokens en elementos individuales de un arreglo*/
            $itemTable = document.createElement("tr");  /*Crear una fila*/
            celdas.forEach((item) => {
                const $td = document.createElement("td"); /*Crear una celda*/
                $td.textContent = item; /*Asignar un valor a la celda*/
                $itemTable.appendChild($td); /*Hacer que la celda sea hija de la fila*/
                tabla.appendChild($itemTable); /*Hacer que la fila sea hija del tbody*/
            });
            cad = "";
            array = [];
        }
    }
}