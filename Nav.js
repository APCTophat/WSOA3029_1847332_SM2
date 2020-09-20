let BurgerMenu = document.getElementsByClassName("icon")[0];
BurgerMenu.addEventListener('click', function(){ 
    var x = document.getElementById("CollapsedLinks");
if (x.style.display === "block") {
  x.style.display = "none";
} else {
  x.style.display = "block";
};
});


