function multiply(matrizA, matrizB) {
    const filasA = matrizA.length;
    const columnasA = matrizA[0].length;
    const filasB = matrizB.length;
    const columnasB = matrizB[0].length;
  
    // 2.1. Condición Inicial
    if (columnasA !== filasB) {
      console.log(
        "Las matrices no son compatibles para la multiplicación."
      );
      return [];
    }
  
    // 2.2. Combinación de Valores
    const resultado = new Array(filasA)
      .fill(null)
      .map(() => new Array(columnasB).fill(0));
  
    for (let i = 0; i < filasA; i++) {
      for (let j = 0; j < columnasB; j++) {
        for (let k = 0; k < columnasA; k++) {
          resultado[i][j] += matrizA[i][k] * matrizB[k][j];
        }
      }
    }
  
    return resultado;
  }

  const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  
  const matrizB = [
    [7, 8],
    [9, 10],
    [11, 12],
  ];
  
  const matrizC = multiply(matrizA, matrizB);
  
  console.log(matrizC); 


  /*Explicación:

Obtener dimensiones: Se obtienen las dimensiones (filas y columnas) de ambas matrices.

Verificar compatibilidad: Se verifica si la cantidad de columnas de matrizA es igual a la cantidad de filas de matrizB. 
Si no lo son, se muestra un mensaje de error y se retorna un arreglo vacío.

Crear matriz resultante: Se crea una nueva matriz resultado con las dimensiones adecuadas (filas de matrizA y columnas de matrizB), 
inicialmente llena de ceros.

Multiplicación: Se utilizan tres bucles for anidados para realizar la multiplicación de matrices:

El bucle externo i recorre las filas de matrizA.
El bucle intermedio j recorre las columnas de matrizB.
El bucle interno k recorre las columnas de matrizA (o filas de matrizB, ya que son iguales).
En cada iteración, se multiplica el elemento matrizA[i][k] por el elemento matrizB[k][j] y se suma al elemento resultado[i][j].
Devolver resultado: Finalmente, se devuelve la matriz resultado que contiene el resultado de la multiplicación. */