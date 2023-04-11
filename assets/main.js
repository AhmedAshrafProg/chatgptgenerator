

$(document).ready(function(){
      $('select').formSelect();
    });

function showLoading() {
document.querySelector('.progress').style.display = 'block';
}

function hideLoading() {
document.querySelector('.progress').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.dropdown-trigger');
var instances = M.Dropdown.init(elems, { coverTrigger: false });
});

document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.modal');
var instances = M.Modal.init(elems, {});
});

var form = document.getElementById('form');

// Store the form values in localStorage
function storeFormValues() {
var formValues = {
  temperature: document.getElementById('temperature').value,
  paragraph: document.getElementById('paragraph').value,
  length: document.getElementById('length').value,
  outputDocument: document.getElementById('outputDocument').value,
  persona: document.getElementById('persona').value,
  textFontSize: document.getElementById('textFontSize').value,
  textBold: document.getElementById('textBold').checked,
  codeFontSize: document.getElementById('codeFontSize').value,
  codeBold: document.getElementById('codeBold').checked,
  codeBgColor: document.getElementById('codeBgColor').value,
  topic: document.getElementById('topic').value,
  lang: document.getElementById('langSelect').value,
  tone: document.getElementById('toneSelect').value,
  textFont: document.getElementById('textFontSelect').value,
  codeFont: document.getElementById('codeFontSelect').value
};
  if (window.innerWidth > 1000) {
// Code to execute if the viewport width is less than 600 pixels
    localStorage.setItem('formValues', JSON.stringify(formValues));
  } 
}

// Load the form values from localStorage
function loadFormValues() {
var formValues = JSON.parse(localStorage.getItem('formValues'));
if (formValues !== null) {
  document.getElementById('temperature').value = formValues.temperature;
  document.getElementById('paragraph').value = formValues.paragraph;
  document.getElementById('length').value = formValues.length;
  document.getElementById('outputDocument').value = formValues.outputDocument;
  document.getElementById('persona').value = formValues.persona;
  document.getElementById('textFontSize').value = formValues.textFontSize;
  document.getElementById('textBold').checked = formValues.textBold;
  document.getElementById('codeFontSize').value = formValues.codeFontSize;
  document.getElementById('codeBold').checked = formValues.codeBold;
  document.getElementById('codeBgColor').value = formValues.codeBgColor;
  document.getElementById('topic').value = formValues.topic;
  document.getElementById('langSelect').value = formValues.lang;
  document.getElementById('toneSelect').value = formValues.tone;
  document.getElementById('textFontSelect').value = formValues.textFont;
  document.getElementById('codeFontSelect').value = formValues.codeFont;
}
}

window.onload = function() {
loadFormValues();
};

form.addEventListener('submit', function(event) {
event.preventDefault();
  // Show the loading spinner
showLoading();

var formValues = {
  temperature: document.getElementById('temperature').value,
  paragraph: document.getElementById('paragraph').value,
  length: document.getElementById('length').value,
 outputDocument: document.getElementById('outputDocument').value,
 persona: document.getElementById('persona').value,
  textFontSize: document.getElementById('textFontSize').value,
  textBold: document.getElementById('textBold').checked,
  codeFontSize: document.getElementById('codeFontSize').value,
  codeBold: document.getElementById('codeBold').checked,
  codeBgColor: document.getElementById('codeBgColor').value,
  topic: document.getElementById('topic').value,
  lang: document.getElementById('langSelect').value,
  tone: document.getElementById('toneSelect').value,
  textFont: document.getElementById('textFontSelect').value,
  codeFont: document.getElementById('codeFontSelect').value
};
console.log("Values "+JSON.stringify(formValues));

storeFormValues();
google.script.run.withSuccessHandler(showModal).withFailureHandler(failureFromBackEnd).processForm(formValues);
});
function showModal(param) {
// document.getElementById('statusId').textContent  = "Status is success: "+param
var instance = M.Modal.getInstance(document.getElementById('success-modal'));
  // Hide the loading spinner after a delay (to ensure the report is displayed before hiding)
setTimeout(hideLoading, 500);
instance.open();

}
function failureFromBackEnd(param){
  // document.getElementById('statusId').textContent  = "Status is success: "+param

}

