# Projeto Playground Functions

Projeto com o intuito de praticar lógica de programação implementando funções que resolvem problemas com respostas pré-determinadas.

Utilizando a lógica de programação para auxiliar na análise de cada problema e resposta esperada, facilitando a implementação do código de cada uma das funções.

## Funções Implementadas

A seguir, estão as funções implementadas neste projeto:

### 1 - compareTrue

A função `compareTrue` recebe dois parâmetros booleanos e deve:

- Retornar `true` se ambos os valores forem verdadeiros;
- Retornar `false` se um ou ambos os parâmetros forem falsos.

### 2 - splitSentence

A função `splitSentence` recebe uma string como parâmetro e deve retornar um array com as palavras separadas por vírgula.
Exemplo: se a função receber a string 'go Trybe', o retorno deverá ser `['go', 'Trybe']`.

### 3 - concatName

A função `concatName` recebe um array de strings e deve retornar uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independentemente do tamanho do array.
Exemplo:
Caso o parâmetro passado para a função `concatName` seja o array `['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']`, a função deverá retornar `Paolillo, Lucas`.

### 4 - footballPoints

A função `footballPoints` recebe o número de vitórias (`wins`) e o número de empates (`ties`) e retorna a quantidade de pontos que o time marcou em um campeonato. Para isso, considere que:

- `wins`: é o número de vitórias e vale 3 pontos;
- `ties`: é o número de empates e vale 1 ponto.

### 5 - highestCount

A função `highestCount` deve retornar a quantidade de vezes que o maior número se repete dentro do array.
Exemplo:
Caso o parâmetro seja um array com valores `[9, 1, 2, 3, 9, 5, 7]`, a função deverá retornar `2`, que é a quantidade de vezes que o número `9` (maior número do array) se repete.

### 6 - Funções para cálculo de áreas

- `calcTriangleArea`: função que calcula a área de um triângulo.
- `calcRectangleArea`: função que calcula a área de um retângulo.
- `calcAllAreas`: função que exibe o resultado desses cálculos de acordo com o parâmetro passado para a função.

### 7 - Caça ao Rato

A função `catAndMouse` verifica qual gato está mais perto do rato.
Imagine que dois gatos estão caçando o mesmo rato. Você precisa verificar qual gato está mais perto de sua presa.

### 8 - fizzBuzz

A função `fizzBuzz` recebe um array de números e, para cada número do array, é realizada a divisão por 3 e por 5. De acordo com o resultado, a função deve retornar um array de strings.
