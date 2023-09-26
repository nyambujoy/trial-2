
const selectButton = document.getElementById("selectSize")
selectButton.addEventListener("click", getSize)

function getSize() {
    let size = prompt("pick the size of the board (1-100)")
    console.log(size)
    return size

}

function showGrid(size) {

    const gameBoard = document.querySelector(".board")


    gameBoard.style.gridTemplateColumns = `repeat (${size},1fr)`
    gameBoard.style.gridTemplateRows = `repeat (${size},1fr)`
    let sizeGrid = size * size

    for (let i = 0; i < sizeGrid; i++) {
        const cell = document.createElement('div');
        cell.addEventListener("mouseover", colorDiv)


        gameBoard.insertAdjacentElement('beforeend', cell)

    }

}

function colorDiv() {
    const arrayOfColorFunctions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

    let randomColorString = '#';


    for (let x = 0; x < 6; x++) {

        let index = Math.floor(Math.random() * 16)
        let value = arrayOfColorFunctions[index]

        randomColorString += value
    }
    console.log(randomColorString)

    return randomColorString


}



showGrid()


