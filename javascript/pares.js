function obtenerNumerosPares() {
    var numerosPares = [];

    // Bucle para encontrar los números pares entre 1 y 10
    for (var i = 2; i <= 100; i += 2) {
        numerosPares.push(i);
    }

    // Mostrar el resultado en la página
    document.getElementById("resultado2").innerText = "Números Pares entre 1 y 100: " + numerosPares.join(", ");
}
