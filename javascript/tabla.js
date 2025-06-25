function mostrarTablaMultiplicar() {
    // Obtener el número ingresado por el usuario
    var numero = parseInt(document.getElementById("numero8").value);

    // Validar si se ingresó un número válido
    if (!isNaN(numero)) {
        var tablaMultiplicar = "<h2>Tabla de Multiplicar del " + numero + "</h2>";
        tablaMultiplicar += "<table border='4'>";
        for (var i = 1; i <= 10; i++) {
            tablaMultiplicar += "<tr>";
            tablaMultiplicar += "<td>" + numero + " x " + i + " = " + "</td>";
            tablaMultiplicar += "<td>" + (numero * i) + "</td>";
            tablaMultiplicar += "</tr>";
        }
        tablaMultiplicar += "</table>";

        // Mostrar la tabla en el HTML
        document.getElementById("resultado8").innerHTML = tablaMultiplicar;
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}
