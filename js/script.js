const canvas = document.querySelector("#canvas");
const canvasWidthInput = document.querySelector("#canvasWidthInput");
const canvasHeightInput = document.querySelector("#canvasHeightInput");
const btnChangeSize = document.querySelector("#btnChangeSize");

createCanvas(16, 16);
btnChangeSize.addEventListener('click', function(){
    createCanvas(canvasWidthInput.value, canvasHeightInput.value)})

function createCanvas(n, m){
    while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }
    canvas.style.aspectRatio = n + "/" + m;
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