let divquiz = document.querySelector(".quiz");
let score = 0;
let noofQuestion = 4;
let array = [
    {
        question: "Which animal is known as the 'Ship of the Desert'?",
        option: {
            option1: "Tiger",
            option2: "Lion",
            option3: "Sheep",
            option4: "Camel"
        },
        correctans: "Camel"
    },
    {
        question: "How many days are there in a week?",
        option: {
            option1: "7",
            option2: "6",
            option3: "4",
            option4: "8"
        },
        correctans: "7"
    },
    {
        question: "How Many hour in one day?",
        option: {
            option1: "48",
            option2: "12",
            option3: "24",
            option4: "60"
        },
        correctans: "24"
    },
    {
        question: "Nagpur is known for what?",
        option: {
            option1: "Banana",
            option2: "Orange",
            option3: "Grapes",
            option4: "Apple"
        },
        correctans: "Orange"
    }
]
let questionno = 0;
function showQuestion() {
    divquiz.innerHTML = `<h2>${array[questionno].question}</h2>
    <div class="options">
        <button onclick="myfun(event)" class="optbtn">${array[questionno].option.option1}</button>
        <button onclick="myfun(event)" class="optbtn">${array[questionno].option.option2}</button>
        <button onclick="myfun(event)" class="optbtn">${array[questionno].option.option3}</button>
        <button onclick="myfun(event)" class="optbtn">${array[questionno].option.option4}</button>
    </div>`
}
let hide = document.querySelector('.hide');
// let bt= document.querySelector(".optbtn")
function myfun(event) {
    console.log('question no' + questionno);

    if (event.target.innerHTML === array[questionno].correctans) {
        score += 1;
        console.log('score' + score);
        hide.classList.add("nxt");
    }
    else {
        console.log("incorrect")
        hide.classList.add("nxt");
    }
    let btns = document.querySelectorAll(".optbtn");


btns.forEach(btn => {
    btn.disabled=true;
});

    questionno += 1;
    if (questionno === noofQuestion) {
        
        document.querySelector(".container").classList.add("optcontainer")
        document.querySelector(".container").innerHTML = ` <h1>Quiz Result</h1>
        <h2 class="result">Correct:${score} </h2>
        <h2 class="result">Incorrect:${noofQuestion - score} </h2>
        <button onclick="retrybtn()" class="retrybtn">Retry</button>`
    }
}
function nextpage() {
    hide.classList.remove("nxt");
    showQuestion();
}

showQuestion()
function retrybtn(){
    
    showQuestion()
}