function calcularMedia() {
    // Obtener la secuencia de números ingresada por el usuario
    var secuencia = document.getElementById("secuenciaM").value;

    // Convertir la secuencia en un arreglo de números
    var numeros = secuencia.split(",").map(Number);

    // Validar si se ingresó una secuencia válida
    if (numeros.length > 0) {
        var suma = 0;

        // Calcular la suma de los números en la secuencia
        for (var i = 0; i < numeros.length; i++) {
            suma += numeros[i];
        }

        // Calcular la media
        var media = suma / numeros.length;

        // Mostrar el resultado en el HTML
        document.getElementById("resultado12").innerText = "La media de la secuencia es: " + media.toFixed(2);
    } else {
        alert("Por favor, ingrese una secuencia de números válida.");
    }
}
