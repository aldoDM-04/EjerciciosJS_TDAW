function insertionSort(lista) {
    for (let i = 1; i < lista.length; i++) {
      const valorActual = lista[i];
      let j = i - 1;
  
      while (j >= 0 && lista[j] > valorActual) {
        lista[j + 1] = lista[j];
        j--;
      }
  
      lista[j + 1] = valorActual;
    }
  
    return lista;
  }
  
  function ordenamientoPorInsercion() {
      // Obtener la secuencia de números ingresada por el usuario
      var secuencia = document.getElementById("secuenciaIns").value;

      // Convertir la secuencia en un arreglo de números
      var numeros = secuencia.split(",").map(Number);

      //const lista = [5, 2, 4, 6, 1, 3]; // Ejemplo de arreglo, modifica según sea necesario
  
      // Ejecutar el algoritmo de ordenamiento por inserción
      const listaOrdenada = insertionSort(numeros);
  
      // Mostrar el resultado en el HTML
      document.getElementById("resultado4").innerText = "Arreglo Ordenado: " + listaOrdenada.join(", ");
  }
  