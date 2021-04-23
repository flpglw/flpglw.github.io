let buttons = document.querySelectorAll('button')

new ClipboardJS(buttons);

function partStandards() {
  var x = document.getElementById("divStandards");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function partRetail() {
  var x = document.getElementById("divRetail");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function partHBS() {
  var x = document.getElementById("divHBS");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function partChat() {
  var x = document.getElementById("divChat");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function partXOS() {
  var x = document.getElementById("divXOS");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

{
	document.getElementById("divStandards").style.display = "none";
	document.getElementById("divRetail").style.display = "none";
	document.getElementById("divHBS").style.display = "none";
	document.getElementById("divChat").style.display = "none";
  document.getElementById("divXOS").style.display = "none";
}