let Display_1 = document.getElementById("Link_Display_1")
let Text_1 = document.getElementById("Link_Text_1")

let Display_2 = document.getElementById("Link_Display_2")
let Text_2 = document.getElementById("Link_Text_2")

let Display_3 = document.getElementById("Link_Display_3")
let Text_3 = document.getElementById("Link_Text_3")

let Display_4 = document.getElementById("Link_Display_4")
let Text_4 = document.getElementById("Link_Text_4")



function AddEventListers_1(){
    [Display_1, Text_1].forEach(function(element) {
        
        element.addEventListener('mouseover', function(){
            d3.select('#Link_Display_1').transition().style("r", "calc(40px + 6vw)")
            d3.select('#Link_Display_1').style("fill", "#bf9645") 
            d3.select('#Link_Text_1').attr("fill", "#6f6282")
        })

        element.addEventListener('mouseout', function(){
            d3.select('#Link_Display_1').transition().style("r", "calc(20px + 6vw)") 
            d3.select('#Link_Display_1').style("fill", "#7d622e")
            d3.select('#Link_Text_1').attr("fill", "#41394d")
          })
    }); 

    [Display_2, Text_2].forEach(function(element) {
        
        element.addEventListener('mouseover', function(){
            d3.select('#Link_Display_2').transition().style("r", "calc(40px + 6vw)")
            d3.select('#Link_Display_2').style("fill", "#bf9645") 
            d3.select('#Link_Text_2').attr("fill", "#6f6282")
        })

        element.addEventListener('mouseout', function(){
            d3.select('#Link_Display_2').transition().style("r", "calc(20px + 6vw)")
            d3.select('#Link_Display_2').style("fill", "#b38734")
            d3.select('#Link_Text_2').attr("fill", "#41394d")
          })
    }); 

    [Display_3, Text_3].forEach(function(element) {
        
        element.addEventListener('mouseover', function(){
            d3.select('#Link_Display_3').transition().style("r", "calc(40px + 6vw)")
            d3.select('#Link_Display_3').style("fill", "#dead4e") 
            d3.select('#Link_Text_3').attr("fill", "#6f6282")
        })

        element.addEventListener('mouseout', function(){
            d3.select('#Link_Display_3').transition().style("r", "calc(20px + 6vw)")
            d3.select('#Link_Display_3').style("fill", "#9c7730")
            d3.select('#Link_Text_3').attr("fill", "#41394d")
          })
    }); 

    [Display_4, Text_4].forEach(function(element) {
        
        element.addEventListener('mouseover', function(){
            d3.select('#Link_Display_4').transition().style("r", "calc(40px + 6vw)")
            d3.select('#Link_Display_4').style("fill", "#dead4e") 
            d3.select('#Link_Text_4').attr("fill", "#6f6282")
        })

        element.addEventListener('mouseout', function(){
            d3.select('#Link_Display_4').transition().style("r", "calc(20px + 6vw)")
            d3.select('#Link_Display_4').style("fill", "#c7922e")
            d3.select('#Link_Text_4').attr("fill", "#41394d")
          })
    }); 
   
}



///Things to load on start
window.onload = function(){
    d3.select('#Link_Display_1').style("fill", "#7d622e")
    d3.select('#Link_Display_2').style("fill", "#b38734")
    d3.select('#Link_Display_3').style("fill", "#9c7730")
    d3.select('#Link_Display_4').style("fill", "#c7922e")
    d3.selectAll("#Link_Display_1, #Link_Display_2, #Link_Display_3, #Link_Display_4").style("r", "calc(20px + 6vw)");
    AddEventListers_1();
}


