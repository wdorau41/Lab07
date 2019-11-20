function init(){


  document.getElementById("entrybutton").addEventListener("click", myfunction());
}

function myfunction(){
  alert("Walter Dorau:", getElementById("textentry"));
}


window.addEventListener('load', init);
