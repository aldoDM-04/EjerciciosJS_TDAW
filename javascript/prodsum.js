function calcularProducto() {
    // Obtener los números ingresados por el usuario
    var numero1 = parseInt(document.getElementById("numero_9_1").value);
    var numero2 = parseInt(document.getElementById("numero_9_2").value);

    // Validar si se ingresaron números válidos
    if (!isNaN(numero1) && !isNaN(numero2)) {
        var producto = 0;

        // Calcular el producto mediante sumas
        for (var i = 0; i < numero2; i++) {
            producto += numero1;
        }

        // Mostrar el resultado en el HTML
        document.getElementById("resultado9").innerText = "El producto de " + numero1 + " y " + numero2 + " es: " + producto;
    } else {
        alert("Por favor, ingrese números válidos.");
    }
}
