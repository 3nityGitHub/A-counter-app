let counterDisplay = document.getElementById("display")
let counterSaver = document.getElementById("save-entry")
let numCount = 0

function counter() {
    numCount += 1
    counterDisplay.textContent = numCount
}

function saver() {
    let countString = numCount + ' - '
    counterSaver.textContent += countString
    counterDisplay.textContent = 0
    numCount = 0

}