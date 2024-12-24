function rotar(matriz) {
    const n = matriz.length;
    const resultado = new Array(n).fill(null).map(() => new Array(n));
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        resultado[j][n - 1 - i] = matriz[i][j];
      }
    }
  
    return resultado;
  }


  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  const matrizRotada = rotar(matriz);
  
  console.log(matrizRotada); 

 /* Explicación:

Inicializar la matriz resultante: Se crea una nueva matriz resultado con las mismas dimensiones que la matriz de entrada, 
inicialmente llena de valores null.

Iterar sobre la matriz original: Se utilizan dos bucles for anidados para recorrer cada elemento de la matriz original.

Calcular la nueva posición: Para cada elemento matriz[i][j], su nueva posición en la matriz rotada será resultado[j][n - 1 - i]. 
Esto se debe a que al rotar 90 grados en sentido horario, las filas se convierten en columnas y las columnas en filas, 
pero en orden inverso.

Asignar el valor: Se asigna el valor del elemento actual en la matriz original a su nueva posición en la matriz rotada.

Devolver la matriz rotada: Finalmente, la función devuelve la matriz resultado que contiene la matriz rotada. */

