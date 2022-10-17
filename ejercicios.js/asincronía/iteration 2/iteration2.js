/*ITERATION 2

2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.*/

const baseUrl = 'https://api.nationalize.io';

const getData = async (param) => {
  const response = await fetch(`${baseUrl}?name=${param}`);
  const data = await response.json();
  console.log(data);
  return data;
};

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const input = document.querySelector("input");
  console.log(input.value)
  getData(input.value);
});