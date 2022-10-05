// Globabl Variables
var quizBeginning = document.querySelector("#quiz-beginning")
var questions = document.querySelector("#questions")
var questions2 = document.querySelector("#questions2")
var questions3 = document.querySelector("#questions3")
var questions4 = document.querySelector("#questions4")
var quizEnd = document.querySelector("#quiz-end")


// Timer
var timerEl = document.querySelector("#timeclock")
var timerAmount = 50;
var timeInterval; 

function myTimer() {
    timerAmount--;
    timerEl.textContent = timerAmount

    if (timerEl === 0){
        clearInterval(timeInterval)
    }
}

// Start Button + Timer Call When Page Switches
var startButton = document.querySelector("#start-button")
function startGame(){
    quizBeginning.classList.add("hide")
    questions.classList.remove("hide")
    timeInterval = setInterval(myTimer, 1000);
    
}

// I want 4 clickable buttons with one being the correct answer
var answerOne = document.querySelector("#options1")
var answerTwo = document.querySelector("#options2")
var answerThree = document.querySelector("#options3")
var answerFour = document.querySelector("#options4")

// Checking to see that answer clicks are working
var wrongAnswer = function (){
    questions.classList.add("hide")
    questions2.classList.remove("hide")
}

var rightAnswer = function (){
    
}










startButton.addEventListener("click", startGame)
answerOne.addEventListener("click", wrongAnswer)
answerTwo.addEventListener("click", wrongAnswer)
answerThree.addEventListener("click", wrongAnswer)
answerFour.addEventListener("click", rightAnswer)
