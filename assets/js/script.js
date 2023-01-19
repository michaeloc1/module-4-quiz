var setTimer = 0;
var timeInterval;
var body = document.body;
body.style.fontFamily = "cursive"
body.style.color = "royalblue"
appendHeader();
//*****************make header**************************** */
 function appendHeader(){
   // var setTimer = 0;
   // var timeInterval;
   // var body = document.body;
    var headerEl = document.createElement("header");
    var divElHeader = document.createElement("div");
    var h3El1 = document.createElement("h3");
    var h3El2 = document.createElement("h3");
    h3El1.textContent = "View High Scores";
    h3El2.textContent = "Time Left: " + setTimer;
    body.appendChild(headerEl);
    headerEl.appendChild(divElHeader);
    divElHeader.appendChild(h3El1);
    divElHeader.appendChild(h3El2);
    divElHeader.style.display = "flex";
    divElHeader.style.flexWrap = "wrap";
    divElHeader.style.justifyContent = "space-between";
    h3El1.addEventListener("click",appendHighScores);

}
//******************************************************** */

//*******************make high score***************************//
function appendHighScores(){
    
}
//******************************************************** */