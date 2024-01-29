// É valido lembrar que para funcionar, o BinarySearch espera que o array já esteja ordenado previamente
console.time('Binary Search')

function BinarySearch(array: number[], value: number) {
  // Definimos o começo e o fim do nosso array, com o "-1" para corrigir o ZeroBased
  let start = 0
  let end = array.length - 1 

  // Apenas verificando se realmente temos um array e um valor chave para trabalhar
  if (!array || !value) {
    return JSON.stringify({ message: "Parece que o array ou o valor estão vazios!" });
  }

  while (start <= end) {
    // Definimos um elemento medindo o meio dinâmico entre o começo e o fim
    let mid = Math.floor((start + end) / 2)
    
    // Se o valor do array com index do nosso meio for igual ao valor procurado, retornamos tal index
    if (array[mid] === value) {
      console.log(mid)
      return mid
    } 
    
    // Se o elemento do meio for maior que o procurado, alocamos o fim no meio menos um, passando
    // a ignorar todos os valores da outra metade
    else if (array[mid] > value) {
      end = mid - 1
    } 
    
   // Se o elemento do meio for menor que o procurado, alocamos o começo no meio mais um, passando
    // a ignorar todos os valores da outra metade
    else if (array[mid] < value) {
      start = mid + 1
    }
  }
}

BinarySearch([1, 2, 3, 4, 5, 6, 8, 12, 55, 65, 66, 100, 122, 211], 3)

console.timeEnd('Binary Search')