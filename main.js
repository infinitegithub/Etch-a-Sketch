
let random = document.getElementById('random');
let myRange= document.getElementById('myRange');
let black = document.getElementById('black');
let eraser = document.getElementById('eraser');
let incrementD = document.getElementById('incdark');
let colorPicker= document.getElementById('pick');
let drowingBoard = document.querySelector(".dbox");

//console.log(myRange);
let rangeValue =document.querySelector('.rangeValue');
 myRange.addEventListener('input', () =>{
    console.log(myRange.value)
    rangeValue.innerHTML = myRange.value;
    if(myRange.value ==16){ 
        rangeValue.textContent = 'Max'};
    for( c =0; c < myRange.value; c++){
        let column = document.createElement('div');
        let row = document.createElement('div');
        drowingBoard.appendChild(column).classList.toggle('colums');
        drowingBoard.appendChild(row).classList.toggle('rows');
    }

});

function getRandomColor() {
    colors = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
    let randone = colors[Math.floor(Math.random() * colors.length)];
        let randtwo = colors[Math.floor(Math.random() * colors.length)];
        let randthree = colors[Math.floor(Math.random() * colors.length)];
        let randfour = colors[Math.floor(Math.random() * colors.length)];
        let randfive = colors[Math.floor(Math.random() * colors.length)];
        let randsix = colors[Math.floor(Math.random() * colors.length)];
        let  randomHexCode = '#'+  randone + randtwo + randthree + randfour + randfive + randsix;
        console.log(randomHexCode)
        
}getRandomColor();
console.log(myRange.value)