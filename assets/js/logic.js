// variables to keep track of quiz state
// currentQuestion
var currentQuestion = 0;
// time
var time = 60;
// timerId
var timer;

// variables to reference DOM elements
var questionsSectionEl = document.getElementById('questions-section');
var startbuttonEl = document.getElementById('startbutton')
var startSectionEl = document.getElementById('start-section')
var questionSectionEl = document.getElementById('question-section')
var quizSectionEl = document.getElementById('quiz-section')
var highscoresSectionEl = document.getElementById('highscores-section')
/* FUNCTION TO START THE QUIZ */
function startQuiz() {
    // hide start screen
    startSectionEl.style.display = "none";
    quizSectionEl.style.display = "none";
    highscoresSectionEl.style.display = "none";
    // un-hide questions section
    questionSectionEl.style.display = "block";
    // start timer
    initiateTimer();
    // show starting time

    getQuestions();
}

function initiateTimer() {
    clockTick();
}

/* FUNCTION TO GET/SHOW EACH QUESTION */
function getQuestions() {
    // get current question object from array

    // update title with current question

    // clear out ant old question choices

    // loop over choices
    // FOR {
    // create new button for each choice

    // display on the page

    // }
}

/* FUNCTION FOR CLICKING A QUESTION */
function questionClick(event) {

    // if the clicked element is not a choice button, do nothing.
    if (something) {

    }

    // check if user guessed wrong
    if (something) {
        // penalize time

        // display new time on page

        // give them feedback, letting them know it's wrong
    } else {
        // give them feedback, letting them know it's right
    }

    // flash right/wrong feedback on page for a short period of time

    // move to next question

    // check if we've run out of questions
    // if so, end the quiz
    // else, get the next question    
}

/* FUNCTION TO END THE QUIZ */
function quizEnd() {
    // stop timer

    // show end screen

    // show final score

    // hide questions section
}

/* FUNCTION FOR UPDATING THE TIME */
function clockTick() {
    // update time
    document.getElementById('timer').innerHTML = 'Timer: ' + time;
    // check if user ran out of time
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
