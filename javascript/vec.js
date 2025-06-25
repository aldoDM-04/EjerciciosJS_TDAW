function sumarVectores() {
    // Obtener los elementos de los vectores A y B ingresados por el usuario
    var vectorA = document.getElementById("vectorA").value.split(",").map(Number);
    var vectorB = document.getElementById("vectorB").value.split(",").map(Number);

    // Validar si se ingresaron vectores válidos
    if (vectorA.length === vectorB.length && vectorA.length > 0) {
        var vectorC = [];

        // Sumar los elementos de los vectores A y B y almacenar el resultado en el vector C
        for (var i = 0; i < vectorA.length; i++) {
            vectorC.push(vectorA[i] + vectorB[i]);
        }

        // Mostrar el resultado en el HTML
        document.getElementById("resultado11").innerText = "El vector resultante es: " + vectorC.join(", ");
    } else {
        alert("Por favor, ingrese vectores con la misma cantidad de elementos.");
    }
}
