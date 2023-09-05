
jQuery(document).ready(function($) {
    // only show individual input fields, if needed (selected by id)
    $('select[name=eventType]').change(function () {
        if ($(this).val() == '14') {
            $('#otherType').show();
            $('#otherType').addClass( "open" );
        } else {
            $('#otherType').hide();
            $('#otherType').removeClass( "open" );
        }
        console.log("done");
    });
    $('select[name=eventTarget]').change(function () {
        if ($(this).val() == '1') {
            $('#otherTypeTG').show();
            $('#otherTypeTG').addClass( "open" );
        } else {
            $('#otherTypeTG').hide();
            $('#otherTypeTG').removeClass( "open" );
        }
        console.log("done");
    });
    $('select[name=eventFaculty]').change(function () {
        if ($(this).val() == '13') {
            $('#otherTypeFaculty').show();
            $('#otherTypeFaculty').addClass( "open" );
        } else {
            $('#otherTypeFaculty').hide();
            $('#otherTypeFaculty').removeClass( "open" );
        }
        console.log("done");
    });
    $('select[name=eventtime]').change(function () {
        if ($(this).val() == '3') {
            $('#otherEventTime').show();
            $('#otherEventTime').addClass( "open" );
        } else {
            $('#otherEventTime').hide();
            $('#otherEventTime').removeClass( "open" );
        }
        console.log("done");
    });
    $('select[name=event_institution]').change(function () {
        if ($(this).val() == '6') {
            $('#otherEventInstitution').show();
            $('#otherEventInstitution').addClass( "open" );
        } else {
            $('#otherEventInstitution').hide();
            $('#otherEventInstitution').removeClass( "open" );
        }
        console.log("done");
    });
});

var button = document.getElementById("button");
//button.addEventListener("click", buttonAction);
var saved = JSON.parse(localStorage.getItem("formInputSelect"));

function feedbackForm() {

    var storedInputSelect = JSON.parse(localStorage.getItem("formInputSelect"));
    var storedInputInput = JSON.parse(localStorage.getItem("formInputInput"));
    if (typeof saved !== 'undefined' && saved !== null){
        var aims = Number(JSON.parse(localStorage.getItem("aims")));
        var content = Number(JSON.parse(localStorage.getItem("content")));
        var results = Number(JSON.parse(localStorage.getItem("results")));
        var methods = Number(JSON.parse(localStorage.getItem("methods")));
        var media = Number(JSON.parse(localStorage.getItem("media")));
        var result = content + aims + media + methods + results;

        //document.getElementById("feedbackTwo").innerHTML = "Inputs: " + JSON.parse(localStorage.getItem("aims"));
        if(result <= 10){
            document.getElementById("feedbackOne").innerHTML = "Richtungsgebend " + result;
        }
        if(result >= 11 && result <= 17){
            document.getElementById("feedbackOne").innerHTML = "Neugierig " + result;
        }
        if(result >= 18 && result <= 24){
            document.getElementById("feedbackOne").innerHTML = "Kooperativ " + result;
        }
        if(result >= 25 && result <= 31){
            document.getElementById("feedbackOne").innerHTML = "Ko-Kreativ " + result;
        }
        if(result >= 32 && result <= 35){
            document.getElementById("feedbackOne").innerHTML = "Lernbegleitend " + result;
        }
        //document.getElementById("formpie").style.cssText = "background-image: conic-gradient(orange "+100*aims/25+"%, blue "+100*aims/25+"% "+100*results/25+"%, red " + 100*results/25 + "% " + 100*media/25 + "%, green " + 100*media/25 + "% " + 100*methods/25 + "%, black " + 100*content/25 + "%);";
        var data = [{
          values: [aims, media, content, results, methods],
          marker: {colors: ['#FF5728', '#90D9DE', '#00CB7A', '#C9BDB7', '#FFFFFF']},
          labels: ['Ziele', 'Medien', 'Inhalte', 'Ergebnisse', 'Methoden'],
          type: 'pie'
        }];
        var layout = {
          //plot_bgcolor: "#0B344E",
          paper_bgcolor: 'rgba(0,0,0,0)',
          font: {
              color: 'white',
              //family:'Times New Roman'
          },
          height: 500,
          width: 500,
            legend: {
              orientation: "h",
              x: 0.1,
              y: -0.2
            }
          //showlegend: false,

        };
        Plotly.newPlot('formpie', data, layout, {displayModeBar: false});

        button.addEventListener("click", clearForm);
        document.getElementById("button").innerHTML = "Ergebnis löschen";
    }
    else{
        document.getElementById("feedbackOne").innerHTML = "Es liegen keine Ergebnisse vor.";
        document.getElementById("button").innerHTML = "Zurück zum Tool";
        button.addEventListener("click", formRestart);
    }

    return;
}

function saveForm() {
    var aims = [];
    var content = [];
    var results = [];
    var methods = [];
    var media = [];
    // save feedback aims
    $("input[name='Ziele']:checked").each(function() {
        aims.push($(this).attr('value'));
    });
    localStorage.setItem("aims", JSON.stringify(aims));
    // save feedback content
    $("input[name='Inhalte']:checked").each(function() {
        content.push($(this).attr('value'));
    });
    localStorage.setItem("content", JSON.stringify(content));
    // save feedback results
    $("input[name='Ergebnisse']:checked").each(function() {
        results.push($(this).attr('value'));
    });
    localStorage.setItem("results", JSON.stringify(results));
    // save feedback methods
    $("input[name='Methoden']:checked").each(function() {
        methods.push($(this).attr('value'));
    });
    localStorage.setItem("methods", JSON.stringify(methods));
    // save feedback media
    $("input[name='Medien']:checked").each(function() {
        media.push($(this).attr('value'));
    });
    localStorage.setItem("media", JSON.stringify(media));


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

function empty() {
    document.getElementById("feedbackOne").innerHTML = "Es liegen keine Ergebnisse vor.";
    document.getElementById("button").innerHTML = "Zurück zum Tool";
    button.addEventListener("click", formRestart);
    return;
}

/*
function buttonAction (){
    if (typeof saved !== 'undefined' && saved !== null){
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
*/
window.addEventListener("load", feedbackForm);

