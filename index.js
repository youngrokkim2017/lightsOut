// generate a randomly winnable board

const WIDTH = 7;
const HEIGHT = 5;

function toggleCell(y, x) {
    // find the cell at y, x can change it off <--> on

    if ((y < 0 || y > HEIGHT - 1 ) || (x < 0 || x > WIDTH - 1)) {
        return;
    }

    var id = "#cell-" + y + "-" + x; // "#cell-4-1"
    console.log("toggleCell", id);
    var cell = document.querySelector(id);
    cell.classList.toggle("on"); 
}

function handleCellClick(event) {
    var id = event.target.id; // if you click it will console log "#cell-4-1"
    var y = Number(id[5]);
    var x = Number(id[7]);
    
    // toggleCell(y, x);
    toggleCellAndNeighbors(y, x);

    if (checkForWin()) {
        setTimeout(handleWin, 2000);
    }
}

function toggleCellAndNeighbors(y, x) {
    toggleCell(y, x)
    toggleCell(y + 1, x);
    toggleCell(y - 1, x);
    toggleCell(y, x + 1);
    toggleCell(y, x - 1);
}

function handleWin() {
    // called when we won

    alert("YOU WIN");
}

function checkForWin() {
    for (var cell of document.querySelectorAll(".cell")) {
        if (cell.classList.contains("on")) {
            return false;   
        }
    }
    return true;
}

function addClickListeners() {
    for (var cell of document.querySelectorAll(".cell")) {
        console.log("addClickListeners", cell);
        cell.addEventListener("click", handleCellClick); // passing the function as a callback
    }
    
}

addClickListeners();
// toggleCell();