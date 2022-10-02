
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