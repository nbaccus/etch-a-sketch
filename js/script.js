const wrapper = document.querySelector(".wrapper");

function createBoard(gridsize) {
    for (let i=1; i<=gridsize*gridsize; i++) {
        const grid = document.createElement("div");
       
        wrapper.appendChild(grid);
    }


    let divs = wrapper.querySelectorAll('div');
    divs.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.style.background="black";

        });
    });
    wrapper.style.gridTemplateColumns=`repeat(${gridsize}, 1fr)`;
    wrapper.style.gridTemplateRows=`repeat(${gridsize}, 1fr)`;
}

function clearBoard() {
    let divs = wrapper.querySelectorAll('div');
    divs.forEach((div) => {
            div.style.background="white";
    });
    }


createBoard(70);

const btn = document.querySelector('button');
btn.addEventListener('click', ()=> {
    clearBoard();
    var gridsize = window.prompt("Choose grid size e.g. Type 20 for a 20x20 grid.Default is 70px and max size is 100px");
    if (gridsize != null && gridsize !="" && gridsize<=100) {  
        createBoard(gridsize);
    }
    else {
        createBoard(70);
    }

});