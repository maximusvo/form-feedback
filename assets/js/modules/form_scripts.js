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
    $('input[name=Kontext]').change(function () {
        var checkboxes = document.getElementsByClassName("multiinput");

        for (i=0; i < checkboxes.length; i++) {
            if(checkboxes[i].name == "Kontext"){
                if(checkboxes[i].value != $(this).val()) {
                    document.getElementsByClassName("multiinput")[i].checked = false;
                }
            }
        }
    });
    $('input[name=Evaluation]').change(function () {
        var checkboxes = document.getElementsByClassName("multiinput");

        for (i=0; i < checkboxes.length; i++) {
            if(checkboxes[i].name == "Evaluation"){
                if(checkboxes[i].value != $(this).val()) {
                    document.getElementsByClassName("multiinput")[i].checked = false;
                }
            }
        }
    });
    // only show individual input fields, if needed (selected by id)


});

var button = document.getElementById("button");
var status = 0;
//button.addEventListener("click", buttonAction);

function feedbackForm() {
    var storedInputSelect = JSON.parse(localStorage.getItem("formInputSelect"));
    var storedInputInput = JSON.parse(localStorage.getItem("formInputInput"));
    if (typeof storedInputInput !== 'undefined' && storedInputInput !== null){
        var pieInput = [0,0,0,0,0,0];
        var matrixVariables = [Number(JSON.parse(localStorage.getItem("aims"))), Number(JSON.parse(localStorage.getItem("content"))), Number(JSON.parse(localStorage.getItem("results"))), Number(JSON.parse(localStorage.getItem("methods"))), Number(JSON.parse(localStorage.getItem("media"))),Number(JSON.parse(localStorage.getItem("context"))), Number(JSON.parse(localStorage.getItem("evaluation")))];
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

        if(result == 0){
            document.getElementById("feedbackOne").innerHTML = "Ungenügend Angaben <br>";
        }
        if(result != 0 && result <= 10){
            document.getElementById("feedbackOne").innerHTML = "Richtungs&shy;gebend";
            document.getElementById("feedbackTwo").innerHTML = "Toll, dass du das Tool genutzt hast, um deine Lehrpraxis hinsichtlich der Partizipationsausprägung einzuschätzen! Als Typ »richtungsgebend« übernimmst du viel Verantwortung und schaffst ein Lehr- und Lernsetting, welches den Studierenden eine Richtung vorgibt. Sofern du einen Teil deiner Verantwortung abgeben möchtest und dir dabei noch mehr studentische Partizipation in der Planung, Gestaltung und Evaluation deiner Lehr- und Lehrveranstaltung wünscht, lohnt es sich, einen Blick in die folgenden Tipps zu werfen.";
            document.getElementById("typeOne").style.display = 'block';
        }
        if(result >= 11 && result <= 17){
            document.getElementById("feedbackOne").innerHTML = "Neugierig";
            document.getElementById("feedbackTwo").innerHTML = "Toll, dass du das Tool genutzt hast, um deine Lehrpraxis hinsichtlich der Partizipationsausprägung für dich einzuschätzen! Als Typ »neugierig« bist du an den Meinungen der Studierenden interessiert und holst dir bereits Feedback zu einzelnen Elementen ein. Hervorragend! Regelmäßiges Feedback von Studierenden an Dozierende und vice versa trägt wesentlich zur Steigerung der Unterrichtsqualität bei. Sofern du dir neben der Feedbackkultur noch mehr studentische Partizipation in der Planung, Gestaltung und Evaluation deiner Lehr- und Lehrveranstaltung wünscht, lohnt es sich, einen Blick in die folgenden Tipps zu werfen.";
            document.getElementById("typeTwo").style.display = 'block';
        }
        if(result >= 18 && result <= 24){
            document.getElementById("feedbackOne").innerHTML = "Kooperativ";
            document.getElementById("feedbackTwo").innerHTML = "Du bist bereits vertraut mit den Möglichkeiten zur Einbindung einer Studierendenvertretung in die Lehr- und Lernprozessgestaltung. Großartig! Falls du das nicht schon gemacht hast, dann zeige den Kursteilnehmenden auch, inwiefern die Interessenvertretung auf die Kursgestaltung und -umsetzung einwirkt. Durch einen transparenten Prozess kannst du noch mehr Vertrauen bei den Studierenden schaffen und dich zudem rückversichern, dass die Interessen der gesamten Gruppe Berücksichtigung finden.<br>Überlege zudem, ob du bei zukünftigen Lehr- und Lernveranstaltungen dieser Art auch mehr Raum für direkte studentische Beteiligung und Mitbestimmung schaffen kannst. Anbei geben wir dir ein paar Tipps, wie das konkret realisiert werden kann.";
            document.getElementById("typeThree").style.display = 'block';
        }
        if(result >= 25 && result <= 31){
            document.getElementById("feedbackOne").innerHTML = "Ko-Kreativ <br>";
            document.getElementById("feedbackTwo").innerHTML = "Großartig! Du lebst Partizipation bereits in deiner Lehre, in dem du die Studierenden direkt mitgestalten lässt. Toll! Anbei findest du darüber hinaus noch ein paar wertvolle Tipps für deine Lehr-und Lernpraxis.";
            document.getElementById("typeFour").style.display = 'block';
        }
        if(result >= 32 && result <= 35){
            document.getElementById("feedbackOne").innerHTML = "Lern&shy;begleitend";
            document.getElementById("feedbackTwo").innerHTML = "Hervorragend! Du bietest in deiner Lehr- und Lernveranstaltung den Studierenden Möglichkeiten zum selbstbestimmten Lernen, in denen sie ihre eigenen Interessen entwickeln bzw. diesen nachgehen können. Dabei nimmst du dich als Lehrende(r) zurück, begleitest den Prozess und förderst die Lernautonomie, welche wiederum eine wichtige Voraussetzung zum partizipativen Lernen ist. Selbstbestimmung ist aber nicht mit studentischer Partizipation gleichzusetzen.<br>Überlege deshalb, ob du bei zukünftigen Lehr- und Lernveranstaltungen dieser Art auch mehr Raum für einen ko-kreativen Ansatz schaffen magst. Anbei geben wir dir ein paar Tipps, wie das konkret realisiert werden kann.";
            document.getElementById("typeFive").style.display = 'block';
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
    var context = [];
    var evaluation = [];
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
    $("input[name='Kontext']:checked").each(function() {
        context.push($(this).attr('value'));
    });
    localStorage.setItem("context", JSON.stringify(context));
    $("input[name='Evaluation']:checked").each(function() {
        evaluation.push($(this).attr('value'));
    });
    localStorage.setItem("evaluation", JSON.stringify(evaluation));


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
    status++;
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
        setCheckboxTrue("Medien", Number(JSON.parse(localStorage.getItem("media"))), "multiinput");
        setCheckboxTrue("Methoden", Number(JSON.parse(localStorage.getItem("methods"))), "multiinput");
        setCheckboxTrue("Ergebnisse", Number(JSON.parse(localStorage.getItem("results"))), "multiinput");
        setCheckboxTrue("Kontext", Number(JSON.parse(localStorage.getItem("context"))), "multiinput");
        setCheckboxTrue("Evaluation", Number(JSON.parse(localStorage.getItem("evaluation"))), "multiinput");

        var x = document.getElementsByTagName("select");
        var y = document.getElementsByTagName("input");
        var storedInputSelect = JSON.parse(localStorage.getItem("formInputSelect"));
        var storedInputInput = JSON.parse(localStorage.getItem("formInputInput"));
        for (i = 0; i < x.length; i++) {
            x[i].value = storedInputSelect[i];
            if(x[i].value == "other"){
                x[i].onchange();
                }
        }
        for (i = 0; i < y.length; i++) {
            y[i].value = storedInputInput[i];
            if(y[i].value == "other"){
                y[i].onchange();
            }
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
function checkfield(field_id, target_id) {
    var x = document.getElementById(field_id);
    var y = document.getElementById(target_id);
    if("other" == x.value){
        y.classList.add("open");
        y.style.display = 'block';
    }
    else {
        y.classList.remove("open");
        y.style.display = 'none';
    }
    console.log("checkfiled done with field id: " + field_id);
}
window.addEventListener("load", feedbackForm);
window.addEventListener("load", checkstatus);

if(document.getElementsByClassName("collapsible") != null){
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
}