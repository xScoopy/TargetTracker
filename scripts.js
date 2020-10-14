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
const displayMax = document.querySelector('max-display')

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
    const arrow1 = inputArrow1.value
    const arrow2 = inputArrow2.value
    const arrow3 = inputArrow3.value
    const arrow4 = inputArrow4.value
    const arrow5 = inputArrow5.value

    let totalPoints = arrow1 + arrow2 +arrow3 +arrow4 + arrow5
    displayTotal.innerHTML = totalPoints

    displayAverage.innerHTML = toFloat(totalPoints/5)
    displayMax.innerHTML = Math.max([arrow1, arrow2, arrow3, arrow4, arrow5])
    displayMin.innerHTML = Math.min([arrow1, arrow2, arrow3, arrow4, arrow5])
    
}