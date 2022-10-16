

//2.1 Inserta dinamicamente en un html un div vacio con javascript.

let emptyDiv = document.createElement('div');
document.body.appenChild('div')


//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let newDiv = document.createElement('div'); 
let paragraph = document.createElement('p');
newDiv.appendChild(paragraph);
document.body.appendChild(newDiv); 


//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let newDiv1 = document.createElement('div');

for (i = 0; i <= 6; i++) {
    const newP1 = document.createElement("p");
    newDiv1.appendChild(newP1);
  }
  console.log(newDiv1)


//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let text = document.createElement('p');
 text.innerText = 'Soy dinámico!!'
document.body.appendChild(text)

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const subtitle = document.querySelector('.fn-insert-here')
subtitle.innerText = 'Wubba Lubba dub dub'

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const listNodes = document.querySelector("ul");
const list = document.createElement('ul');

for (const app of apps) {
 
  const li = `<li>${app}</li>`;
  list.innerHTML += li;
}

console.log(list);


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let fnNodes = document.querySelectorAll(".fn-remove-me");
fnNodes.forEach(element => {
    element.remove();
});

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con 
//.appendChild.

let myDivs = document.querySelectorAll("div");
let parrafoNuevo2 = document.createElement('p');
let texto3 = document.createTextNode('Voy en medio');
parrafoNuevo2.appendChild(texto3);
document.body.insertBefore(parrafoNuevo2, myDivs[1]);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here</html>

let allP = document.querySelectorAll(".fn-insert-here");
allP.forEach(element => {
    let parrafo3 = document.createElement("p");
    let texto4 = document.createTextNode("Voy dentro!");
    parrafo3.appendChild(texto4);
    element.appendChild(parrafo3);
});