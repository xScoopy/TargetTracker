//ClickCount and score holder variables
let clickCount = 0;
const whiteScore = 2
const blackScore = 4
const blueScore = 6
const redScore = 8
const yellowScore = 10

// declaring constant for button
const helpButton = document.querySelector('#help')
const saveButton = document.querySelector('#save')

// declaring constants for canvas
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
canvas.addEventListener('click', function(e) {
    drawCircle(canvas, e)
    })

// declaring constants for target elements
const white = document.querySelector('#white-target')
const black = document.querySelector('#black-target')
const blue = document.querySelector('#blue-target')
const red = document.querySelector('#red-target')
const yellow = document.querySelector('#yellow-target')
const centerX = document.querySelector('#center-x')


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
inputArrow1.addEventListener('change', calculate)
inputArrow2.addEventListener('change', calculate)
inputArrow3.addEventListener('change', calculate)
inputArrow4.addEventListener('change', calculate)
inputArrow5.addEventListener('change', calculate)

//adding event listeners for button clicks on target
white.addEventListener('click', addArrowWhite)
black.addEventListener('click', addArrowBlack)
blue.addEventListener('click', addArrowBlue)
red.addEventListener('click', addArrowRed) 
yellow.addEventListener('click', addArrowYellow) 
centerX.addEventListener('click', addArrowYellow)

//adding event listener for help and save buttons
helpButton.addEventListener('click', helpWindow)
saveButton.addEventListener('click', saveData)

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


//defining function addArrow for each color to add value to the arrow slot that is next in line
function addArrowWhite(){
    if(clickCount >= 5){
        calculate()
        alert('You already have 5 arrows! Refresh the page to do another 5')
        return 
    }
    else if(clickCount == 0 ){
        inputArrow1.value = whiteScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return 
    }
    else if(clickCount == 1){
        inputArrow2.value = whiteScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
    else if(clickCount == 2){
        inputArrow3.value = whiteScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
    else if(clickCount == 3){
        inputArrow4.value = whiteScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
    else if(clickCount == 4){
        inputArrow5.value = whiteScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
}
function addArrowBlack(){
    if(clickCount >= 5){
        alert('You already have 5 arrows! Refresh the page to do another 5')
        return 
    }
    else if(clickCount == 0 ){
        inputArrow1.value = blackScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return 
    }
    else if(clickCount == 1){
        inputArrow2.value = blackScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
    else if(clickCount == 2){
        inputArrow3.value = blackScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
    else if(clickCount == 3){
        inputArrow4.value = blackScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
    else if(clickCount == 4){
        inputArrow5.value = blackScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
}
function addArrowBlue(){
    if(clickCount >= 5){
        alert('You already have 5 arrows! Refresh the page to do another 5')
        return 
    }
    else if(clickCount == 0 ){
        inputArrow1.value = blueScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return 
    }
    else if(clickCount == 1){
        inputArrow2.value = blueScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
    else if(clickCount == 2){
        inputArrow3.value = blueScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
    else if(clickCount == 3){
        inputArrow4.value = blueScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
    else if(clickCount == 4){
        inputArrow5.value = blueScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
}
function addArrowRed(){
    if(clickCount >= 5){
        alert('You already have 5 arrows! Refresh the page to do another 5')
        return 
    }
    else if(clickCount == 0 ){
        inputArrow1.value = redScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return 
    }
    else if(clickCount == 1){
        inputArrow2.value = redScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
    else if(clickCount == 2){
        inputArrow3.value = redScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
    else if(clickCount == 3){
        inputArrow4.value = redScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
    else if(clickCount == 4){
        inputArrow5.value = redScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
}
function addArrowYellow(){
    if(clickCount >= 5){
        alert('You already have 5 arrows! Refresh the page to do another 5')
        return 
    }
    else if(clickCount == 0 ){
        inputArrow1.value = yellowScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return 
    }
    else if(clickCount == 1){
        inputArrow2.value = yellowScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
    else if(clickCount == 2){
        inputArrow3.value = yellowScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
    else if(clickCount == 3){
        inputArrow4.value = yellowScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
    else if(clickCount == 4){
        inputArrow5.value = yellowScore
        clickCount+=1
        calculate()
        canvas.style.pointerEvents = 'auto'
        return
    }
}

//Function for help window alert box
function helpWindow(){
    alert("Double-click on the target to add an 'arrow' to the target, and the scoreboard.")
}

//function to get cursor position used to draw a dot on the canvas
function drawCircle(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    //with mouse position, draw a dot
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI, true);
    ctx.strokeStyle = '#1BFAD9'
    ctx.fill()
    ctx.stroke();
    canvas.style.pointerEvents = 'none'
}
//delare savedata function
function saveData(){
    document.querySelector('#dateSave').innerHTML = 'Date: ' + inputDate.value + '&nbsp'
    document.querySelector('#arrow1save').innerHTML = ' Arrow 1: '+ inputArrow1.value + '&nbsp;'
    document.querySelector('#arrow2save').innerHTML = ' Arrow 2: '+ inputArrow2.value + '&nbsp;'
    document.querySelector('#arrow3save').innerHTML = ' Arrow 3: '+ inputArrow3.value + '&nbsp;'
    document.querySelector('#arrow4save').innerHTML = ' Arrow 4: '+ inputArrow4.value + '&nbsp;'
    document.querySelector('#arrow5save').innerHTML = ' Arrow 5: '+ inputArrow5.value + '&nbsp; '
}

