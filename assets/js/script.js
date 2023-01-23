var setTimer = 0;
var timeInterval;
var body = document.body;
var correct = 0;
var gotRight = 0;
var lastQuestion = false;
var questions = []
var scores = [];
if(localStorage.getItem("scores") != null){
    scores = JSON.parse(localStorage.getItem("scores"));
}
//body.style.fontFamily = "cursive"
//body.style.color = "royalblue"
//var sectionEl = document.createElement("section");
function makeQuestions(){
    questions = [{
    prompt:"What does the ! symbol stand for in JavaScript?",
    option1: "and",
    option2: "or",
    option3:  "not",
    option4: "than",
    correctOption: 3
},
{
    prompt: "The index of arrays start at the value",
    option1: "-1",
    option2: "1",
    option3:  "3",
    option4: "0",
    correctOption: 4

},
{
    prompt: "What is the correct way to remove the last element from an array and return that element",
    option1: "array.pop()",
    option2: "array.reduce()",
    option3:  "array.push()",
    option4: "array.shift()",
    correctOption: 1

},
{
    prompt: "Which is not the proper way you can declare a variable",
    option1: "let",
    option2: "var",
    option3:  "make",
    option4: "const",
    correctOption: 3

}


]
}

//var h3El2 = document.createElement("h3");
var spanEl = document.createElement("span")

appendHeader();
appendStartPage();
makeQuestions();
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
   // h3El2.textContent = "Time Left: " + setTimer;
    h3El2.textContent = "Time Left: "
    body.appendChild(headerEl);
    headerEl.appendChild(divElHeader);
    divElHeader.appendChild(h3El1);
    divElHeader.appendChild(h3El2);
    h3El2.appendChild(spanEl);
    spanEl.textContent = setTimer
    //divElHeader.style.display = "flex";
    //divElHeader.style.flexWrap = "wrap";
    //divElHeader.style.justifyContent = "space-between";
    //h3El1.addEventListener("click",appendHighScores);
    h3El1.addEventListener("mouseover", function(){
        h3El1.style.color = "red";
        h3El1.style.cursor = "pointer";

    })
    h3El1.addEventListener("mouseout", function(){
        h3El1.style.color = "royalblue"
    })
    h3El1.addEventListener("click", function(){
        clearInterval(timeInterval);
        deleteHTML();
        appendHighScores();
    })

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
    startH1El.setAttribute("class", "format-h1");
    startBtnEl.setAttribute("class", "format-btn");
    formatButton(startBtnEl);
    startH1El.textContent = "Take the JavaScript Quiz";
    startPEl.textContent ="This is a timed Quiz. You will be given 30 seconds to complete.  If you get a question wrong 5 seconds will be deducted from the time remaining.";
    startBtnEl.textContent = "Start Quiz";
    //startH1El.style.textAlign = "center";
    //startPEl.style.textAlign = "center";
    startSectionEl.appendChild(startH1El);
    startSectionEl.appendChild(startPEl);
    startSectionEl.appendChild(startBtnEl);
    startBtnEl.addEventListener("click", function(){
    //console.log("click of start quiz")
    deleteHTML();
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

function deleteHTML(){
    var sectionDelete = document.querySelector("section");
   // console.log(sectionDelete);
    sectionDelete.remove();

}
function appendQuiz(){
    var questionNumber = 1;
    var quizSectionEl = document.createElement("section");
    var quizH1El = document.createElement("h1");
    var quizDivContainer = document.createElement("div");
    //make element to hold correct or wrong
    var quizH2El = document.createElement("h2");
    //********************************************* */
    quizH1El.setAttribute("class", "quiz-question");
    quizDivContainer.setAttribute("class", "container");
    body.appendChild(quizSectionEl);
    //quizSectionEl.appendChild(quizH1El);
    quizSectionEl.appendChild(quizDivContainer)
    quizDivContainer.appendChild(quizH1El);

    var numMaker = 0
    for (let i = 0; i < 4; i++){
        var quizDivEl = document.createElement("div");
        quizDivEl.setAttribute("class","quiz-answers");
        quizDivEl.setAttribute("number", ++numMaker);
        //formatAnswers();
        quizDivContainer.appendChild(quizDivEl);
        //formatAnswers();
    }
    //append the element to bottom of divs
    quizDivContainer.appendChild(quizH2El);
    //quizH2El.textContent = "Correct";

    //**************************************************** */

    var divEls = document.querySelectorAll(".quiz-answers");
     //divEls[1].onclick = function(){console.log(this.getAttribute("number"))} 
    // console.log(divEls);
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
           // console.log("Mouse over box")
           // indEl.style.backgroundColor = "red";
          var currentDiv = event.currentTarget;
           currentDiv.style.backgroundColor = "royalblue";
           currentDiv.style.cursor = "pointer";
         })

         divEls[i].addEventListener("click", function(event){
            //console.log("You clicked me");
            var currentDiv = event.currentTarget;
            var answerNum = currentDiv.getAttribute("number");
            //answerNum++;
            checkAnswer(answerNum);
            getQuestions(quizH1El,divEls); 
         })
     }

     getQuestions(quizH1El,divEls);  
     setTimer = 30;
     timeInterval = setInterval(starTimer, 1000);      
     

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

        clearInterval(timeInterval);
       // setTimer = 0;
       // clearQuiz();
       deleteHTML();
       appendFinish();
   }
  
}

