const picker = document.getElementById("colorpicker")
const text = document.getElementById("title")
const colorcode = document.getElementById("colorcode")

picker.addEventListener('input',()=>{
    let inputValue = picker.value
    document.body.style.backgroundColor = inputValue
    colorcode.innerText = picker.value
    text.style.color = "#ffffff"
    colorcode.style.color = "#ffffff"
})