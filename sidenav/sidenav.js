//Selecting an element
var closenavicon =document.getElementById("closenav")
var sidenav1 =document.querySelector(".sidenav")


closenavicon.addEventListener("click", function(){

  sidenav1.style.left="-500px"

})

//menu bar click  event
var menubar =document.getElementById("menubar")
menubar.addEventListener("click", function(){
sidenav1.style.left="0px"

})