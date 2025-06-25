function selectionSort(lista) {
    for (let i = 0; i < lista.length - 1; i++) {
      let indiceMinimo = i;
  
      for (let j = i + 1; j < lista.length; j++) {
        if (lista[j] < lista[indiceMinimo]) {
          indiceMinimo = j;
        }
      }
  
      const temp = lista[i];
      lista[i] = lista[indiceMinimo];
      lista[indiceMinimo] = temp;
    }
  
    return lista;
  }
  
  function ordenamientoPorSeleccion() {
      // Obtener la secuencia de números ingresada por el usuario
      var secuencia = document.getElementById("secuenciaSel").value;

      // Convertir la secuencia en un arreglo de números
      var numeros = secuencia.split(",").map(Number);

      //const lista = [5, 2, 4, 6, 1, 3]; // Ejemplo de arreglo, modifica según sea necesario
  
      // Ejecutar el algoritmo de ordenamiento por selección
      const listaOrdenada = selectionSort(numeros);
  
      // Mostrar el resultado en el HTML
      document.getElementById("resultado5").innerText = "Arreglo Ordenado: " + listaOrdenada.join(", ");
  }
  