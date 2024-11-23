const questions=[
    {
        question:"Which is largest animal in the world?",
        answers:
        [
            {text:"Shark",correct:false},
            {text:"Blue Shark",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is largest animal in the world?",
        answers:
        [
            {text:"Shark",correct:false},
            {text:"Blue Shark",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is largest animal in the world?",
        answers:
        [
            {text:"Shark",correct:false},
            {text:"Blue Shark",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is largest animal in the world?",
        answers:
        [
            {text:"Shark",correct:false},
            {text:"Blue Shark",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is largest animal in the world?",
        answers:
        [
            {text:"Shark",correct:false},
            {text:"Blue Shark",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    }

];

const questionelement=document.getElementById("question");
const answerbutton=document.getElementById("answer-button");
const nextbutton=document.getElementById("next-btn");

let currentquestionindex=0;
let score=0;

function startquiz(){
    currentquestionindex=0;
    console.log("hi");
    score=0;
    nextbutton.innerHTML="Next";
    showquestion();
}

function showquestion(){
    resetstate();
    let currentquestion=questions[currentquestionindex];
    let questionno=currentquestionindex+1;
    questionelement.innerHTML=questionno+". "+currentquestion.question;

    currentquestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectanswer);
    });
}
function resetstate(){
    nextbutton.style.display="none";
    while(answerbutton.firstChild)
    {
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

function selectanswer(e){
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct==="true";
    if(iscorrect)
    {
        selectedbtn.classList.add("correct");
        score++;

    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button=>{
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbutton.style.dispaly="block";
}
function handlenextbutton(){
    currentquestionindex++;
    if(currentquestionindex<questions.length)
    {
        showquestion();
    }
    else{
        showscore();
    }
}
function showscore(){
    resetstate();
    questionelement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="Play Again";
    nextbutton.style.display="block";
}
nextbutton.addEventListener("click",()=>{
    if(currentquestionindex<questions.length)
    {
        handlenextbutton();
    }
    else{
        startquiz();
    }
});


startquiz();