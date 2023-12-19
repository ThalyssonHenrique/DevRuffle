const buttonDraw = document.querySelector(".draw-button")
buttonDraw.addEventListener("click", resultRuffle)

function resultRuffle() {
    const inputValueMin = Math.ceil(document.querySelector(".input-between").value)
    const inputValueMax = Math.floor(document.querySelector(".input-and").value)
    const result = Math.floor(Math.random() * (inputValueMax - inputValueMin + 1)) + inputValueMin;

    if(inputValueMin >= inputValueMax){
        alert("The value on the right needs to be higher")
    }
    else{
        alert(result)
    }

    
}


