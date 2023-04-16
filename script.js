const container = document.getElementById("container");
//-------------------Slider-------------------//
const slider = document.getElementById("slider");
const gridCountPara = document.getElementById("gridCountPara");
gridCountPara.textContent = `${slider.value}x${slider.value}`;
let divCount = slider.value * slider.value;
let sizeOfPixels = 624 / slider.value;

function values() {
  gridCountPara.textContent = `${slider.value}x${slider.value}`;
  divCount = slider.value * slider.value;
  sizeOfPixels = 624 / slider.value;
}
function changeSizes() { 
const allDivs = container.querySelectorAll("div");
  allDivs.forEach(div => {
    div.style.height = `${sizeOfPixels}px`;
    div.style.width = `${sizeOfPixels}px`;
  }
  ) 
}

function newDivCount() {
  container.replaceChildren();
  let divCount = slider.value ** 2;
  let divs = [];
  for (let i = 0; i < divCount; i++) {
    divs[i] = document.createElement("div");
    container.appendChild(divs[i]);
    divs[i].classList.add("grid");
  }
}

function coloring() {
  let childDivs = container.querySelectorAll("div");
  childDivs.forEach(div => {
  div.addEventListener('mouseover', () => {
    div.classList.add('colored');
    div.style.backgroundColor = `${colorPicker.value}`;
    div.classList.remove('grid');
  });
});
}
//-----------------Container Divs-------------------//

 let divs = [];
  for (let i = 0; i < 256; i++) {
    divs[i] = document.createElement("div");
    container.appendChild(divs[i]);
    divs[i].classList.add("grid");
  }
let childDivs = container.querySelectorAll("div");
  childDivs.forEach(div => {
  div.addEventListener('mouseover', () => {
    div.classList.add('colored');
    div.style.backgroundColor = `${colorPicker.value}`;
    div.classList.remove('grid');
  });
});

//------------Color Picker------------//
const colorPicker = document.getElementById('color-picker');
colorPicker.value = '#3B475E';
function pickColor() {
  let childDivs = container.querySelectorAll("div");
  childDivs.forEach(div => {
    div.addEventListener('mouseover', () => {
      div.classList.remove('grid');
      div.classList.remove('colored');
      div.classList.remove('randomize')
      div.classList.remove("addShadow");
      div.classList.remove('black')
      div.classList.add('picked-color')
      div.style.backgroundColor = `${colorPicker.value}`;
  });
});
}
colorPicker.addEventListener('input', pickColor);

//------------Reset Button-----------//
const resetButton = document.getElementById("reset");
const coloredDivs = container.getElementsByClassName("colored");
const blackDivs = container.getElementsByClassName("black");
const randomDivs = container.getElementsByClassName("randomize");
const addShadowDivs = container.getElementsByClassName("addShadow");
const pickedColorDivs = container.getElementsByClassName('picked-color');
function removeGridClass() {
  const combinedArray = Array.from(coloredDivs).concat(Array.from(blackDivs), Array.from(randomDivs), Array.from(addShadowDivs), Array.from(pickedColorDivs));
  for (const grids of combinedArray)
  { 
    grids.classList.remove('black');
    grids.classList.remove('colored');
    grids.classList.remove('randomize');
    grids.classList.remove('addShadow');
    grids.classList.remove('picked-color');
    grids.classList.add('grid');
    grids.style.backgroundColor = '#FFFFFF'
}
};
resetButton.addEventListener("click", removeGridClass)
  
//---------------Black Button-------------------//

const blackButton = document.getElementById("black");
function blackIt() { 
let childDivs = container.querySelectorAll("div");
  childDivs.forEach(div => {
    div.addEventListener('mouseover', () => {
      div.classList.remove('grid');
      div.classList.remove('colored');
      div.classList.remove('randomize')
      div.classList.remove("addShadow");
      div.classList.remove('picked-color');
      div.classList.add('black')
      div.style.backgroundColor ="#000000"
  });
});
}
blackButton.addEventListener("click", blackIt);

//---------------addShadow Button-------------------//
/*
 const addShadowButton = document.getElementById("addShadow");
function addShadow() { 
let childDivs = container.querySelectorAll("div");
  childDivs.forEach(div => {
    div.addEventListener('mouseover', () => {
      div.classList.remove('grid');
      div.classList.remove('colored');
      div.classList.remove('randomize')
      div.classList.remove('black')
      div.classList.add("addShadow")
      div.style.
  });
});
}
addShadowButton.addEventListener("click", addShadow); 
*/
//----------Random Button-----------//

const randomButton = document.getElementById("random");
function randomColor() { 
let childDivs = container.querySelectorAll("div");
  childDivs.forEach(div => {
    div.addEventListener('mouseover', () => {
      div.classList.remove('grid');
      div.classList.remove('colored');
      div.classList.remove('black');
      div.classList.remove("addShadow");
      div.classList.remove('picked-color');
      div.classList.add('randomize');
      div.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
   
  });
});
}

randomButton.addEventListener("click", randomColor);  