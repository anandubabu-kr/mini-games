const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.getElementById('time')
const score = document.getElementById('score')

let result = 0
let speed = 500
let hitPosition
let currentTime = 60
let timerID = null
let countDownTimerID = setInterval(countDown, 500)

function randomeSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomeSquare = squares[Math.floor(Math.random() * 9)]
    randomeSquare.classList.add('mole')
    hitPosition = randomeSquare.id

}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result++
            score.innerHTML = 'Your Score : ' + result
        }
    })
})


function moveMole() {
    timerID = setInterval(randomeSquare, speed)
}


moveMole()


function countDown() {
    currentTime--
    timeLeft.innerHTML = currentTime
    if (currentTime === 0) {
        clearInterval(countDownTimerID)
        clearInterval(timerID)
    }
}