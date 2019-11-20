function init(){


  document.getElementById("entrybutton").addEventListener("click", myfunction());
  document.getElementById("entrybutton").addEventListener("click", myfunction1());
}

function myfunction(){
  var x = document.getElementById("entryinput");
  alert("Walter Dorau:", x);
}
function myfunction1(){
  var y = document.getElementById("entryinput");
  var z = document.getElementById("textoutput");
  z.style.display(y);
}


window.addEventListener('load', init);
