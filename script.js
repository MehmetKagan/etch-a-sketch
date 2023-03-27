const container = document.getElementById("container");

const divs = [];

for (let i = 0; i < 256; i++) {
    divs[i] = document.createElement("div");
    container.appendChild(divs[i]);
    divs[i].classList.add("grid");
}


