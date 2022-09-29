//Iteration#1 

//1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.

let myFavoriteHero;
 myFavouriteHero = "Hulk"; 

 //1.2 Crea una variable llamada x, asigna el valor 50 a ella.
 let x;
 x = 50;
 
 //1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 

let h = 5;
 let y = 10;

 //1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.

let z = h + y; 
console.log(z)



//Iteración 2 

let character = {name: 'Jack Sparrow', age: 10};
 let age = 25;
console.log(age)



let firstName = "John"
 let lastName = "Snow"
 let edad = 24;
 console.log("Soy " + firstName + " " + lastName + ", tengo " + edad + " años y me gustan los lobos.");



const toy1 = {name: 'Buss myYear', price: 19};
 const toy2 = {name: 'Rallo mcKing', price: 29};
 const sum = 19 + 29; 
console.log(sum)




//Iteration3

//1.1 Multiplica 10 por 5 y muestra el resultado mediante console.

const product = 10*5;
console.log(product)

//1.2 Divide 10 por 2 y muestra el resultado en un console.

const quotient = 10/2;
console.log(quotient)


//1.3 Muestra mediante un console el resto de dividir 15 por 9.

let a = 15;
let b = 9;
rest = a%b;
console.log(rest)

//.4 Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5.

let p = 10;
let j = 5;
let o = p += j;
console.log(o)


//1.5 Usa el correcto operador de asignación que resultará en i = 50, teniendo dos variables c = 10 y m = 5.

let c = 10;
let m = 5;
let i = c *= m;
console.log(i)


//Iteración 4

/*1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/


const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const avenger = avengers[0];
console.log(avenger)

//1.2 Cambia el primer elemento de avengers a "IRONMAN"

const superheroe = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
superheroe.splice(0, 0, 'IRONMAN')
console.log(superheroe)

//1.3 console numero de elementos en el array usando la propiedad correcta de Array.

const longitud = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(longitud.length);


//1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array.

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('Morty','Summer');
console.log(rickAndMortyCharacters)
console.log(rickAndMortyCharacters[4])

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.

const rickAndMortyCharacter = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacter.pop();
console.log(rickAndMortyCharacter)
console.log(rickAndMortyCharacter[0])
console.log(rickAndMortyCharacter[rickAndMortyCharacter.length - 1])


//1.6 Elimina el segundo elemento del array y muestra el array por consola.

const rickAndMorty = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMorty.splice(1, 1);
console.log(rickAndMorty)




//Iteración #5

//En base al código siguiente, muestra los mensajes correctos por consola.

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if ((number2 / number1) == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if ((number3 * 5) == number1) {
  console.log("number3 por 5 es igual a number1");
}

if ((number3 * 5 == number1) && (number1 * 2 == number2)) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if ((number2 / 2 == number1) || (number1 / 5 == number3)) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

//Iteration 6

//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

let bucle = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < bucle.length; i++) {
  const element = bucle[i];
  console.log(element, i);
}

/*1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.*/

let bucles = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i <= bucles.length; i++) {
 if (i % 2 === 0 )console.log(i)

}


/*1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'.*/
