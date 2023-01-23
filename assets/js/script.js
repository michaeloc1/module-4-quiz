/**************global variables****************************** */
//setTimer will hold the countdown value
var setTimer = 0;
//will be set to setInerval
var timeInterval;
var body = document.body;
//will hold correct answer number
var correct = 0;
//will hold how many questions user got right
var gotRight = 0;
//will hold true or false.  Used to display to user if last question answered was right or wrong
var lastQuestion = false;
//will hold questions
var questions = [];
//will hod high scores
var scores = [];
//needed element globally to display timer
var spanEl = document.createElement("span")
/************************************************************* */

//will store high scores from localstorage if it exists
if(localStorage.getItem("scores") != null){
    scores = JSON.parse(localStorage.getItem("scores"));
}

//makes questions to be used in quiz.  correctOption is the answer that is correct
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
//appends header and start.  Also makes questions to be used in the quiz.
appendHeader();
appendStartPage();
makeQuestions();
//*****************make header**************************** */
 function appendHeader(){
    var headerEl = document.createElement("header");
    var divElHeader = document.createElement("div");
    var h3El1 = document.createElement("h3");
    var h3El2 = document.createElement("h3");
    divElHeader.setAttribute("id","header-div")
    h3El1.textContent = "View High Scores";
    h3El2.textContent = "Time Left: "
    body.appendChild(headerEl);
    headerEl.appendChild(divElHeader);
    divElHeader.appendChild(h3El1);
    divElHeader.appendChild(h3El2);
    h3El2.appendChild(spanEl);
    spanEl.textContent = setTimer
    //mouse events
    h3El1.addEventListener("mouseover", function(){
        h3El1.style.color = "red";
        h3El1.style.cursor = "pointer";

    })
    h3El1.addEventListener("mouseout", function(){
        h3El1.style.color = "royalblue"
    })
    //user click will delete start page html and append high scores html
    h3El1.addEventListener("click", function(){
        //clearInterval needed here in case user clicks view high scores while in the quiz
        clearInterval(timeInterval);
        deleteHTML();
        appendHighScores();
    })

}
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
    startSectionEl.appendChild(startH1El);
    startSectionEl.appendChild(startPEl);
    startSectionEl.appendChild(startBtnEl);

    //click will delete start page html and append quiz html
    startBtnEl.addEventListener("click", function(){
    deleteHTML();
    appendQuiz();
    })
    

}

//************************************************************ */

//************************************************************ */
//all buttons will have the same mouseover styling
function formatButton(btn){
    btn.addEventListener("mouseover", function(){
    btn.style.backgroundColor = "red";
    btn.style.cursor = "pointer";
    
    })
    btn.addEventListener("mouseout", function(){
        btn.style.backgroundColor = "royalblue";
        
        })
}
//*********************************************************** */

//******************deletes html******************************** */
//function called on user clicks deletes current html so new html can be appended
function deleteHTML(){
    var sectionDelete = document.querySelector("section");
    sectionDelete.remove();
}
//********************************************************* */

//*************appends quiz****************************** */
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
    //numMaker used to store answer number in number attribute. 
    var numMaker = 0
    //for loop used to make div elements that will hold the answers
    //each div will have the same class but different number values
    for (let i = 0; i < 4; i++){
        var quizDivEl = document.createElement("div");
        quizDivEl.setAttribute("class","quiz-answers");
        quizDivEl.setAttribute("number", ++numMaker);
        quizDivContainer.appendChild(quizDivEl);
    }
    //will display if user got last question right or wrong
    quizDivContainer.appendChild(quizH2El);
   //divEls will be an array of the divs created above
    var divEls = document.querySelectorAll(".quiz-answers");
    //loop thru divEls creating mouse events for each one
     for(var i = 0; i < 4; i++){
        var indEl = divEls[i]
         divEls[i].addEventListener("mouseover", function(event){
         // get the div currently moused over
          var currentDiv = event.currentTarget;
           currentDiv.style.backgroundColor = "red";
           currentDiv.style.cursor = "pointer";
         })

         divEls[i].addEventListener("mouseout", function(event){
           var currentDiv = event.currentTarget;
           currentDiv.style.backgroundColor = "royalblue";
           currentDiv.style.cursor = "pointer";
         })

         //user clicks on answer will call check answer function and then the next question
         divEls[i].addEventListener("click", function(event){
            var currentDiv = event.currentTarget;
            var answerNum = currentDiv.getAttribute("number");
            checkAnswer(answerNum);
            getQuestions(quizH1El,divEls); 
         })
     }

     //gets initial question sets timer and starts timer interval
     getQuestions(quizH1El,divEls);  
     setTimer = 30;
     timeInterval = setInterval(starTimer, 1000);      
     

}

