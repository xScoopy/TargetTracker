// declaring constants for canvas
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

// declaring constants for target elements
const white = document.querySelector('#white-target')
const black = document.querySelector('#black-target')
const blue = document.querySelector('#blue-target')
const red = document.querySelector('#red-target')
const yellow = document.querySelector('#yellow-target')

// declaring display output fields
const displayAverage = document.querySelector('#avg-display')
const displayTotal = document.querySelector('#total-display')
const displayMin = document.querySelector('#min-display')
const displayMax = document.querySelector('#max-display')

// declaring input elements
const inputDate = document.querySelector('#date-picker')
const inputArrow1 = document.querySelector('#arrow1')
const inputArrow2 = document.querySelector('#arrow2')
const inputArrow3 = document.querySelector('#arrow3')
const inputArrow4 = document.querySelector('#arrow4')
const inputArrow5 = document.querySelector('#arrow5')

//adding event listeners for output display
inputArrow1.addEventListener('input', calculate)
inputArrow2.addEventListener('input', calculate)
inputArrow3.addEventListener('input', calculate)
inputArrow4.addEventListener('input', calculate)
inputArrow5.addEventListener('input', calculate)

//adding event listeners for button clicks on target
white.addEventListener('click', drawDot)
black.addEventListener('click', drawDot)
blue.addEventListener('click', drawDot)
red.addEventListener('click', drawDot) 
yellow.addEventListener('click', drawDot) 

//defining function 'calculate'
function calculate() {
    const arrow1 = parseInt(inputArrow1.value, 10)
    const arrow2 = parseInt(inputArrow2.value, 10)
    const arrow3 = parseInt(inputArrow3.value, 10)
    const arrow4 = parseInt(inputArrow4.value, 10)
    const arrow5 = parseInt(inputArrow5.value, 10)

    const totalPoints = (arrow1 + arrow2 +arrow3 +arrow4 + arrow5)
   
    displayTotal.innerHTML = totalPoints

    displayAverage.innerHTML = totalPoints/5
    displayMax.innerHTML = Math.max(arrow1, arrow2, arrow3, arrow4, arrow5)
    displayMin.innerHTML = Math.min(arrow1, arrow2, arrow3, arrow4, arrow5)
    

}

//defining function 'drawDot' to put a dot on the target in addition to changing the input values

function drawDot(){
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}