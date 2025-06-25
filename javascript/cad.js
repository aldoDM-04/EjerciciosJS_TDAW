function analizarTextos() {
    // Obtener la secuencia de textos ingresada por el usuario
    var secuencia = document.getElementById("secuenciaC").value;

    // Convertir la secuencia en un arreglo de textos
    var textos = secuencia.split(",");

    // Validar si se ingresó una secuencia válida
    if (textos.length > 0) {
        var resultado = "";

        // Recorrer cada texto y realizar el análisis
        for (var i = 0; i < textos.length; i++) {
            // Longitud del texto
            resultado += "Texto " + (i + 1) + ": " + textos[i] + " - Longitud: " + textos[i].length + "<br>";
            // En mayúsculas
            resultado += "En mayúsculas: " + textos[i].toUpperCase() + "<br>";
            // En minúsculas
            resultado += "En minúsculas: " + textos[i].toLowerCase() + "<br><br>";
        }

        // Mostrar el resultado en el HTML
        document.getElementById("resultado14").innerHTML = resultado;
    } else {
        alert("Por favor, ingrese una secuencia de textos válida.");
    }
}
