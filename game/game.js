const question = document.querySelector("#question");
const choices = Array.from(document.getElementsByClassName('choice-text'));

console.log(choices);

let currentQuestion = {}; //OBJECT
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Question number 1 what is the answer?",
        choice1: "Answer One",
        choice2: "Answer two",
        choice3: "Answer three",
        choice4: "Answer Four",
        answer: "1"
    },
    {
        question: "Question number 2 what is the answer?",
        choice1: "Answer One",
        choice2: "Answer two",
        choice3: "Answer three",
        choice4: "Answer Four",
        answer: "2"
    },
    {
        question: "Question number 3 what is the answer?",
        choice1: "Answer One",
        choice2: "Answer two",
        choice3: "Answer three",
        choice4: "Answer Four",
        answer: "3"
    },
    {
        question: "Question number 4 what is the answer?",
        choice1: "Answer One",
        choice2: "Answer two",
        choice3: "Answer three",
        choice4: "Answer Four",
        answer: "4"
    },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
}

getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        //Go to end Page
        return window.location.assign("end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;
        console.log(e.target);

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = 'incorrect';
        if (selectedAnswer === currentQuestion.answer) {
            classToApply = 'correct';
        }

        // Turnary Syntax -> does same thing as above
        // const classToApply = selectedAnswer === currentQuestionQuestion.answer ? 'correct' : 'incorrect';

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

startGame();
