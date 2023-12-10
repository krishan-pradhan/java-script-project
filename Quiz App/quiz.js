let questions = [
    {
        ques: "what is 2 + 2 = ?",
        ans: [
            {text: "4", iscorrect: true},
            {text: "6", iscorrect: false},
            {text: "5", iscorrect: false}
        ]
    },
    {
        ques: "what is 10 - 8 = ?",
        ans: [
            {text: "4", iscorrect: false},
            {text: "2", iscorrect: true},
            {text: "5", iscorrect: false}
        ]
    },
    {
        ques: "what is 10 * 5",
        ans: [
            {text: "40", iscorrect: false},
            {text: "60", iscorrect: false},
            {text: "50", iscorrect: true},
            {text: "55", iscorrect: false},
        ]
    }
];


let questionTitle = document.querySelector('.question');
let nextBtn = document.querySelector('.btn-next');
let card = document.querySelector('.card');
currentQuestionIndex = 0;
let score = 0;
let options = card.querySelector('.options');
document.querySelector('.total-q').innerText = `Total Question ${questions.length}`;
nextBtn.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length -1){
        currentQuestionIndex ++
    }else if(currentQuestionIndex == questions.length -1){
        currentQuestionIndex = 0;
    }
    handelNext(currentQuestionIndex);
    scoreBoard(currentQuestionIndex);
})
function handelNext(currentQuestionIndex) {
    questionTitle.innerText = questions[currentQuestionIndex].ques;
    options.innerHTML ="";
    questions[currentQuestionIndex].ans.forEach(element => {
        let buttons = document.createElement('button');
        let isCorrect = element.iscorrect
        buttons.setAttribute('value', isCorrect);
        buttons.setAttribute('class', 'optbtn');
        buttons.innerText = element.text;
        options.appendChild(buttons);
    });
    checkScore(document.querySelectorAll('.optbtn'));
    limitOpt(document.querySelectorAll('.optbtn'));
}

function limitOpt(buttons){
    buttons.forEach(button =>{
        button.addEventListener('click', ()=>{
            buttons.forEach(button =>{
                button.style.pointerEvents = "none";
            })
        })
    })
}
function checkScore(buttons){
    buttons.forEach(button =>{
        button.addEventListener('click',(e) =>{
         if(e.target.value == "true"){
            score++
            e.target.style.backgroundColor = '#03fca1'
         }else{
            score
            e.target.style.backgroundColor = '#ff6666'
         }
         console.log(score);    
        })
    });
    
}

function scoreBoard(currentQuestionIndex) {
    let buttonText = document.querySelector('.btn-next');
    if(currentQuestionIndex == questions.length -1){
         buttonText.innerText = 'Show Results';
         showBoard(buttonText);
    }else{
        buttonText.innerText = 'Next Question';
    }
}
function showBoard(buttonText) {
    const boardDiv = document.getElementById("scoreBoard");
    buttonText.addEventListener('click', ()=>{
        boardDiv.classList.add('show');
        document.getElementById('board').innerHTML += `<h2>Your Score: ${score} out of ${questions.length}</h2>`
        boardDiv.querySelector('.reset').addEventListener('click', () =>{
            window.location.reload();
        })
} 
    )}
handelNext(currentQuestionIndex);
scoreBoard(currentQuestionIndex);




