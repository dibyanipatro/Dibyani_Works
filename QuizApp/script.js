const questions = [
    {
        question: 'who is the "FATHER of our NATION"?',
        answers: [
            {text: "Jawaharlal Nehru", correct: false},
            {text: "Mahatma Gandhi", correct: true},
            {text: "Dr. B R Ambedkar", correct: false},
            {text: "Lala Bahadur Shastri", correct: false},
        ]
    },
    {
        question: 'which plant grows in desert?',
        answers: [
            {text: "Cactus", correct: true},
            {text: "Rose", correct: false},
            {text: "lavender", correct: false},
            {text: "hibiscus", correct: false},
        ]
    },
    {
        question: 'what is the chemical formula of Chlorine',
        answers: [
            {text: "Cr", correct: false},
            {text: "Ca", correct: false},
            {text: "C", correct: false},
            {text: "Cl", correct: true},
        ]
    },
    {
        question: 'who has developed the Java Programming language',
        answers: [
            {text: "Guido Van Rossum", correct: false},
            {text: "Bjarne Stroustrup", correct: false},
            {text: "James Gosling", correct: true},
            {text: "Brendan Eich", correct: false},
        ]
    },
    {
        question: 'which is the largest ocean on the Earth?',
        answers: [
            {text: "Indian Ocean", correct: false},
            {text: "Atlantic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true},
            {text: "Antarctic Ocean", correct: false},
        ]
    },

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("ans-btns");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again!!!";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();





