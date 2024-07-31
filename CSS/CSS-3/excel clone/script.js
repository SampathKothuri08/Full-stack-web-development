const insert = document.querySelector(".insertrows");

for(let i=1;i<=100;i++){
    const div = document.createElement("div");
    div.className = "firstrow";
    const num = document.createElement("div");
    num.className= "topleft";
    num.innerText = i;
    div.appendChild(num);
    for(let j=1;j<=20;j++){
       const cell = document.createElement("div");
       cell.className = "cell";
       div.appendChild(cell);
    }
    insert.appendChild(div);
}