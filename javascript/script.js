console.log("test")

let text = document.getElementById("text")
let input1 = document.getElementById("input1")
let isClicked  = false


function changeText(){
    text.innerHTML ="WOOOOOOOOW"
    if(isClicked == true){
        isClicked = false
        text.innerHTML = "Nej"
    } else {
        isClicked = true
        text.innerHTML = "Ja"
    }
}