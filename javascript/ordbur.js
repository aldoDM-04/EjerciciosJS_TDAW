function bubbleSort(lista) {
    for (let i = 0; i < lista.length - 1; i++) {
      for (let j = 0; j < lista.length - i - 1; j++) {
        if (lista[j] > lista[j + 1]) {
          const temp = lista[j];
          lista[j] = lista[j + 1];
          lista[j + 1] = temp;
        }
      }
    }
  
    return lista;
  }
  
  function ordenamientoDeBurbuja() {
      // Obtener la secuencia de números ingresada por el usuario
      var secuencia = document.getElementById("secuenciaBur").value;

      // Convertir la secuencia en un arreglo de números
      var numeros = secuencia.split(",").map(Number);

      //const lista = [5, 2, 4, 6, 1, 3]; // Ejemplo de arreglo, modifica según sea necesario
  
      // Ejecutar el algoritmo de ordenamiento de burbuja
      const listaOrdenada = bubbleSort(numeros);
  
      // Mostrar el resultado en el HTML
      document.getElementById("resultado6").innerText = "Arreglo Ordenado: " + listaOrdenada.join(", ");
  }
  