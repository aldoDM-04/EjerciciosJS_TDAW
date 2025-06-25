function mostrarNumeros() {
    // Obtener la secuencia de números ingresada por el usuario
    var secuencia = document.getElementById("secuenciaOrd").value;

    // Convertir la secuencia en un arreglo de números
    var numeros = secuencia.split(",").map(Number);

    // Validar si se ingresó una secuencia válida
    if (numeros.length > 0) {
        // Mostrar los números en orden en el HTML
        document.getElementById("resultado13").innerText = "Los números en orden son: " + numeros.join(", ");
    } else {
        alert("Por favor, ingrese una secuencia de números válida.");
    }
}
