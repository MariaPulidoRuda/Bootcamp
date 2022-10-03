
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
