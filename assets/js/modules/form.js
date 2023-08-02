

var button = document.getElementById("button");
button.addEventListener("click", buttonAction);
var position = localStorage.getItem("position");
var grade = localStorage.getItem("grade");

function feedbackForm() {
    position = localStorage.getItem("position");
    grade = localStorage.getItem("grade");
    var feedbackOne, feedbackTwo;

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

    return;
}

function saveForm() {
    localStorage.setItem("position", document.getElementById("position").value);
    localStorage.setItem("grade", document.getElementById("grade").value);

    return;
}

function clearForm() {
    document.getElementById("feedbackOne").innerHTML = "";
    document.getElementById("feedbackTwo").innerHTML = "";
    localStorage.clear();
    document.getElementById("button").innerHTML = "Zurück zum Tool";
    button.addEventListener("click", formRestart);
    return;
}

function formRestart() {
    document.getElementById("button").setAttribute('href', "/form.html");
    return;
}

function buttonAction (){
    if (typeof position !== 'undefined' && position !== null){
        feedbackForm();
        button.addEventListener("click", clearForm);
        document.getElementById("button").innerHTML = "Ergebnis löschen";
    }
    else{
        document.getElementById("feedbackOne").innerHTML = "Es liegen keine Ergebnisse vor.";
        document.getElementById("button").innerHTML = "Zurück zum Tool";
        button.addEventListener("click", formRestart);
    }
}

