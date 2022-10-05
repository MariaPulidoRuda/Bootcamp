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

