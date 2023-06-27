/*var status = 0;
var button = document.getElementById("button");
button.addEventListener("click", buttonAction);
const position = localStorage.getItem("position");
const grade = localStorage.getItem("grade");
*/
function feedbackForm() {
    const position = localStorage.getItem("position");
    const grade = localStorage.getItem("grade");
    var feedbackOne, feedbackTwo;

    if (typeof position !== 'undefined' && position !== null){
        if (grade == "1") {
            feedbackOne = "Nur informieren? Nicht so geil!";
        }
        if (grade == "2") {
            feedbackOne = "Du beteiligst andere, ganz geil!";
        }
        if (position == "teacher") {
            feedbackTwo = "Oh toll, Lehre, fühlst du dich wichtig?";
        }
        if (position == "student") {
            feedbackTwo = "Ein Student, soso - fauler Sack";
        }
        document.getElementById("feedbackOne").innerHTML = feedbackOne;
        document.getElementById("feedbackTwo").innerHTML = feedbackTwo;
        document.getElementById("button").setAttribute('onclick', clearForm());
        document.getElementById("button").innerHTML = "Ergebnis löschen";
        }
    else {
        document.getElementById("feedbackOne").innerHTML = "Es liegen keine Ergebnisse vor.";
        document.getElementById("button").innerHTML = "Zurück zum Tool";
        document.getElementById("button").setAttribute('onclick', formRestart());
    }

    return;
}

function saveForm() {
    localStorage.setItem("position", document.getElementById("position").value);
    localStorage.setItem("grade", document.getElementById("grade").value);

    return;
}

function clearForm() {

    localStorage.clear();
    //button.addEventListener("click", buttonAction);
    return;
}

function formRestart() {
    document.getElementById("button").setAttribute('href', "/form.html");
    return;
}
/*
function buttonAction (){
    if (typeof position !== 'undefined' && position !== null){
        feedbackForm();
        //button.addEventListener("click", clearForm);
        //document.getElementById("button").innerHTML = "Ergebnis löschen";
    }
    else{
        document.getElementById("feedbackOne").innerHTML = "Es liegen keine Ergebnisse vor.";
        document.getElementById("button").innerHTML = "Zurück zum Tool";
        button.addEventListener("click", formRestart);
    }


}

*/