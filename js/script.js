const canvas = document.querySelector("#canvas");
const canvasWidthInput = document.querySelector("#canvasWidthInput");
const canvasHeightInput = document.querySelector("#canvasHeightInput");
const btnChangeSize = document.querySelector("#btnChangeSize");
const colors = document.querySelectorAll(".colorPicker");
const colorSelected = document.querySelector("#colorSelected");

let mouseIsPressed = false;
let currentColor = "black";

document.addEventListener('mousedown', function(){
    mouseIsPressed = true;
})
document.addEventListener('mouseup', function(){
    mouseIsPressed = false;
})

colors.forEach(
    function(node){
        node.addEventListener('click', function(e){
            changeColor(e.target.id);
        })
    }
)


createCanvas(16, 16);
btnChangeSize.addEventListener('click', function(){
    createCanvas(canvasWidthInput.value, canvasHeightInput.value)})

function createCanvas(n, m){
    if(n > 100 || m > 100){
        alert("The width and height can be at max 100. Please enter a value under 100");
        return;
    }
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
    for(let i = 0; i < m; i++){
        const div = document.createElement('div');
        div.classList.toggle("pixelContainer");
        div.style.width = "100%";
        div.style.height = (100 / m) + "%";
        for(let j = 0; j < n; j++){
            const anotherDiv = document.createElement("pixel");
            anotherDiv.classList.toggle("pixel");;
            anotherDiv.style.width = (100 / n) + "%";
            anotherDiv.style.height = "100%";
            anotherDiv.addEventListener('mouseenter', function(e){
                if(mouseIsPressed) changePixelColor(e);
            })
            anotherDiv.addEventListener('click', function(e){
                changePixelColor(e);
            })
            if((i + j) % 2 != 0){
                anotherDiv.style.backgroundColor = "gray";
                anotherDiv.classList.toggle("gray");
            }
            else{
                anotherDiv.classList.toggle("white");
            }
            div.appendChild(anotherDiv);
        }
        canvas.appendChild(div);
    }
}

function changeColor(color){
    currentColor = color;
    colorSelected.style.backgroundColor = color;
}

function changePixelColor(e){
    e.target.style.backgroundColor = currentColor;
    e.target.style.opacity = "1.0";
}