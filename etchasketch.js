const container = document.querySelector("#container");
//set up the initial grid
for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        //allow you to "draw" by hovering the mouse over the canvas
        square.addEventListener("mouseover", () => {
            square.setAttribute("style", "background: gray;");
        });
        row.appendChild(square);
    }
    container.appendChild(row);
}
//button to change the size of the grid
const btn = document.querySelector("#size-editor");
btn.addEventListener("click", () => {
    let size = parseInt(prompt("Enter a new size for the grid"));
    if (size !== null) {
        //clear out the old grid
        while (container.firstChild)
            container.removeChild(container.lastChild);
        //make sure size is within bounds
        if (size > 100)
            size = 100;
        if (size <= 0)
            size = 1;
        //set up grid with new size
        for (let i = 0; i < size; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            for (let j = 0; j < size; j++) {
                const square = document.createElement("div");
                square.classList.add("square");
                square.addEventListener("mouseover", () => {
                    square.setAttribute("style", "background: gray;");
                });
                row.appendChild(square);
            }
            container.appendChild(row);
        }
    }
});