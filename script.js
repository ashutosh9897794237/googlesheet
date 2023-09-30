const header = document.getElementById("header");
const body = document.getElementById("body");
for(let i = 65; i<=90; i++)
{
    let char = String.fromCharCode(i);

    const bold = document.createElement("b");
    bold.innerText = char;
    header.appendChild(bold)
}

//inside each row we should create 27 cells 1 for serial no.

function createAndAppendRow(rowNumber){
    const row = document.createElement("div");
    row.className = "row";
    for(let i=64; i<=90; i++){
        if(i===64){
            // this represent the serial no.
            const b = document.createElement("b");
            b.innerText = rowNumber;
            row.appendChild(b);
        }else{
            //this represt the empty cell
            const cell = document.createElement("div");
            row.appendChild(cell);
        }
    }
    body.appendChild(row);
}
//create 100 row call the 'createAndAppendRow' function for 100 times

for(let i=0; i<=100; i++){
    createAndAppendRow(i);
}