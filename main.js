let color="black";
let click = true;

function colorChange(input){
    color = input;
    pixelColor();
}
function pixelColor() {
    if(click){
        this.style.backgroundColor = color;
    }
}
function generateGrid(input){
    let grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${input}, 1fr)`;
    let reset = grid.querySelectorAll("div");
    reset.forEach((div)=> div.style.backgroundColor = "white");
    for(let i=0;i<input*input;i++){
        let pixel = document.createElement("div");
        pixel.style.backgroundColor="white";
        pixel.addEventListener('mouseover',pixelColor);
        grid.insertAdjacentElement("beforeend", pixel);
    }
}
generateGrid(16);
function reset(){
    let grid = document.querySelector(".grid");
    let reset = grid.querySelectorAll("div");
    reset.forEach((div)=> div.style.backgroundColor = "white");
    input = document.querySelector(".gridInput")
    generateGrid(input)
}
function changeSize(input){
    generateGrid(input)
}
document.querySelector('body').addEventListener('click', (e)=>{
    if(e.target.tagName != 'BUTTON'){
        click=!click;
        if(click){
            document.querySelector('.mode').textContent = "Mode: Coloring"
        }
        else{
            document.querySelector('.mode').textContent = "Mode: Not Coloring"
        }
    }
    
});