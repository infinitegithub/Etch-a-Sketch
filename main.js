//buttons
let randomBtn = document.getElementById('random');
let blackBtn = document.getElementById('black');
let eraserBtn = document.getElementById('eraser');
let incrementBtn = document.getElementById('incdark');
let colorPickerBtn = document.getElementById('pick');
let clearBtn = document.getElementById('pick');
//the grid where the divs will be generated
let drowingBoard = document.querySelector(".dbox");

let myRange = document.getElementById('myRange');


//geting a value from the range slider
let rangeValue = document.querySelector('.rangeValue');
let gridNumber = 16;
myRange.addEventListener('input', () => {
    gridNumber = myRange.value;
    rangeValue.innerHTML = gridNumber;
    console.log(gridNumber)
    creatGridCells(gridNumber)
});
// take the value the range slider and feed it to this fnction to creat gris cells 
function creatGridCells() {

    if (gridNumber == 16) {
        rangeValue.textContent = 'Max'
    };
    for (i = 0; i < (gridNumber * gridNumber); i++) {
        let gridCells = document.createElement('div');
        drowingBoard.appendChild(gridCells).classList.add('gridCells');
        drowingBoard.style.cssText = ` grid-template-columns: repeat( ${gridNumber * gridNumber}, 1fr);
                                       grid-template-rows: repeat( ${gridNumber * gridNumber}, 1fr);`

    }

};
// generating a random hexcode color, will invoked when randombtn is klicked
let randomHexCode = 0;
function getRandomColor() {
    colors = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    let randone = colors[Math.floor(Math.random() * colors.length)];
    let randtwo = colors[Math.floor(Math.random() * colors.length)];
    let randthree = colors[Math.floor(Math.random() * colors.length)];
    let randfour = colors[Math.floor(Math.random() * colors.length)];
    let randfive = colors[Math.floor(Math.random() * colors.length)];
    let randsix = colors[Math.floor(Math.random() * colors.length)];
    randomHexCode = '#' + randone + randtwo + randthree + randfour + randfive + randsix;
    return randomHexCode

}
let color = '#000000';
console.log(randomHexCode);

// setting grid celss to 16*16 as the defult
creatGridCells(gridNumber);
function colorGridCells() {
    let gridCellsOnHover = document.querySelectorAll('gridCells');
    gridCellsOnHover.forEach(gridCells => gridCells.style.cssText = `background-color:#000000;`);
};

function clearButton() {
    let containedCells = drowingBoard.querySelectorAll('.gridCells');
    containedCells.forEach(gridCells => gridCells.style.cssText = 'background-color: #ffffff;');
    console.log(containedCells)
}
clearButton();


// 
drowingBoard.addEventListener('mouseover', colorGridCells);
