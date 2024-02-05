console.time('Radix Sort')

import fs from 'fs'

function getDigit(num: number, place: number) {
  // Divide o valor por 10^x, onde x é a casa que deseja (unidade, dezena, centena)
  // logo após, pega o resto e arredonda pra baixo. Ex:
  // num: 329, place: 1 -> 329 / 10^1 = 32,9 -floor-> 32 % 10 = 2
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function RadixSort(array: number[]) {
  // Aqui já declaramos uma matriz temporária vazia para ser usada na organização
  let temp: number[][] = [];

  // Essa função pega o valor de maior numero de caracteres, por exemplo:
  // [1, 2, 10, 34, 532] -->  532 é o maior e pega o "length" dele
  function getMaxDigitNumber(array: number[]) {
    let maior = 0
  
    for(let value of array) {
      if(value > maior) {
        maior = value
      }
    }
  
    return maior.toString().length
  }

  // Declaro uma variável como o valor do maior número de caracteres de um item do array
  const maxDigit = getMaxDigitNumber(array)

  // Verificar se existe o array
  if (!array || array.length === 0) {
    return array;
  }

  // Repete o numero de vezes igual ao comprimento do maior número da lista
  for (let i = 0; i < maxDigit; i++) {
  
    // "Temp" acaba sendo um array de arrays, sendo cada um deles para um numero de 0 a 9
    // por exemplo, todos os numeros iniciados em 5 ficam no mesmo array
    temp = Array.from({length: 10}, () => [])

    // Para cada item do array, ele pega a casa decimal (unidade, dezena...) igual a iteração do "for" anterior
    // e adiciona, baseado no valor do digito, no seu devido array de 0 a 9 dentro de "temp"
    for(let value of array) {
      const digit = getDigit(value, i)
      temp[digit].push(value)
    }

    // No final concatenamos todos esses "buckets" de "temp" e montamos um unico array ordenado
    array = ([] as number[]).concat(...temp)
  }

  // Convertendo o array para uma string em formatação como de um JSON
  const arrayString = JSON.stringify(array, null, 2);

  // Nome do arquivo que será criado. A extensão ".js" otimiza em 2s o código.
  const nomeDoArquivo = 'RadixSortedArray.js';

  // Criamos aqui o arquivo com a formatação "UTF-8"
  fs.writeFile(nomeDoArquivo, arrayString, 'utf-8', (err) => {
    if (err) {
      console.error('Erro ao criar o arquivo:', err);
    } else {
      console.log(`Arquivo ${nomeDoArquivo} criado com sucesso!`);
    }
  })
}

RadixSort([9, 2, 5, 6, 2, 645, 8, 845, 2, 47, 584, 24, 3, 4, 843, 75, 74, 6, 456, 45, 456, 37])
console.timeEnd('Radix Sort')