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
//iteration #2
const alumns = [
    { name: "Pepe Viruela", T1: false, T2: false, T3: true },
    { name: "Lucia Aranda", T1: true, T2: false, T3: true },
    { name: "Juan Miranda", T1: false, T2: true, T3: true },
    { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
    { name: "Raquel Benito", T1: true, T2: true, T3: true },
  ];
  
  for (let i = 0; i < alumns.length; i++) {
    const alumn = alumns[i];
    let trim = 0;
    let isAproved;
    for (const key in alumn) {
      if (alumns[i][key] === true) {
        trim += 1;
      }
      trim >= 2 ? (isAproved = true) : (isAproved = false);
    }
    console.log(${alumns[i].name} aproved is ${isAproved});
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



 const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ];
    const elim = [];
    for (const toy of toys) {

    if (!toy.name.includes("gato")) {
       elim.push(toy);
    }
}
    console.log(elim);

    
    //iteration 7
    /*Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 
    ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:*/
  
    const popularToys = [];
const toys = [
    {id: 5, name: 'Buzz MyYear', sellCount: 10}, 
    {id: 11, name: 'Action Woman', sellCount: 24}, 
    {id: 23, name: 'Barbie Man', sellCount: 15}, 
    {id: 40, name: 'El gato con Guantes', sellCount: 8},
    {id: 40, name: 'El gato felix', sellCount: 35}
]

for (const toy of toys) {
    if (toys[toy].sellCount >= 15) {
        popularToys.push(toys[toy]);
      }
    }

  console.log(popularToys);


