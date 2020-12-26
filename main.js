
let random = document.getElementById('random');

let black = document.getElementById('black')
let eraser = document.getElementById('eraser')
let incrementD = document.getElementById('incdark')
let colorPicker= document.getElementById('pick')
let drowingBoard = document.querySelector(".dbox")
console.log(drowingBoard)

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
        

}getRandomColor()