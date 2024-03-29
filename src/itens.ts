import binarySearchImg from '../algorithms/binary-search/binary-search.png'
import radixSortImg from '../algorithms/radix-sort/radix-sort.png'
import bubbleSortImg from '../algorithms/bubble-sort/bubble-sort.png'
import QuicksortImg from '../algorithms/quicksort/quicksort.png'

export interface AlgorithmDataProps {
  title: string;
  description: string;
  urlImage: string;
  badges: string[];
  codeUrl: string;
}

export interface Algorithm {
  key: string
  algorithms: AlgorithmDataProps[]
}

export const algorithmData = {
  algorithms: [
    {
      title: "Radix Sort",
      description: "\tO Radix Sort é um algoritmo de ordenação que classifica os elementos com base nos dígitos individuais de seus valores. Ele opera distribuindo os elementos em baldes ou filas com base nos dígitos menos significativos para os mais significativos. \nEsse processo é repetido até que todos os dígitos tenham sido considerados, resultando em uma lista ordenada. Em termos mais simples, o Radix Sort organiza os números olhando para cada dígito separadamente, começando pelo dígito menos significativo e avançando até o dígito mais significativo. Isso é feito através de uma série de passos onde os elementos são agrupados com base nos dígitos em posições específicas. O processo é repetido até que todos os dígitos tenham sido considerados, resultando em uma lista ordenada.",
      urlImage: radixSortImg,
      badges: ["Ordenação", "O(nk)", "Excelente", "Estável"],
      codeUrl: "https://gist.github.com/pedrohenrikle/339824a2f3537eb068294630f0e36fdd"
    },
    {
      title: "Binary Search",
      description: "O Binary Search, ou busca binária, é um algoritmo de busca eficiente usado em listas ordenadas. Funciona dividindo repetidamente a lista ao meio e comparando o elemento alvo com o elemento no meio da lista. Com base na comparação, o algoritmo descarta a metade onde o elemento alvo não pode estar, reduzindo pela metade o espaço de busca. Esse processo é repetido até encontrar o elemento desejado ou determinar que ele não está na lista. \nO Binary Search tem uma complexidade de tempo de O(log n), o que o torna rápido para listas grandes. Este é um dos mais eficientes algorítmos de busca contudo, vale lembrar que a lista deve estar ordenada previamente.",
      urlImage: binarySearchImg,
      badges: ["Busca", "O(log n)", "Excelente"],
      codeUrl: "https://gist.github.com/pedrohenrikle/0503cc7b3218cfac04d21896778b46f0"
    },
    {
      title: "Quicksort",
      description: 'O Quicksort é um algoritmo de ordenação satisfatório baseado na estratégia "dividir para conquistar". Apesar de sua eficiência média ser considerada boa, ele é instável, o que significa que a ordem relativa de elementos idênticos pode variar após a ordenação. Essa propriedade pode ser relevante em contextos que demandam a preservação específica da ordem entre elementos iguais. Considerando o BigO (pior caso), acaba sendo ineficiente porém, seu desempenho é, em média, satisfatório.',
      urlImage: QuicksortImg,
      badges: ["Ordenação", "O(n^2)", "Ineficiente", "Não-Estável"],
      codeUrl: "https://gist.github.com/pedrohenrikle/4b11e9201001b499ccaf2408b4b24f90"
    },
    {
      title: "Bubble Sort",
      description: "O Bubble Sort é um algoritmo de ordenação simples que percorre repetidamente a lista, compara elementos adjacentes com a ideia de dois ponteiros apontando para dois itens, e os troca se estiverem na ordem errada. Esse processo é repetido até que nenhuma troca seja necessária, indicando que a lista está ordenada. O Bubble Sort é fácil de entender, mas não é eficiente para grandes conjuntos de dados, pois sua complexidade de tempo é O(n^2), onde n é o número de elementos na lista. Em comparação com algoritmos mais avançados, o Bubble Sort é geralmente menos eficiente em termos de desempenho.",
      urlImage: bubbleSortImg,
      badges: ["Ordenação", "O(n^2)", "Ineficiente", "Estável"],
      codeUrl: "https://gist.github.com/pedrohenrikle/28f21802379149c2c665fbdd219b4163"
    },
  ]
};
