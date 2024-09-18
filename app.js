let chessboard = document.getElementById("chessboard");

    for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
            if ((row + col) % 2 === 0) {
                cell.classList.add("white");
            } else {
                cell.classList.add("black");
            }

            chessboard.appendChild(cell);
        }
    }
    let counterValue = 0;
    let counterElement = document.querySelector("#counterValue");
    function updateCounter() {
        counterElement.innerText = counterValue;
    }
    document.querySelector("#increase").addEventListener("click", () => {
        counterValue += 1;
        updateCounter();
    });

    document.querySelector("#decrease").addEventListener("click", () => {
        counterValue -= 1;
        updateCounter();
    });

    document.querySelector("#increase5").addEventListener("click", () => {
        counterValue += 5;
        updateCounter();
    });

    document.querySelector("#decrease5").addEventListener("click", () => {
        counterValue -= 5;
        updateCounter();
    });

    function getRandomColor() {
        let r1 = Math.floor(Math.random() * 255);
        let r2 = Math.floor(Math.random() * 255);
        let r3 = Math.floor(Math.random() * 255);
        return `rgb(${r1},${r2},${r3})`;
    }

    document.querySelector("#changeColor").addEventListener("click", () => {
        counterElement.style.color = getRandomColor();
    });

    document.querySelector("#sizeIncrease").addEventListener("click", () => {
        let currentSize = parseFloat(window.getComputedStyle(counterElement).fontSize);
        counterElement.style.fontSize = `${currentSize + 2}px`;
    });

    document.querySelector("#sizeDecrease").addEventListener("click", () => {
        let currentSize = parseFloat(window.getComputedStyle(counterElement).fontSize);
        counterElement.style.fontSize = `${currentSize - 2}px`;
    });