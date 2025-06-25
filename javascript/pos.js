function encontrarMayor() {
    // Obtener la secuencia de números ingresada por el usuario
    var secuencia = document.getElementById("secuencia10").value;

    // Convertir la secuencia en un arreglo de números
    var numeros = secuencia.split(",").map(Number);

    // Validar si se ingresó una secuencia válida
    if (numeros.length > 0) {
        var mayorValor = numeros[0];
        var posicionMayor = 0;

        // Encontrar el mayor valor y su posición en el arreglo
        for (var i = 1; i < numeros.length; i++) {
            if (numeros[i] > mayorValor) {
                mayorValor = numeros[i];
                posicionMayor = i;
            }
        }

        // Mostrar el resultado en el HTML
        document.getElementById("resultado10").innerText = "El mayor valor es " + mayorValor + " y se encuentra en la posición " + posicionMayor + ".";
    } else {
        alert("Por favor, ingrese una secuencia de números válida.");
    }
}
