let buttons = document.querySelectorAll('button')

new ClipboardJS(buttons);

function myFunction() {
  var x = document.getElementById("divRetail");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}