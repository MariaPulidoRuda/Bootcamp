//Iteración #1: 

/*Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
Usa la función .***includes*** de javascript*/

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let i = 0; i < products.length; i++) {
    const str = products[i];
if (str.includes("Camiseta")) {
    console.log(str)
}

}


/*Iteración #3:

Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.

Puedes usar este array:*/


const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
for (const places of placesToTravel) {
    console.log(places)

}

/*Iteración #4: 

Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:*/

let alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (let key in alien) {

    console.log(`La clave: ${key}, tiene como valor: ${alien[key]}`);
}


/*Iteración #5: Probando For**

Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 
y 40. Imprime en un ***console log*** el array. 
Puedes usar este array:*/


const placesTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
const newPlaces = []
for (let i = 0; i < placesTravel.length; i++) {
if (placesTravel[i].id != 11) {
    if (placesTravel[i].id != 40) {
        newPlaces.push(placesTravel[i])
    }
    }
}

console.log(newPlaces)



/**Iteración #6: 

Mixed For...of e includes**

Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes 
usar la función ***.includes()*** para comprobarlo.Puedes usar este array:*/

