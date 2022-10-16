
//iteración 1
//Completa la función que tomando dos números como argumento devuelva el más alto.


function sum(numberOne , numberTwo) {
    if(numberOne > numberTwo) {
        return numberOne
  } else {
    return numberTwo
  }
  
}
  console.log(sum(8,0))
  


//Iteración #2:

/*Buscar la palabra más larga. 
Completa la función que tomando un array de strings como argumento devuelva el más largo, en 
caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:*/

const avengers = ["Hulk", "Thor", "IronMan", "Capitan A.", "Spiderman", "Capitan M."]

function findLongestWord (param){
    let longitud = 0;
    let superheroe = "";
    for(let i = 0; i < avengers.length; i++){  
        if(avengers[i].length > longitud){
            longitud = avengers[i].length;
            superheroe = avengers[i]
        }
    }
    return(superheroe)
}
console.log(findLongestWord(avengers));


//Iteración #3

/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. */

//Puedes usar este array para probar tu función:

const number = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param){
    let suma = 0;
    for(let i = 0; i < number.length; i++){
        suma = suma + number[i]
    }
    return suma;
}
console.log(sumAll(number));

//Iteration4

//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const number = [12, 21, 38, 5, 45, 37, 6];

function average(param){
    let sum = 0;
    let promedio = 0;

    for(let i = 0; i < number.length;i++){
        sum += number[i]
    }

    promedio = sum / number.length;
    return promedio;
}

console.log(average(number));

//Iteración #5: Calcular promedio de strings**

/*Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud 
del string y lo sume. Puedes usar este array para probar tu función:*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
  
function averageWord(param) {
    let sumAll = 0;
    for (let value of param) {
        if(typeof value == "number") {
            sumAll += value;
        } else {
            sumAll += value.length;
        }
    }
    return sumAll;
}

console.log(averageWord(mixedElements));

//Iteración #6: Valores únicos**

/*Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina 
para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:*/
const duplicates = [
    "sushi",
    "pizza",
    "burger",
    "potatoe",
    "pasta",
    "ice-cream",
    "pizza",
    "chicken",
    "onion rings",
    "pasta",
    "soda",
  ];
  
  let duplicate = [];
  function removeDuplicates(duplicates) {
    
    for (let i = 0; i < duplicates.length; i++) {
      if (duplicates[i + 1] == duplicates[i]) {
        duplicate.push(duplicates[i]);
      }
      return duplicate;
    }
  }
  
  console.log(removeDuplicates);

  //Iteración #7: Buscador de nombres**

/*Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba 
si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. 
Puedes usar este array para probar tu función:*/
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param) {
    // insert code
  }

//iteration8


/*Crea una función que nos devuelva el número de veces que se repite cada 
una de las palabras que lo conforma.  Puedes usar este array para probar tu función:*/


const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  let totalCount = [];
  const repeatCounter = (elements) =>{
    elements.forEach((element) => {
        totalCount[element] = totalCount[element] + 1 || 1;
    })
    return totalCount;
  }
  console.log(repeatCounter(counterWords));