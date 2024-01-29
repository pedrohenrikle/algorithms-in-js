import binarySearchImg from '../algorithms/binary-search/binary-search.png'
import radixSortImg from '../algorithms/radix-sort/radix-sort.png'
import bubbleSortImg from '../algorithms/bubble-sort/bubble-sort.png'

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
      codeUrl: "https://github.com/pedrohenrikle/algorithms-in-js/blob/main/algorithms/radix-sort/radix-sort.ts"
    },
    {
      title: "Binary Search",
      description: "O Binary Search, ou busca binária, é um algoritmo de busca eficiente usado em listas ordenadas. Funciona dividindo repetidamente a lista ao meio e comparando o elemento alvo com o elemento no meio da lista. Com base na comparação, o algoritmo descarta a metade onde o elemento alvo não pode estar, reduzindo pela metade o espaço de busca. Esse processo é repetido até encontrar o elemento desejado ou determinar que ele não está na lista. \nO Binary Search tem uma complexidade de tempo de O(log n), o que o torna rápido para listas grandes. Este é um dos mais eficientes algorítmos de busca contudo, vale lembrar que a lista deve estar ordenada previamente.",
      urlImage: binarySearchImg,
      badges: ["Busca", "O(log n)", "Excelente"],
      codeUrl: "https://github.com/pedrohenrikle/algorithms-in-js/blob/main/algorithms/binary-search/binary-search.ts"
    },
    {
      title: "Bubble Sort",
      description: "O Bubble Sort é um algoritmo de ordenação simples que percorre repetidamente a lista, compara elementos adjacentes com a ideia de dois ponteiros apontando para dois itens, e os troca se estiverem na ordem errada. Esse processo é repetido até que nenhuma troca seja necessária, indicando que a lista está ordenada. O Bubble Sort é fácil de entender, mas não é eficiente para grandes conjuntos de dados, pois sua complexidade de tempo é O(n^2), onde n é o número de elementos na lista. Em comparação com algoritmos mais avançados, o Bubble Sort é geralmente menos eficiente em termos de desempenho.",
      urlImage: bubbleSortImg,
      badges: ["Ordenação", "O(n^2)", "Ineficiente", "Estável"],
      codeUrl: "https://github.com/pedrohenrikle/algorithms-in-js/blob/main/algorithms/bubble-sort/bubble-sort.ts"
    },
  ]
};
