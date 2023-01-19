var setTimer = 0;
var timeInterval;
var body = document.body;
//body.style.fontFamily = "cursive"
//body.style.color = "royalblue"
//var sectionEl = document.createElement("section");
appendHeader();
appendStartPage();
//*****************make header**************************** */
 function appendHeader(){
   // var setTimer = 0;
   // var timeInterval;
   // var body = document.body;
    var headerEl = document.createElement("header");
    var divElHeader = document.createElement("div");
    var h3El1 = document.createElement("h3");
    var h3El2 = document.createElement("h3");
    divElHeader.setAttribute("id","header-div")
    h3El1.textContent = "View High Scores";
    h3El2.textContent = "Time Left: " + setTimer;
    body.appendChild(headerEl);
    headerEl.appendChild(divElHeader);
    divElHeader.appendChild(h3El1);
    divElHeader.appendChild(h3El2);
    //divElHeader.style.display = "flex";
    //divElHeader.style.flexWrap = "wrap";
    //divElHeader.style.justifyContent = "space-between";
    h3El1.addEventListener("click",appendHighScores);

}
//******************************************************** */

//**************append section****************************** */
//body.appendChild(sectionEl);
//******************************************************** */

//******************************************************** */

//**************append start page***************************** */
function appendStartPage(){
    var startSectionEl = document.createElement("section");
    body.appendChild(startSectionEl);
    var startH1El = document.createElement("h1");
    var startPEl = document.createElement("p");
    var startBtnEl = document.createElement("button");
    startBtnEl.setAttribute("class", "format-btn");
    formatButton(startBtnEl);
    startH1El.textContent = "Take the JavaScript Quiz";
    startPEl.textContent ="This is a timed Quiz";
    startBtnEl.textContent = "Start Quiz";
    //startH1El.style.textAlign = "center";
    //startPEl.style.textAlign = "center";
    startSectionEl.appendChild(startH1El);
    startSectionEl.appendChild(startPEl);
    startSectionEl.appendChild(startBtnEl);
    startBtnEl.addEventListener("click", function(){
    console.log("click of start quiz")
    deleteHTML(startSectionEl);
    appendQuiz();
    })
    

}

//************************************************************ */

function formatButton(btn){
   // btn.style.backgroundColor = "royalblue";
    //btn.style.color = "white";
    //btn.style.padding = "20px";
    //btn.style.display = "block";
    //btn.style.margin = "0 auto";
    //btn.style.borderRadius = "10px";
    btn.addEventListener("mouseover", function(){
    btn.style.backgroundColor = "red";
    btn.style.cursor = "pointer";
    
    })
    btn.addEventListener("mouseout", function(){
        btn.style.backgroundColor = "royalblue";
        
        })
}

function deleteHTML(section){
    section.remove()

}
function appendQuiz(){
    var questionNumber = 1;
    var quizSectionEl = document.createElement("section");
    var quizH1El = document.createElement("h1");
    var quizDivContainer = document.createElement("div");
    quizH1El.setAttribute("class", "quiz-question");
    quizDivContainer.setAttribute("class", "container");
    body.appendChild(quizSectionEl);
    quizSectionEl.appendChild(quizH1El);
    quizSectionEl.appendChild(quizDivContainer)
    for (let i = 0; i < 4; i++){
        var quizDivEl = document.createElement("div");
        quizDivEl.setAttribute("class","quiz-answers");
        quizDivEl.setAttribute("number", i);
        //formatAnswers();
        quizDivContainer.appendChild(quizDivEl);
        //formatAnswers();

    }
    function formatAnswers(){
    var quizAnwerClass = document.querySelector(".quiz-answers");
    //console.log(quizAnwerClass);
   // quizAnwerClass.style.backgroundColor = "royalblue";
   // quizAnwerClass.style.color = "white";
   // quizAnwerClass.style.padding = "20px";
   //  quizAnwerClass.style.borderRadius = "10px";
   // quizAnwerClass.style.width = "100px"
    quizAnwerClass.addEventListener("mouseover", function(){
    quizAnwerClass.style.backgroundColor = "red";
    quizAnwerClass.style.cursor = "pointer";
    quizAnwerClass.margin = "10px";
   
    
    })
    quizAnwerClass.addEventListener("mouseout", function(){
        quizAnwerClass.style.backgroundColor = "royalblue";
        
        })

    }
    


    
}


//*******************make high score***************************//
function appendHighScores(){
    
}
//******************************************************** */