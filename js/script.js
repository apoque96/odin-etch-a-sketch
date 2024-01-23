const canvas = document.querySelector("#canvas");
const canvasWidthInput = document.querySelector("#canvasWidthInput");
const canvasHeightInput = document.querySelector("#canvasHeightInput");
const btnChangeSize = document.querySelector("#btnChangeSize");

let mouseIsPressed = false;

document.addEventListener('mousedown', function(){
    mouseIsPressed = true;
})
document.addEventListener('mouseup', function(){
    mouseIsPressed = false;
})

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
                if(mouseIsPressed){
                    e.target.style.backgroundColor = "red";
                    e.target.style.opacity = "1.0";
                }
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