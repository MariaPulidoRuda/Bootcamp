/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const list = document.createElement('ul');
countries.forEach(country => {
    const listItem = document.createElement('li');
    listItem.innerHTML=country;
    list.appendChild(listItem);
});
document.body.appendChild(list);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let removed = document.querySelectorAll(".fn-remove-me");
removed.forEach(element => {
    element.remove();
});

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const printHere = document.querySelector('[data-function]')
const carList = document.createElement('ul')

cars.forEach((car) => {
  const li = `<li>${car}</li>`
  carList.innerHTML += li
})

printHere.appendChild(carList)

/*1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.*//*

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.*/

const deleteCountryBtnNode = document.querySelectorAll('.deleteCountryBtn')

deleteCountryBtnNode.forEach((e) => {
  e.addEventListener('click', () => {
    e.parentElement.remove()
  })
})