var setTimer = 0;
var timeInterval;
var body = document.body;
var correct = 0;
//body.style.fontFamily = "cursive"
//body.style.color = "royalblue"
//var sectionEl = document.createElement("section");
var questions = [{
    prompt:"test question",
    option1: "value1",
    option2: "value2",
    option3:  "value3",
    option4: "value4",
    correctOption: 3
},
{
    prompt: "test question 2",
    option1: "value 1 for question2",
    option2: "value 2 for question2",
    option3:  "value3 for question2",
    option4: "value4 for question2",
    correctOption: 4

}


]
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
    var numMaker = 0
    for (let i = 0; i < 4; i++){
        var quizDivEl = document.createElement("div");
        quizDivEl.setAttribute("class","quiz-answers");
        quizDivEl.setAttribute("number", ++numMaker);
        //formatAnswers();
        quizDivContainer.appendChild(quizDivEl);
        //formatAnswers();
    }
    var divEls = document.querySelectorAll(".quiz-answers");
     //divEls[1].onclick = function(){console.log(this.getAttribute("number"))} 
     console.log(divEls);
     for(var i = 0; i < 4; i++){
        var indEl = divEls[i]
         divEls[i].addEventListener("mouseover", function(event){
            console.log("Mouse over box")
           // indEl.style.backgroundColor = "red";
          var currentDiv = event.currentTarget;
           currentDiv.style.backgroundColor = "red";
           currentDiv.style.cursor = "pointer";
         })

         divEls[i].addEventListener("mouseout", function(event){
            console.log("Mouse over box")
           // indEl.style.backgroundColor = "red";
          var currentDiv = event.currentTarget;
           currentDiv.style.backgroundColor = "royalblue";
           currentDiv.style.cursor = "pointer";
         })

         divEls[i].addEventListener("click", function(event){
            console.log("You clicked me");
            var currentDiv = event.currentTarget;
            var answerNum = currentDiv.getAttribute("number");
            //answerNum++;
            checkAnswer(answerNum);
            getQuestions(quizH1El,divEls); 
         })
     }

     getQuestions(quizH1El,divEls);        
     

}

function getQuestions(quizQuestionEl,quizAnswersEl){

    //var newArr = questions.shift();

   // console.log(newArr)
   // console.log(newArr.prompt)
   if(questions.length > 0){
        var newArr = questions.shift();
        quizQuestionEl.textContent = newArr.prompt;
        quizAnswersEl[0].textContent = newArr.option1;
        quizAnswersEl[1].textContent = newArr.option2;
        quizAnswersEl[2].textContent = newArr.option3;
        quizAnswersEl[3].textContent = newArr.option4;
        correct = newArr.correctOption;
   }
   else{
    //console.log(correct)

       // clearInterval(timeInterval);
       // setTimer = 0;
       // clearQuiz();
   }
  
}

//************check answer*****************************
function checkAnswer(num){
    console.log("Im in the checkAnswer function")
    if(correct == num){
        //console.log("Correct")
        alert("correct")
    }
    else{
        alert("wrong")
    }
}
//************************************************************/

//*******************make high score***************************//
function appendHighScores(){
    
}
//******************************************************** */