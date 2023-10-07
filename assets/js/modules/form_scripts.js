jQuery(document).ready(function($) {
    // save form if something changed
    var pageStatus = document.getElementById("regForm");
    if(pageStatus){
        $('input').on('change', function () {
            saveForm();
            console.log("something changed, saved");
        });

        $('select').on('change', function () {
            saveForm();
            console.log("something changed, saved");
        });
    }
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
});

var button = document.getElementById("button");
var currentTab = 0;
//button.addEventListener("click", buttonAction);

function showTab(n) {
  var pageStatus = document.getElementById("regForm");
  if(pageStatus){
      // This function will display the specified tab of the form ...
      var x = document.getElementsByClassName("tab");
      //var y = document.getElementsByClassName("tabTitel");
      x[n].style.display = "block";

      // ... and fix the Previous/Next buttons:
      if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
        // only highlight current tab headline in table of content
        //y[n].className += " tablehighlight";
        //y[n+1].classList.remove("tablehighlight");
      } else {
        document.getElementById("prevBtn").style.display = "inline";
        // only highlight current tab headline in table of content
        //y[n].className += " tablehighlight";
        //y[n-1].classList.remove("tablehighlight");
        //if(y.length <= y[n+1]){
        //    y[n+1].classList.remove("tablehighlight");
        //}

      }
      if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Auswerten";
      } else {
        document.getElementById("nextBtn").innerHTML = "Weiter";
      }
      // ... and run a function that displays the correct step indicator:
      fixStepIndicator(n);
  }
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  localStorage.setItem("currentTab", JSON.stringify(currentTab));
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    currentTab = 0;
    localStorage.setItem("currentTab", JSON.stringify(currentTab));
    localStorage.setItem("formDone", JSON.stringify("true"));

    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
  saveForm();
  window.scrollTo(0, 0);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, z, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  z = x[currentTab].getElementsByTagName("select");
    for (i = 0; i < z.length; i++) {
        if(z[i].value == "0" & !z[i].classList.contains("hiddencontent")){
            z[i].classList.add("invalid");
            valid = false;
        }

    }
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field has class "open" and is empty...
    if (y[i].classList.contains("open")) {
          if (y[i].value == ""){
          // add an "invalid" class to the field:
          y[i].className += " invalid";
          // and set the current valid status to false:
          valid = false;
      }
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    //x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  //x[n].className += " active";
  document.getElementById("stepindicator").innerHTML = (n+1)+" / "+x.length;
}
function hideClass(classname){
    var a = document.getElementsByClassName(classname);
    for(i=0; i<a.length; i++){
        a[i].style.display = 'none';

    }
    return;
}
function showClass(classname){
    var a = document.getElementsByClassName(classname);
    for(i=0; i<a.length; i++){
        a[i].style.display = 'block';

    }
    return;
}
function checkResult (results){
        var flag = false;
        var i;
        for(i=0; i<results.length-1; i++){
            if (results[i] != 0){
                for(j=i+1; j<results.length-1; j++){
                    if(results[i]>=results[j]){
                         flag=true;
                    }
                    else {
                         flag=false;
                         break;
                    }
                }
                if(flag){
                    return i;
                }
            }
        }
        return i-1;
}
function feedbackForm() {
    // calc feedback if form is done

    if (JSON.parse(localStorage.getItem("formDone"))){
        var feedbackResult = [0,0,0,0,0,0];
        // get martix values from local storage
        var matrixVariables = [Number(JSON.parse(localStorage.getItem("aims"))), Number(JSON.parse(localStorage.getItem("content"))), Number(JSON.parse(localStorage.getItem("results"))), Number(JSON.parse(localStorage.getItem("methods"))), Number(JSON.parse(localStorage.getItem("media"))),Number(JSON.parse(localStorage.getItem("context"))), Number(JSON.parse(localStorage.getItem("evaluation")))];
        var resultingType = 0;
        for(i=0; i<matrixVariables.length; i++){
            // calc feedback result by counting matrix values
            switch(Number(matrixVariables[i])) {
              case 1:
                feedbackResult[0]++;
                break;
              case 2:
                feedbackResult[1]++;
                break;
              case 3:
                feedbackResult[2]++;
                break;
              case 4:
                feedbackResult[3]++;
                break;
              case 5:
                feedbackResult[4]++;
                break;
              case 0:
                feedbackResult[5]++;
                break;
              default:

            }
        }
        // find resulting teaching type
        for (i=0; i<feedbackResult.length; i++){
            if(feedbackResult[i]>=4){
                resultingType=i;
            }
        }
        if(!resultingType){
            resultingType = Number(checkResult(feedbackResult));
        }

        // change feedbackResult "0" to "null" to hide in pie chart
        for (i=0; i<feedbackResult.length; i++){
            if(feedbackResult[i]==0){
                feedbackResult[i]=null;
            }
        }
        // output teaching type
        document.getElementById("typemsg").innerHTML = 'Die Auswertung hat ergeben, dass du folgender Typ bist.';
        if(resultingType == 5){
            document.getElementById("feedbackOne").innerHTML = "Ungenügend Angaben <br>";
            document.getElementById("typemsg").innerHTML = 'Du hast keine Angaben zur Studierendenbeteiligung gemacht.';
            document.getElementById("formpie").style.display = 'none';
        }
        if(resultingType == 0){
            document.getElementById("feedbackOne").innerHTML = "Richtungs&shy;gebend";
            document.getElementById("feedbackTwo").innerHTML = "Toll, dass du das Tool genutzt hast, um deine Lehrpraxis hinsichtlich der Partizipationsausprägung einzuschätzen! Als Typ »richtungsgebend« übernimmst du viel Verantwortung und schaffst ein Lehr- und Lernsetting, welches den Studierenden eine Richtung vorgibt. Wenn du einen Teil deiner Verantwortung abgeben und Studierende mehr an der Planung, Gestaltung und Evaluation deiner Lehr- und Lehrveranstaltung beteiligen möchtest, lohnt es sich, einen Blick in die folgenden Tipps zu werfen.";
            document.getElementById("typeOne").style.display = 'block';
            document.getElementById("feedbackfieldone").style.display = 'block';
            document.getElementById("feedbackfieldtwo").style.display = 'block';
            document.getElementById("feedbackimg").src = 'assets/img/static/oep_illus/TypRichtungsweisend.jpg';
        }
        if(resultingType == 1){
            document.getElementById("feedbackOne").innerHTML = "Neugierig";
            document.getElementById("feedbackTwo").innerHTML = "Toll, dass du das Tool genutzt hast, um deine Lehrpraxis hinsichtlich der Partizipationsausprägung für dich einzuschätzen! Als Typ »neugierig« bist du an den Meinungen der Studierenden interessiert und holst dir bereits Feedback zu einzelnen Elementen ein. Hervorragend! Regelmäßiges Feedback von Studierenden an Dozierende und vice versa trägt wesentlich zur Steigerung der Unterrichtsqualität bei. Sofern du dir neben der Feedbackkultur noch mehr studentische Partizipation in der Planung, Gestaltung und Evaluation deiner Lehr- und Lehrveranstaltung wünscht, lohnt es sich, einen Blick in die folgenden Tipps zu werfen.";
            document.getElementById("typeTwo").style.display = 'block';
            document.getElementById("feedbackfieldone").style.display = 'block';
            document.getElementById("feedbackfieldtwo").style.display = 'block';
            document.getElementById("feedbackimg").src = 'assets/img/static/oep_illus/TypNeugierig.jpg';
        }
        if(resultingType == 2){
            document.getElementById("feedbackOne").innerHTML = "Kooperativ";
            document.getElementById("feedbackTwo").innerHTML = "Du bist bereits vertraut mit den Möglichkeiten zur Einbindung einer Studierendenvertretung in die Lehr- und Lernprozessgestaltung. Großartig! Falls du das nicht schon gemacht hast, dann zeige den Kursteilnehmenden auch inwiefern die Interessenvertretung auf die Kursgestaltung und -umsetzung einwirkt. Durch einen transparenten Prozess kannst du noch mehr Vertrauen bei den Studierenden schaffen und dich zudem rückversichern, dass die Interessen der gesamten Gruppe Berücksichtigung finden.<br>Überlege zudem, ob du bei zukünftigen Lehr- und Lernveranstaltungen dieser Art auch mehr Raum für direkte studentische Beteiligung und Mitbestimmung schaffen kannst. Im Folgenden geben wir dir ein paar Tipps, wie du das realisieren kannst.";
            document.getElementById("typeThree").style.display = 'block';
            document.getElementById("feedbackfieldone").style.display = 'block';
            document.getElementById("feedbackfieldtwo").style.display = 'block';
            document.getElementById("feedbackimg").src = 'assets/img/static/oep_illus/TypKooperativ.jpg';
        }
        if(resultingType == 3){
            document.getElementById("feedbackOne").innerHTML = "Ko-Kreativ <br>";
            document.getElementById("feedbackTwo").innerHTML = "Großartig! Du lebst Partizipation bereits in deiner Lehre, indem du die Studierenden direkt mitgestalten lässt. Im Folgenden findest du Tipps für deine Lehr-und Lernpraxis.";
            document.getElementById("typeFour").style.display = 'block';
            document.getElementById("feedbackfieldone").style.display = 'block';
            document.getElementById("feedbackfieldtwo").style.display = 'block';
            document.getElementById("feedbackimg").src = 'assets/img/static/oep_illus/TypKoKreativ.jpg';
        }
        if(resultingType == 4){
            document.getElementById("feedbackOne").innerHTML = "Lern&shy;begleitend";
            document.getElementById("feedbackTwo").innerHTML = "Hervorragend! Du bietest in deiner Lehr- und Lernveranstaltung den Studierenden Möglichkeiten zum selbstbestimmten Lernen, in denen sie ihre eigenen Interessen entwickeln bzw. diesen nachgehen können. Dabei nimmst du dich als Lehrende(r) zurück, begleitest den Prozess und förderst die Lernautonomie, welche wiederum eine wichtige Voraussetzung zum partizipativen Lernen ist. Selbstbestimmung ist aber nicht mit studentischer Partizipation gleichzusetzen.<br>Überlege deshalb, ob du bei zukünftigen Lehr- und Lernveranstaltungen dieser Art auch mehr Raum für einen ko-kreativen Ansatz schaffen magst. Anbei geben wir dir ein paar Tipps, wie das konkret realisiert werden kann.";
            document.getElementById("typeFive").style.display = 'block';
            document.getElementById("feedbackfieldone").style.display = 'block';
            document.getElementById("feedbackfieldtwo").style.display = 'block';
            document.getElementById("feedbackimg").src = 'assets/img/static/oep_illus/TypLernbegleitend.jpg';
        }
        // draw pie chart in respect of user inputs (unsing plotly)
        var data = [{
          values: feedbackResult,
          marker: {colors: ['#FFFFFF', '#90D9DE', '#C9BDB7', '#00CB7A', '#FF5728', '#000000']},
          labels: ['lehrendendefiniert', 'anhörend', 'repräsentativ', 'partnerschaftlich', 'studierendendefiniert', 'keine Angabe'],
          type: 'pie'
        }];
        var layoutOne = {
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
        var layoutTwo = {
          paper_bgcolor: 'rgba(0,0,0,0)',
          font: {
              color: 'black',
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
        Plotly.newPlot('formpie', data, layoutOne, config);
        Plotly.newPlot('formpieprint', data, layoutTwo, config);
        // end drawing
        otherTypeTG = Number(JSON.parse(localStorage.getItem(JSON.stringify("otherTypeTG"))));
        eventTarget = Number(JSON.parse(localStorage.getItem(JSON.stringify("eventTarget"))));
        tgcount = Number(JSON.parse(localStorage.getItem(JSON.stringify("tgcount"))));
        if(eventTarget == "other" && otherTypeTG == 1){
            showClass ("variablea");
        }
        else{
            showClass ("variableb");
        }
        if(tgcount <= 4){
            showClass ("variablec");
        }
        if(tgcount > 4){
            showClass ("variabled");
        }
        if(tgcount <= 4 && otherTypeTG != 1){
            showClass ("variablee");
        }
        button.addEventListener("click", clearForm);
        document.getElementById("button").innerHTML = "Ergebnis löschen";

    }
    else{
        document.getElementById("feedbackOne").innerHTML = "Es liegen keine Ergebnisse vor.";
        document.getElementById("typemsg").style.display = 'none';
        //document.getElementById("button").innerHTML = "Zurück zum Tool";
        //button.addEventListener("click", formRestart);
    }
    return;

}

function saveForm() {
    // matrix dimensions
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
    return;
}

function clearForm() {
    localStorage.clear();
    location.reload(true);
    /*
    document.getElementById("feedbackOne").innerHTML = "";
    document.getElementById("feedbackTwo").innerHTML = "";
    document.getElementById("formpiecontainer").style.display = "none";

    document.getElementById("button").innerHTML = "Zurück zum Tool";
    button.addEventListener("click", formRestart);
    */
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
    console.log("start loading");
    if(JSON.parse(localStorage.getItem("formInputSelect")) != null) {

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
        console.log("saved stuff loaded");
    }
    else {
        console.log("nothing saved");
    }
    if(JSON.parse(localStorage.getItem("currentTab")) != null) {
        currentTab = JSON.parse(localStorage.getItem("currentTab"));
        console.log("current tab: "+currentTab);
        console.log("loading done");

    }
    if(JSON.parse(localStorage.getItem("formDone"))) {
        document.getElementById("formdone").style.display = "block";
        console.log("form done");
    }
    showTab(currentTab);

}

function saveVal (name) {

    var a = document.getElementById(name).value;
    localStorage.setItem(JSON.stringify(name), JSON.stringify(a));
    var storedval = JSON.parse(localStorage.getItem(JSON.stringify(name)));

    console.log("function saveVal saved element: "+name+", value: "+storedval);

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
function checkfield(field_id, target_id, optionOne, optionTwo, optionThree, otValue) {
    if(optionOne){
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
    if(optionThree){
        var x = document.getElementById(field_id);
        var y = document.getElementById(target_id);
        if(otValue == x.value){
            y.classList.remove("open");
            y.style.display = 'none';
        }
        else {
            y.classList.add("open");
            y.style.display = 'block';
        }
        console.log("checkfiled done with field id: " + field_id);
    }
    if(optionTwo){
        saveVal (field_id);
    }

}


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

function printFile () {

		var pdf = new jsPDF('p', 'pt', 'letter');
		pdf.html(document.getElementById('html'), {
			callback: function (pdf) {
				var iframe = document.createElement('iframe');
				iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
				document.body.appendChild(iframe);
				iframe.src = pdf.output('datauristring');
			}
		}
		);

}