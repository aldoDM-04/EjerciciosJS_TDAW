function calcularMayor() {
    // Obtener los valores ingresados por el usuario
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var numero3 = parseFloat(document.getElementById("numero3").value);

    // Calcular el mayor de los tres números
    var mayor;

    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        mayor = numero2;
    } else {
        mayor = numero3;
    }

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerText = "El mayor número es: " + mayor;

    // Mostrar una alerta con el resultado
    //alert("El mayor número es: " + mayor);
}
