// variables to keep track of quiz state
// currentQuestion
var currentQuestion = 0;
// time
var time = 60;

var timer;

// variables to reference DOM elements
var questionsSectionEl = document.getElementById('questions-section');
var startbuttonEl = document.getElementById('startbutton')
var startSectionEl = document.getElementById('start-section')
var questionSectionEl = document.getElementById('question-section')
var quizOverSectionEl = document.getElementById('quiz-over-section')
var highscoresSectionEl = document.getElementById('highscores-section')

document.getElementById('timer').innerHTML = time;
/* FUNCTION TO START THE QUIZ */
function startQuiz() {
    // hide start screen
    startSectionEl.style.display = "none";
    quizOverSectionEl.style.display = "none";
    highscoresSectionEl.style.display = "none";
    // un-hide questions section
    questionSectionEl.style.display = "block";
    // start timer
    initiateTimer();
    // show starting time

    getQuestions();
}

function initiateTimer() {
    timer = setInterval(clockTick, 1000);
}

/* FUNCTION TO GET/SHOW EACH QUESTION */
function getQuestions() {
    // get current question object from array
    var questionValue = questions[currentQuestion];
    // update title with current question
    document.getElementById("question").innerHTML = questionValue.title;
    // clear out ant old question choices
    document.getElementById('choices').innerHTML = '';
    document.getElementById("feedback").textContent = "";
    // loop over choices
    var len = questionValue.choices.length;
    for(var i=0; i<len; i++) {
        var button = document.createElement("button");
        button.textContent = i+1 + ": " + questionValue.choices[i];
        button.setAttribute("choice-index", i);
        document.querySelector("#choices").appendChild(button);
    }
}

/* FUNCTION FOR CLICKING A QUESTION */
function questionClick(event) {
    var el = event.target;
    // if the clicked element is not a choice button, do nothing.
    if (el.matches("button")) {
        var questionValue = questions[currentQuestion];

        // check if user guessed wrong
        if (questionValue.answer !== questionValue.choices[el.getAttribute("choice-index")]) {
            if (time > 10) {
                // penalize time
                time -= 10;
                // display new time on page
                document.getElementById('timer').innerHTML = time;
            } else {
                time = 0;
                document.getElementById('timer').innerHTML = time;
                quizEnd();
            }
            // give them feedback, letting them know it's wrong
            document.getElementById("feedback").textContent = "Incorrect!";
        } else {
            // give them feedback, letting them know it's right
            document.getElementById("feedback").textContent = "Correct!";
        }

        // move to next question
        currentQuestion++;
        if (currentQuestion > 3) {
            setTimeout(quizEnd, 2000);
        } else {
            setTimeout(getQuestions, 2000);
        }
    }  
}

/* FUNCTION TO END THE QUIZ */
function quizEnd() {
    // stop timer
    clearInterval(timer);
    // show end screen
    quizOverSectionEl.style.display = "block";
    // show final score
    document.getElementById('final-score').innerHTML = time;
    // hide questions section
    questionSectionEl.style.display = "none";
}

/* FUNCTION FOR UPDATING THE TIME */
function clockTick() {
    // update time
    // check if user ran out of time
    if (time > 0) {
        time--;
        document.getElementById('timer').innerHTML = time;
    } else {
        // proceed with ending of game
        quizEnd();
    }
}

function saveHighscore() {
    // get value of input box - for initials

    // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to local storage

    // redirect to next page
}

/* CLICK EVENTS */
// user clicks button to submit initials

// user clicks button to start quiz
    startbuttonEl.addEventListener('click', startQuiz)
    // user clicks on element containing choices
    document.querySelector("#choices").addEventListener("click", questionClick);