//***************************************************** */

//*************gets the questions************************** */

function getQuestions(quizQuestionEl,quizAnswersEl){

    //newArr will hold the first value in the questions array and append the 
    //question and answers to the text of the elements passed in
    //once there are no more questions the quiz is over and interval is 
    //cleared the html for the quiz is cleared and the quiz finished html is appended
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
       clearInterval(timeInterval);
       deleteHTML();
       appendFinish();
   }
  
}

//************************************************* */

//************check answer*****************************
//will check if answer is correct or wrong the argument passed in is
//the value of the number attribute in the div that was clicked on
//it is checked against the value that was stored in the question when it
//was made if correct win total will be updated.  If wrong timer will be checked
//if there is less then 5 seconds remaining timer will be set to 0.  This is done
//to keep the timer from going to negative numbers and not hitting the clearInterval
//in the setTimer function. if time remaining is > 5 then 5 seconds will be deducted
//from the timer
function checkAnswer(num){
    var getH2El = document.querySelector("h2")
    if(correct == num){
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
    // countdown the setTimer variable and display it in the span
    //if timer = 0 quiz is over and appendFinish will be appended
    spanEl.textContent = setTimer;
    setTimer--;
    if(setTimer === 0){
        spanEl.textContent = setTimer;

        deleteHTML();
        appendFinish()
        clearInterval(timeInterval);
    }
  }

//****************append finish*************************** */

function appendFinish(){
    var h1El = document.createElement("h1");
    var btn = document.createElement("button");
    var sectionEl = document.createElement("section");
    var h3El = document.createElement("H3");
    var h3El2 = document.createElement("H3");
    var textBox = document.createElement("INPUT");
    var divContainerEl = document.createElement("div");
    divContainerEl.setAttribute("class", "container");
    textBox.setAttribute("type", "text");
    textBox.setAttribute("maxlength", "3");
    textBox.setAttribute("class", "format-textbox")
    btn.setAttribute("class", "format-btn2");
    h3El.setAttribute("class", "format-h3-finish")
    formatButton(btn)
    body.appendChild(sectionEl);
    sectionEl.appendChild(divContainerEl);
    divContainerEl.appendChild(h1El);
    divContainerEl.appendChild(h3El);
    divContainerEl.appendChild(textBox);
    divContainerEl.appendChild(btn);
    divContainerEl.appendChild(h3El2)
    h1El.textContent = "Quiz Over";
    h3El.textContent = "You got " + gotRight + " out of 4 correct.  Add your initials to the High Score board.";
    btn.textContent = "Add Score";
    textBox.focus();

    //display on finish page if user got last question they answered correct or wrong
    if(lastQuestion){
        h3El2.textContent = "Last answer was correct";
    }
    else{
        h3El2.textContent = "Last answer was wrong";
        spanEl.textContent = setTimer;
    }    


    //button to add high score to list if array created to store scores from
    //localstorage is empty we will append the first score to the array
    //otherwise we will push the next score onto the array
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
    //store scores in localstorage
   localStorage.setItem("scores", JSON.stringify(scores));

        deleteHTML();
        appendHighScores()
    
    });

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
    // loop thru making elements that will hold the high scores. I am only
    //going to show the last 5 high scores
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
   
    //store the scores in array  if array is not null put the high scores into
    //the text area reverse is used to display the latest scores first and older
    //ones after
   var newArr = JSON.parse(localStorage.getItem("scores"))
   if(newArr != null){
   newArr.reverse();
   
        for(i = 0; i < 5 && i < newArr.length; i++){
            
            HighScoreH4Els[i].textContent = newArr[i].init + ": " + newArr[i].scr + " of 4";
        }
    } 

    //user clicks the start over button
    HighScorebtnEl2.addEventListener("click", function(){
    gotRight = 0;
    deleteHTML();
    appendStartPage();
    makeQuestions();
   })

   //user clicks the delete high scores button the scores are removed from 
   //local storate and the text is wiped out.
   HighScorebtnEl1.addEventListener("click", function(){
    for(i = 0; i < 5; i++){
        HighScoreH4Els[i].textContent = "";
        localStorage.removeItem("scores");
        scores = [];
        

    }
   })

    
}
//******************************************************** */