
jQuery(document).ready(function($) {
    // only activate current checkbox

    $('input[name=Ziele]').change(function () {
        var checkboxes = document.getElementsByClassName("multiinput");

        for (i=0; i < checkboxes.length; i++) {
            if(checkboxes[i].name == "Ziele"){
                if(checkboxes[i].value != $(this).val()) {
                    document.getElementsByClassName("multiinput")[i].checked = false;
                }
            }
        }
    });
    $('input[name=Methoden]').change(function () {
        var checkboxes = document.getElementsByClassName("multiinput");

        for (i=0; i < checkboxes.length; i++) {
            if(checkboxes[i].name == "Methoden"){
                if(checkboxes[i].value != $(this).val()) {
                    document.getElementsByClassName("multiinput")[i].checked = false;
                }
            }
        }
    });
    $('input[name=Ergebnisse]').change(function () {
        var checkboxes = document.getElementsByClassName("multiinput");

        for (i=0; i < checkboxes.length; i++) {
            if(checkboxes[i].name == "Ergebnisse"){
                if(checkboxes[i].value != $(this).val()) {
                    document.getElementsByClassName("multiinput")[i].checked = false;
                }
            }
        }
    });
    $('input[name=Inhalte]').change(function () {
        var checkboxes = document.getElementsByClassName("multiinput");

        for (i=0; i < checkboxes.length; i++) {
            if(checkboxes[i].name == "Inhalte"){
                if(checkboxes[i].value != $(this).val()) {
                    document.getElementsByClassName("multiinput")[i].checked = false;
                }
            }
        }
    });
    $('input[name=Medien]').change(function () {
        var checkboxes = document.getElementsByClassName("multiinput");

        for (i=0; i < checkboxes.length; i++) {
            if(checkboxes[i].name == "Medien"){
                if(checkboxes[i].value != $(this).val()) {
                    document.getElementsByClassName("multiinput")[i].checked = false;
                }
            }
        }
    });
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
var status = 0;
//button.addEventListener("click", buttonAction);

function feedbackForm() {
    var storedInputSelect = JSON.parse(localStorage.getItem("formInputSelect"));
    var storedInputInput = JSON.parse(localStorage.getItem("formInputInput"));
    if (typeof storedInputInput !== 'undefined' && storedInputInput !== null){
        var pieInput = [0,0,0,0,0,0];
        var matrixVariables = [Number(JSON.parse(localStorage.getItem("aims"))), Number(JSON.parse(localStorage.getItem("content"))), Number(JSON.parse(localStorage.getItem("results"))), Number(JSON.parse(localStorage.getItem("methods"))), Number(JSON.parse(localStorage.getItem("media")))];
        var result = 0;
        for(i=0; i<matrixVariables.length; i++){
            // calc total points of user
            result = result + Number(matrixVariables[i]);
            // calc pie dimensions
            switch(Number(matrixVariables[i])) {
              case 1:
                pieInput[0]++;
                break;
              case 2:
                pieInput[1]++;
                break;
              case 3:
                pieInput[2]++;
                break;
              case 4:
                pieInput[3]++;
                break;
              case 5:
                pieInput[4]++;
                break;
              case 6:
                pieInput[5]++;
                break;
              default:

            }
        }

        //document.getElementById("feedbackTwo").innerHTML = "Inputs: " + JSON.parse(localStorage.getItem("aims"));
        if(result <= 10){
            document.getElementById("feedbackOne").innerHTML = "Richtungsgebend <br>";
        }
        if(result >= 11 && result <= 17){
            document.getElementById("feedbackOne").innerHTML = "Neugierig <br>";
        }
        if(result >= 18 && result <= 24){
            document.getElementById("feedbackOne").innerHTML = "Kooperativ <br>";
        }
        if(result >= 25 && result <= 31){
            document.getElementById("feedbackOne").innerHTML = "Ko-Kreativ <br>";
        }
        if(result >= 32 && result <= 35){
            document.getElementById("feedbackOne").innerHTML = "Lernbegleitend <br>";
        }
        // draw pie chart in respect of user inputs
        var data = [{
          values: pieInput,
          marker: {colors: ['#FFFFFF', '#90D9DE', '#C9BDB7', '#00CB7A', '#FF5728']},
          labels: ['lehrendendefiniert', 'anhörend', 'repräsentativ', 'partnerschaftlich', 'studierendendefiniert'],
          type: 'pie'
        }];
        var layout = {
          paper_bgcolor: 'rgba(0,0,0,0)',
          font: {
              color: 'white',
              //family:'Times New Roman'
          },
          //height: 500,
          //width: 500,
          autosize: true,
            margin: {
              l: 0,
              r: 150,
            },
            legend: {
              orientation: "h",
              x: 0.1,
              y: -0.2,
            },

          //showlegend: false,

        };
        var config = {
            displayModeBar: false,
            responsive: true,
        }
        Plotly.newPlot('formpie', data, layout, config);
        // end drawing
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
    status++;
    console.log(status);
    return;
}

function clearForm() {
    document.getElementById("feedbackOne").innerHTML = "";
    document.getElementById("feedbackTwo").innerHTML = "";
    document.getElementById("formpiecontainer").style.display = "none";
    localStorage.clear();
    document.getElementById("button").innerHTML = "Zurück zum Tool";
    button.addEventListener("click", formRestart);
    status = 0;
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

function setCheckboxTrue(kind, value, classname) {
    var checkboxes = document.getElementsByClassName(classname);
    for (i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].name == kind){
            if(checkboxes[i].value == value){
                document.getElementsByClassName(classname)[i].checked = true;
            }
            else {

            }
        }
    }
    return;
}
function checkstatus() {
    if(status){
        // if status 1, load stored data, restore form

        setCheckboxTrue("Ziele", Number(JSON.parse(localStorage.getItem("aims"))), "multiinput");
        setCheckboxTrue("Inhalte", Number(JSON.parse(localStorage.getItem("content"))), "multiinput");
        setCheckboxTrue("Medien", Number(JSON.parse(localStorage.getItem("methods"))), "multiinput");
        setCheckboxTrue("Methoden", Number(JSON.parse(localStorage.getItem("methods"))), "multiinput");
        setCheckboxTrue("Ergebnisse", Number(JSON.parse(localStorage.getItem("results"))), "multiinput");

        var x = document.getElementsByTagName("select");
        var y = document.getElementsByTagName("input");
        var storedInputSelect = JSON.parse(localStorage.getItem("formInputSelect"));
        var storedInputInput = JSON.parse(localStorage.getItem("formInputInput"));
        for (i = 0; i < x.length; i++) {
            x[i].value = storedInputSelect[i];
        }
        for (i = 0; i < y.length; i++) {
            y[i].value = storedInputInput[i];
        }
    }

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
window.addEventListener("load", checkstatus);

