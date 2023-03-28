const container = document.getElementById("container");

const divs = [];

for (let i = 0; i < 256; i++) {
    divs[i] = document.createElement("div");
    container.appendChild(divs[i]);
    divs[i].classList.add("grid");
 
   divs[i].addEventListener("mouseover", (event) => {
    // reference the specific element that was hovered over
    const hoveredElement = event.target;
    // add class to the hovered element
       hoveredElement.classList.add("colored");
  });
}




    
/* 
Hoverladığımızda classı ekleyen kodu yaz.
neler lazım;
hoverladığımız element
hoverladığımız elemente fonksiyonla class ekleme
addeventlistener ve mouseover kullanma.

soru 1: javascriptte array ile oluşturulan html elementlerini nasıl spesifikleştirilir
 */


