document.addEventListener('DOMContentLoaded',() => {

let questionContainer= document.getElementById("question-container")
let questionText= document.getElementById('question-text')
let choicesList= document.getElementById('choices-list')
let nextBtn= document.getElementById('next-btn')
let resultContainer= document.getElementById('result-container')
let scoreDisplay= document.getElementById('score')
let restartBtn= document.getElementById('restart-btn')
let startBtn= document.getElementById('start-btn')



let questions= [
    {
        question: "Which Indian Club has won first IFA Sheild ?",
        choices: ["East Bengal", 'Mohun Bagan', 'Mohammedan SC', "Rajasthan Club"],
        answer: "Mohun Bagan"
    },

    {
        question: "When did The Capital of India officially move to Delhi from Calcutta ?",
        choices: ['1911','1913','1912','1914'],
        answer: '1911'
    },

    {
        question: "What is largest mountain of India ?",
        choices: ['Kangchenjunga', 'Godwin-Austin', 'Nanda Devi', 'Kamet'],
        answer: 'Kangchenjunga'
    },

    {
        question: "Which is the first Indie/Rock band of India ?",
        choices: ['Indian Ocean', 'The Jets', 'Parikrama', 'Moheener Ghoraguli'],
        answer: 'Moheener Ghoraguli'
    },

    {
        question: 'Which national cricket team did Rahul Dravid represent other than India',
        choices: ['USA', 'Ireland', 'Scotland', 'Nepal'],
        answer:"Scotland"
    }

]


let currentQuestionIndex= 0
let score= 0
let answered= false


startBtn.addEventListener('click',startQuiz)
nextBtn.addEventListener('click', nxtques)
restartBtn.addEventListener('click',rstQuiz)



function startQuiz(){
    startBtn.classList.add('hidden')
    resultContainer.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    
    showQuestion()
}

function nxtques() {
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showResult()
    }
}

function showQuestion() {
    nextBtn.classList.add('hidden')
    questionText.textContent= questions[currentQuestionIndex].question
    choicesList.innerHTML= '' //clear previous choices

    answered= false 

    questions[currentQuestionIndex].choices.forEach((choice)=>{
        let li= document.createElement('li')
        li.textContent= choice

        li.addEventListener('click', () => selectAnswer(li, choice))

        choicesList.appendChild(li)

    })

}


function selectAnswer(selectedli, choice) {

    if(answered){
        return 
    }

    answered= true

    let correctAns= questions[currentQuestionIndex].answer

    if(choice === correctAns){
        score++
    }
    selectedli.classList.add('selected')
    nextBtn.classList.remove('hidden')
}

function showResult(){
    questionContainer.classList.add('hidden')
    resultContainer.classList.remove('hidden')
    scoreDisplay.textContent= `${score} out of ${questions.length}`
}

function rstQuiz(){
    currentQuestionIndex= 0
    score= 0

    resultContainer.classList.add('hidden')
    
    startQuiz()
}

})