//************check answer*****************************
function checkAnswer(num){
    var getH2El = document.querySelector("h2")
    
   // alert(getH2El)
    console.log("Im in the checkAnswer function")
    if(correct == num){
        //console.log("Correct")
        getH2El.textContent = "Last answer was correct"
        gotRight++;
        lastQuestion = true
    }
    else{
        if(setTimer < 5){
            setTimer = 0;
            spanEl.textContent = setTimer;
            lastQuestion = false;
            clearInterval(timeInterval);
            deleteHTML();
            appendFinish();
        }
        else{
            setTimer = setTimer - 5;
            getH2El.textContent = "Last answer was wrong";
            lastQuestion = false;
        }



    }
}
//************************************************************/

//****************timer function*********************** */
function starTimer(){
    
  
    spanEl.textContent = setTimer;
    setTimer--;
    console.log(setTimer);
    if(setTimer === 0){
        spanEl.textContent = setTimer;

        deleteHTML();
        appendFinish()
        clearInterval(timeInterval);
    }
  }

//********************************************************** */

function appendFinish(){
    var h1El = document.createElement("h1");
    var btn = document.createElement("button");
    var sectionEl = document.createElement("section");
    var h3El = document.createElement("H3");
    var h3El2 = document.createElement("H3");
    var textBox = document.createElement("INPUT");
    var divContainerEl = document.createElement("div");
   // var divCenterEl = document.createElement("div")
    //divContainerEl.setAttribute("class", "container2")
    divContainerEl.setAttribute("class", "container");
    //divCenterEl.setAttribute("class", "center")
    textBox.setAttribute("type", "text");
    textBox.setAttribute("maxlength", "3");
    textBox.setAttribute("class", "format-textbox")
    btn.setAttribute("class", "format-btn2");
    h3El.setAttribute("class", "format-h3-finish")
    formatButton(btn)
    body.appendChild(sectionEl);
    sectionEl.appendChild(divContainerEl);
    //divContainerEl.appendChild(divCenterEl);

    divContainerEl.appendChild(h1El);
    divContainerEl.appendChild(h3El);
    divContainerEl.appendChild(textBox);
    divContainerEl.appendChild(btn);
    divContainerEl.appendChild(h3El2)

   // divCenterEl.appendChild(h1El);
   // divCenterEl.appendChild(h3El);
    //divCenterEl.appendChild(textBox);
   // divCenterEl.appendChild(btn);
   // divCenterEl.appendChild(h3El2)
    h1El.textContent = "Quiz Over";
    h3El.textContent = "You got " + gotRight + " out of 4 correct.  Add your initials to the High Score board.";
    btn.textContent = "Add Score";
    textBox.focus();

    if(lastQuestion){
        h3El2.textContent = "Last answer was correct";
    }
    else{
        h3El2.textContent = "Last answer was wrong";
        spanEl.textContent = setTimer;
    }    



     btn.addEventListener("click", function(){
        var initials = textBox.value;

    if(scores.length === 0){
        scores[0] = {
            init: initials,
            scr: gotRight
        }
    }
    else{
        scores.push(
            {
                init: initials,
                scr: gotRight
            }
        )
    }
   localStorage.setItem("scores", JSON.stringify(scores));


       // console.log("textbox " + initials);
       // localStorage.setItem("initials", initials)
       // localStorage.setItem("score", gotRight)
        deleteHTML();
        appendHighScores()
    
    });
   // btn.addEventListener("click", function(){
        //deleteHTML1();
      //  appendQuiz();

   // });
}

//*******************make high score***************************//
function appendHighScores(){
    var HighScoreSectionEl = document.createElement("section")
    var HighScoreH1El = document.createElement("h1");
    var HighScoreH4El = document.createElement("h4");
    var HighScorebtnEl1 = document.createElement("button");
    var HighScorebtnEl2 = document.createElement("button");
    var HighScoreElBr   = document.createElement("br")
    var HighScoreDivEl = document.createElement("div")
    HighScoreDivEl.setAttribute("class", "container");
    HighScorebtnEl1.setAttribute("class", "format-btn2");
    HighScorebtnEl2.setAttribute("class", "format-btn2");
     body.appendChild(HighScoreSectionEl);
    HighScoreSectionEl.appendChild(HighScoreDivEl);
    HighScoreDivEl.appendChild(HighScoreH1El);
    HighScoreH1El.textContent = "High Scores";
    for (let i = 0; i < 5; i++){
        var HighScoreH4El = document.createElement("h4")
        HighScoreH4El.setAttribute("class","high-scores");
        //formatAnswers();
        HighScoreDivEl.appendChild(HighScoreH4El);
        //formatAnswers();
    }
    HighScorebtnEl1.textContent = "Clear High Scores";
    HighScorebtnEl2.textContent = "Start Again";
    formatButton(HighScorebtnEl1);
    formatButton(HighScorebtnEl2);
    HighScoreDivEl.appendChild(HighScorebtnEl1);
    HighScoreDivEl.appendChild(HighScoreElBr);
    HighScoreDivEl.appendChild(HighScorebtnEl2);

    var HighScoreH4Els = document.querySelectorAll("h4");
   // HighScoreH4Els[0].textContent = "MOC: " + "4"
   // HighScoreH4Els[1].textContent = "abc: " + "2"
   var newArr = JSON.parse(localStorage.getItem("scores"))
   if(newArr != null){
   newArr.reverse();
   
        for(i = 0; i < 5 && i < newArr.length; i++){
            
            HighScoreH4Els[i].textContent = newArr[i].init + ": " + newArr[i].scr + " of 4";
        }
    } 
    HighScorebtnEl2.addEventListener("click", function(){
    gotRight = 0;
    deleteHTML();
    appendStartPage();
    makeQuestions();
   })

   HighScorebtnEl1.addEventListener("click", function(){
    for(i = 0; i < 5; i++){
        HighScoreH4Els[i].textContent = "";
        localStorage.removeItem("scores");
        scores = [];
        

    }
   })

    
}
//******************************************************** */