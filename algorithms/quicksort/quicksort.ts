console.time('Quicksort')

// Recomendo que veja a imagem de explicação, ela se encontra na mesma pasta do código
function Quicksort(array: number[]): number[] {
  // Primeiro verificamos se precisamos ordenar, afinal, caso a lista
  // possua 1 número ou menos, não há necessidade de ordenação
  if (array.length <= 1) {
    return array;
  }

  // Declaramos como o 'pivô' o útlimo valor da lista
  const pivot = array[array.length - 1];

  // Criamos duas listas, uma para valores maiores que o 'pivô' e outra para os menores
  const bigger: number[] = [];
  const minor: number[] = [];

  // Vamos percorrer a lista inteira e comparar com o 'pivô' alocando 
  // cada item em uma das listas criadas anteriormente
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= pivot) {
      minor.push(array[i]);
    } else {
      bigger.push(array[i]);
    }
  }

  /*
   * Retornamos uma lista, formada por 3 partes:
   * 1 - Os valores menores que o pivô
   * 2 - O pivô
   * 3 - Os valores maiores que o pivô
   *  
   * Nas listas maiores e menores, aplicamos a recursividade, usando elas  
   * como parâmetro da função Quicksort()
   * 
   * Dessa maneira, vamos fazer o mesmo processo nessas listas menores até que fiquem ordenadas
   */

  return [...Quicksort(minor), pivot, ...Quicksort(bigger)];
}

console.log((Quicksort([9, -3, 5, 2, 6, 8, -6, 1, 3])));

console.timeEnd('Quicksort')