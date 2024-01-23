const canvas = document.querySelector("#canvas");

createCanvas(16, 16);

function createCanvas(n, m){
    for(let i = 0; i < n; i++){
        const div = document.createElement('div');
        div.classList.toggle("pixel");
        div.style.width = "100%";
        div.style.height = (100 / m) + "%";
        for(let j = 0; j < m; j++){
            const anotherDiv = document.createElement("pixel");
            anotherDiv.classList.toggle("pixel");
            anotherDiv.style.width = (100 / n) + "%";
            anotherDiv.style.height = "100%";
            if((i + j) % 2 != 0){
                anotherDiv.style.backgroundColor = "gray";
            }
            div.appendChild(anotherDiv);
        }
        canvas.appendChild(div);
    }
}