import './style.css'
const COLOR_PALETTE = {
  '#F5E9E2' : 'Linen' ,
  '#D8CCC9' : 'Pale Silver' ,
  '#BBAFAF' : 'Black Shadow' ,
  '#9E9295' : 'Taupe Gray' ,
  '#80757B' : 'Rocket Metallic' 
};


  const addOptionsToColorPicker = () => {
    const colorPickerSelect = document.querySelector("#color-picker");
  
    Object.keys(COLOR_PALETTE).forEach((color) => {
      const option = document.createElement("option");
      option.value = color;
      option.innerText = COLOR_PALETTE[color];
  
      colorPickerSelect.append(option);
    })
  }


  const addEventListenerToColorPicker = () => {
    const colorPickerSelect = document.querySelector("#color-picker");
    const colorName = document.querySelector("#color-name");
    colorPickerSelect.addEventListener("change", (event) => {
      const newColor = event.target.value;
      document.body.style.backgroundColor = newColor;
      //Le asignamos a nuestro h2 el valor de la clave que hay almacenada en newColor al igual que hemos hecho en la primera función
      colorName.innerText = COLOR_PALETTE[newColor];
    });
  };
  
  addOptionsToColorPicker();
  addEventListenerToColorPicker();
  
  