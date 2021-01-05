//buttons
let randomBtn = document.getElementById('random');
let blackBtn = document.getElementById('black');
let eraserBtn = document.getElementById('eraser');
let incrementBtn = document.getElementById('incdark');
let colorPickerBtn = document.getElementById('pick');
let clearBtn = document.querySelector('.clearBtn');
//the grid where the divs will be generated
let drowingBoard = document.querySelector(".dbox");

let myRange = document.getElementById('myRange');

let color = '#000000';

//geting a value from the range slider
let rangeValue = document.querySelector('.rangeValue');
let gridNumber = 100;

myRange.addEventListener('input', () => {

    gridNumber = myRange.value;
    rangeValue.innerHTML = gridNumber;
    creatGridCells(gridNumber);

});
// take the value the range slider and feed it to this fnction to creat gris cells 
function creatGridCells() {

    if (gridNumber == 100) {
        rangeValue.textContent = 'Max'
    };
    for (i = 0; i < (gridNumber ** 2); i++) {
        let gridCells = document.createElement('div');
        drowingBoard.appendChild(gridCells).classList.add('gridCells');
        drowingBoard.style.cssText = ` display: grid; grid-template-columns: repeat( ${gridNumber}, 1fr);
          grid-template-rows:repeat( ${gridNumber}, 1fr);`

    }
    let gridCellsOnHover = drowingBoard.querySelectorAll('div');
    gridCellsOnHover.forEach(gridCell => gridCell.addEventListener('mouseover', () => gridCell.style.backgroundColor = `${color}`));

};
// generating a random hexcode color, will invoked when randombtn is klicked

function getRandomColor() {
    colors = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    let randone = colors[Math.floor(Math.random() * colors.length)];
    let randtwo = colors[Math.floor(Math.random() * colors.length)];
    let randthree = colors[Math.floor(Math.random() * colors.length)];
    let randfour = colors[Math.floor(Math.random() * colors.length)];
    let randfive = colors[Math.floor(Math.random() * colors.length)];
    let randsix = colors[Math.floor(Math.random() * colors.length)];
    randomColor = '#' + randone + randtwo + randthree + randfour + randfive + randsix;
    return randomColor

}
getRandomColor();



// setting grid celss to 16*16 as the defult
creatGridCells(gridNumber);



function randomColorBnt() {

    let containedCells = drowingBoard.querySelectorAll('div');
    containedCells.forEach(gridCell => gridCell.addEventListener('mouseover', () => {
        color = getRandomColor();

        gridCell.style.backgroundColor = `${color}`
    }));

};
function blackButton() {

    let containedCells = drowingBoard.querySelectorAll('div');
    containedCells.forEach(gridCell => gridCell.addEventListener('mouseover', () => {
        gridCell.style.backgroundColor = '#000000';
    }));

};

function erassebutton() {

    let containedCells = drowingBoard.querySelectorAll('div');
    containedCells.forEach(gridCell => gridCell.addEventListener('mouseover', () => {


        gridCell.style.backgroundColor = '#ffffff';
    }));

}

function pickColour(e) {
    let containedCells = drowingBoard.querySelectorAll('div');
    containedCells.forEach(gridCell => gridCell.addEventListener('mouseover', () => {
        color = e.target.value;
        gridCell.style.backgroundColor = `${color}`
    }));

}
function resetdrowingboard() {
    let containedCells = drowingBoard.querySelectorAll('div');
    containedCells.forEach(gridCell => gridCell.style.backgroundColor = '#ffffff');
}




// event listners for the buttons 
blackBtn.addEventListener('click', blackButton);
eraserBtn.addEventListener('click', erassebutton);
randomBtn.addEventListener('click', randomColorBnt);
colorPickerBtn.addEventListener('input', pickColour)
clearBtn.addEventListener('click', resetdrowingboard);