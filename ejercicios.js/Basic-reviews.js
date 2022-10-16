//Iteración #1: Mix for e includes**

/*Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
 de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. 
 Para filtrar las categorías puedes ayudarte de la función **.includes()*/

 const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']}
   
 ];
 const categories1 = [];
 for (const movie of movies) {
    if (!movies.categories.includes())
 }

console.log(categories1)

/* **Iteración #2: Mix Fors**
       
Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
       
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]*/

let volumenAmount = 0; 
let volumenTotal = 0;

for (const user of users) { 
    
    for (const soundIndex in user.favoritesSounds) {  /
      
      volumenTotal += user.favoritesSounds[soundIndex].volume; 
      volumenAmount++; 
    }
}

    console.log(volumenTotal/volumenAmount);
       
//Iteración #4: Métodos findArrayIndex**
       
/*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición
del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y 
compruebalos.*/
       
        const arr = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

        const findArrayIndex = (array, text) => {
          return array.indexOf(text);
        };
        
        console.log(findArrayIndex(arr, "Caracol"));
        console.log(findArrayIndex(arr, "Mosquito"));
        console.log(findArrayIndex(arr, "Salamandra"));
        console.log(findArrayIndex(arr, "Ajolote"));
       
       
    
       
/* Iteración #5:
       
Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que queramos que tenga el dado que deberá 
silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y 
retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de
 javascript **Math.random();*/
       
 const rollDice = (faces) => {
    return parseInt(Math.random() * (faces + 1))
}

console.log(rollDice(6))
 
 //Iteración #6: Función swap**
       
/*Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.
Sugerencia de array: */

const swap = (array, a, b) => {
    const element = array[a]
    array[a] = array[b]
    array[b] = element
    return array
    
}

console.log(swap(exampleArray, 0, 3))