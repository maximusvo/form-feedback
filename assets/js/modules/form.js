

var button = document.getElementById("button");
button.addEventListener("click", buttonAction);
var position = JSON.parse(localStorage.getItem("formInputSelect"));

function feedbackForm() {

    var storedInputSelect = JSON.parse(localStorage.getItem("formInputSelect"));
    var storedInputInput = JSON.parse(localStorage.getItem("formInputInput"));
    document.getElementById("feedbackOne").innerHTML = "Selected: " + storedInputSelect;
    document.getElementById("feedbackTwo").innerHTML = "Inputs: " + storedInputInput;

    return;
}

function saveForm() {

    var x = document.getElementsByTagName("select");
    var y = document.getElementsByTagName("input");
    var formInputSelect = [];
    var formInputInput = [];
    for (i = 0; i < x.length; i++) {
        formInputSelect[i] = x[i].value;
    }
    for (i = 0; i < y.length; i++) {
        formInputInput[i] = y[i].value;
    }
    localStorage.setItem("formInputSelect", JSON.stringify(formInputSelect));
    localStorage.setItem("formInputInput", JSON.stringify(formInputInput));
    var storedInputSelect = JSON.parse(localStorage.getItem("formInputSelect"));
    var storedInputInput = JSON.parse(localStorage.getItem("formInputInput"));
    console.log(storedInputSelect);
    console.log(formInputInput);
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

