const container = document.querySelector(".gamecontainer")


const btnWhite = document.createElement("button")
const btnBlack = document.createElement("button")
const btnRainbow = document.createElement("button")
const btnSize = document.createElement("button")


const buttonsContainer = document.querySelector(".buttons") 


function createDivs(col, rows){
    for(let i = 0; i < (col * rows); i++){
        const div = document.createElement("div")
        div.style.border = "1px solid"
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        container.appendChild(div).classList.add("box")
    }
}
createDivs(16, 16)

function reset(){
    const boxs = container.querySelectorAll(".box")
    boxs.forEach(box => box.remove())
}

function resize(){
    btnSize.textContent = "Size"
    btnSize.addEventListener('click', () => {
        let user = prompt("Escolha a quantidade de colunas x linhas.")
        if(user === null || user < 1){
            reset()
            createDivs(16, 16)
            whiteColor()
            blackColor()
            rainbowColor()

        } else{
            reset()
            createDivs(user, user)
            whiteColor()
            blackColor()
            rainbowColor()
            
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add("btn")
}

resize()

function whiteColor(){
    const boxs = container.querySelectorAll(".box")
    btnWhite.textContent = "White"
    btnWhite.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () =>{
            box.style.background = "white"
        }))
    })

    buttonsContainer.appendChild(btnWhite).classList.add("btn")
}
whiteColor()

function blackColor(){
    const boxs = container.querySelectorAll(".box")
    btnBlack.textContent = "Black"
    btnBlack.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = "black";
        }))
    })

    buttonsContainer.appendChild(btnBlack).classList.add("btn")
}
blackColor()



function rainbowColor() {
    
    const boxs = container.querySelectorAll('.box')
    btnRainbow.textContent = "RGB"
    btnRainbow.addEventListener('click' ,() => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let color0 = Math.floor(Math.random() * 256);
            let color1 = Math.floor(Math.random() * 256);
            let color2 = Math.floor(Math.random() * 256);
            let color3 = Math.floor(Math.random() * 256);
            const RGB = `rgb(${color0},${color1},${color2}, ${color3})`;
            box.style.background = RGB;
        }))
    })
    buttonsContainer.appendChild(btnRainbow).classList.add('btn')
}
rainbowColor()



