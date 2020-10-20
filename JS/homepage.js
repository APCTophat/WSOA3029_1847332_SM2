let Display_1 = document.getElementById("Link_Display_1")
let Text_1 = document.getElementById("Link_Text_1")



function AddEventListers_1(){
    console.log("LOAD");
    [Display_1, Text_1].forEach(function(element) {
        
        element.addEventListener('mouseover', function(){
            d3.select('#Link_Display_1').transition().style("r", "calc(30px + 6vw)")
        })

        element.addEventListener('mouseout', function(){
            d3.select('#Link_Display_1').transition().style("r", "calc(20px + 6vw)")
          })
    }); 
}




///Things to load on start
window.onload = function(){
    d3.select('#Link_Display_1').style("r", "calc(20px + 6vw)");
    AddEventListers_1();
}


