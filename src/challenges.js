// Desafio 1 - Crie a função compareTrue
const compareTrue = (param1, param2) => param1 === true && param2 === true;

// Desafio 2 - Crie a função splitSentence
function splitSentence(string) {
  return string.split(" ")
 
}

// Desafio 3 - Crie a função concatName
function concatName(name) {
  return (`${name[name.length -1]}, ${name[0]}`)
}

// Desafio 4 - Crie a função footballPoints
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 5 - Crie a função highestCount
function highestCount(array) {
  let highestCount = array[0]
  let highestCountQnt = 0
  for (let i = 0; i < array.length; i++){
    if (array[i] > highestCount){
      highestCount = array[i]
    }
  }
  for (let i = 0; i < array.length; i++){
    if (highestCount == array[i]){
      highestCountQnt += 1
    }
  }
  return highestCountQnt
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => base * height / 2;
const calcRectangleArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo'){
    return ('O valor da área do triângulo é de: ' + (calcTriangleArea(base, height)))
  }
  else if (form === 'retângulo'){
    return ('O valor da área do retângulo é de: ' + (calcRectangleArea(base, height)))
  }
  else {
    return ('Não foi possível fazer o cálculo, insira uma forma geométrica válida')
  }
}

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  let cat1distance = 0
  let cat2distance = 0
  cat1distance = mouse - cat1
  cat2distance = mouse - cat2

  cat1distance = Math.abs(cat1distance)
  cat2distance = Math.abs(cat2distance)
  
  if (cat1distance < cat2distance){
    return ('cat1')
  }
  else if (cat1distance > cat2distance){
    return ('cat2')
  }
  else {
    return ('os gatos trombam e o rato foge')
  }
}


// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (numbers) => {
  let results = [];
  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0){
      results.push('fizzBuzz');
    }
    else if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0){
      results.push('fizz');
    }
    else if (numbers[index] % 3 !== 0 && numbers[index] % 5 === 0){
      results.push('buzz');
    }
    else if (numbers[index] % 3 != 0 && numbers[index] % 5 != 0) {
      results.push('bug!');
    }
  }
  return results;
}
console.log('Resultado:' + fizzBuzz([2, 15, 7, 9, 45]));


// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
