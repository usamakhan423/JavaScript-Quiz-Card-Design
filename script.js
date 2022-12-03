const quizData = [
    {
        question: 'what is HTML stand for?',
        a: 'Hypertext markup language',
        b: 'Cascading style sheet',
        c: 'Hi To Me lofar',
        d: 'None of the above',
        correct: 'a'
    }, 
    {
        question: "Who is the PM of pakistan?",
        a: 'Nawaz sharif',
        b: 'Liaqat Ali Khan',
        c: 'Imran Khan',
        d: 'FazlOo',
        correct: 'c'
    }, 
    {
        question: 'Which one is the top programming language in 2022?',
        a: 'C++',
        b: 'Java',
        c: 'Python',
        d: 'Javasript',
        correct: 'd'
    },
    {
        question: 'which year Javascript was launched?',
        a: '1993',
        b: '1995',
        c: '1999',
        d: 'None of the above',
        correct: 'd'
    },
    {
        question: 'Javascript is used for ...?',
        a: 'for Styling',
        b: 'for Structuring',
        c: 'for functionality',
        d: 'None of the above',
        correct:  'c'
    }
];
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector(".question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector(".submit");
const quiz = document.querySelector("#quiz");

let currentQuestion = 0;
let score = 0;

load();

function load() {
    deselectAnswers();

    const currentData = quizData[currentQuestion];

    questionEl.innerHTML = currentData.question;
    a_text.innerHTML = currentData.a;
    b_text.innerHTML = currentData.b;
    c_text.innerHTML = currentData.c;
    d_text.innerHTML = currentData.d;
    
}




function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            load();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});


