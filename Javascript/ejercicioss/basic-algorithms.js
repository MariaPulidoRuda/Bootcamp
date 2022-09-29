//Iteration#1 

//1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.

let myFavoriteHero;
 myFavouriteHero = "Hulk"; 

 //1.2 Crea una variable llamada x, asigna el valor 50 a ella.

 x = 50;

 //1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10. 

let x;
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

const product = 10*5;
console.log(product)


const quotient = 10/2;
console.log(quotient)


let a = 15;
let b = 9;
rest = a%b;
console.log(rest)



let p = 10;
let j = 5;
let o = p += j;
console.log(o)



let c = 10;
let m = 5;
let i = c *= m;
console.log(i)


//Iteraciión 4

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




