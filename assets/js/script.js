var saveBtnNum = ();
var saveDescTextArea = function() {
    localStorage.setItem("description", JSON.stringify(description));
};
// clock/date/time
var dateTime = function() {
    
    var current = moment("01012017", "DDMMYYYY");
    document.querySelector("currentDay, <p>") = current;
    console.log("time?");

};
dateTime();

// moment.js

// description.textarea editable

// saveBtn commits associated description.textarea to localStorage


// PSEUDO-CODING by Chris

// when the page loads, load hour block information
$(document).ready(function() {
  // have a eevent listener for all the save buttons that targets the text area
    saveBtnNum.addEventListener("#saveBtn-, ").click(function() {
        var textareaData = $("#description .textarea-").value.trim();
    })
  // take the values from the text area and store them in localStorage

  // apply past, present, or future styling depending on the hour

  // load all vallues from localStorage when document loads
});

saveBtnNum.addEventListener("click", saveDescTextArea);