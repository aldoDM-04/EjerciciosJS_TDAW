function verificarNumeroPar() {
    // Obtener el número ingresado por el usuario
    var numero = parseInt(document.getElementById("numero7").value);

    // Verificar si el número es par
    if(!isNaN(numero)){
        if (numero % 2 === 0) {
            alert("El número " + numero + " es par.");
            document.getElementById("resultado7").innerText = "El número " + numero + " es par.";
        } else {
            //alert("El número " + numero + " NO es par.");
            document.getElementById("resultado7").innerText = "El número " + numero + " NO es par.";
    }}else{alert("Por favor ingrese un numero válido");}
}
