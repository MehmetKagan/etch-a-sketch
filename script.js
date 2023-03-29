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
    div.classList.remove('grid');
  });
});

//------------Reset Button-----------//
const resetButton = document.getElementById("reset");
const coloredDivs = container.getElementsByClassName("colored");
const blackDivs = container.getElementsByClassName("black");
function removeGridClass() {
  const coloredArray = Array.from(coloredDivs);
  const blackarray = Array.from(blackDivs);
  const combinedArray = Array.from(coloredDivs).concat(Array.from(blackDivs));
  for (const grids of combinedArray)
  { 
    grids.classList.remove('black');
    grids.classList.remove('colored');
    grids.classList.add('grid');
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
      div.classList.add('black')
   
  });
});
}
blackButton.addEventListener("click", blackIt);
