console.time('Bubble Sort')

import fs from 'fs'

function BubbleSort(array: number[]) {
  let swapped 

  // Repetimos o código até que a variável "swapped" seja false, logo, não houve trocas e, portanto, está ordenado
  do {
    swapped = false

    // Para cada item, ele observa o item atual e o próximo, os compara e troca caso necessário
    // caso troque, muda para "true" e roda o "for" novamente. Quando não trocar nenhum valor, sairá do "do while"
    for(let i = 0; i <  array.length - 1; i++) {
      if (array[i] > array[i+1]) {
        let temp = array[i+1]
        array[i+1] = array[i]
        array[i] = temp

        swapped = true
      } 
    }
  } while (swapped)

    // Convertendo o array para uma string
    const arrayString = JSON.stringify(array, null, 2);

    // Nome do arquivo de texto que será criado
    const nomeDoArquivo = 'BubbleSortedArray.js';
  
    // Criamos aqui o arquivo com a formatação "UTF-8"
    fs.writeFile(nomeDoArquivo, arrayString, 'utf-8', (err) => {
      if (err) {
        console.error('Erro ao criar o arquivo:', err);
      } else {
        console.log(`Arquivo ${nomeDoArquivo} criado com sucesso!`);
      }
    })
}

BubbleSort([12 ,251 ,15 ,15 ,5 ,125 ,16 ,16 ,31 ,2 ,23 ,73,47 ,3 ,75 ,4 ,3 ,1,])

console.timeEnd('Bubble Sort')