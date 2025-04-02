function myFunction() {
  var x = document.getElementById("myNavigation");
  if (x.className == "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}