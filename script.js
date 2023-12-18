const buttonDraw = document.querySelector(".draw-button")

function resultRuffle() {
    const inputValueMin = Math.ceil(document.querySelector(".input-between").value)
    const inputValueMax = Math.floor(document.querySelector(".input-and").value)

    const result = Math.floor(Math.random() * (inputValueMax - inputValueMin + 1)) + inputValueMin;

    alert(result)
}

buttonDraw.addEventListener("click", resultRuffle)
