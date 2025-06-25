function calcularSuma() {
    var suma = 0;

    // Calcular la suma de los primeros 100 números
    for (var i = 1; i <= 100; i++) {
        suma += i;
    }

    // Mostrar el resultado en la página
    document.getElementById("resultado3").innerText = "La suma de los primeros 100 números es: " + suma;
}
