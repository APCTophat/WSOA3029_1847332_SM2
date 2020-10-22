let Deaths06_05_2020;
let Deaths06_06_2020;
let Deaths06_07_2020;
let Deaths06_08_2020;
let Deaths06_09_2020;
let Deaths06_10_2020;
fetch('https://api.covid19api.com/total/country/south-africa')  
.then(response => response.json())                               
.then(data => {console.log('pcik me',data) 
    Deaths06_05_2020 = data[105].Deaths                       
    Deaths06_06_2020 = data[136].Deaths
    Deaths06_07_2020 = data[166].Deaths
    Deaths06_08_2020 = data[197].Deaths
    Deaths06_09_2020 = data[228].Deaths
    Deaths06_10_2020 = data[258].Deaths
    myFunction() 
})

let Diff1;
let Diff2;
let Diff3;
let Diff4;
let Diff5;
  function myFunction() {
        //First work out the Difference between one month and the previous month
        Diff1 = Deaths06_06_2020 - Deaths06_05_2020
        Diff2 = Deaths06_07_2020 - Deaths06_06_2020
        Diff3 = Deaths06_08_2020 - Deaths06_07_2020
        Diff4 = Deaths06_09_2020 - Deaths06_08_2020
        Diff5 = Deaths06_10_2020 - Deaths06_09_2020
        //Then work out the total diff: note will not be total of total deaths of the deaths because the month diff1 is mesuared against isn't included 
        //That means Total deaths would be DiffTotal + Deaths06_05_2020 but I am not using that number for this graph
        let DiffTotal = Diff1 + Diff2 + Diff3 + Diff4 + Diff5
        //Workout stroke-dasharray which is in the format of ="num it takes up    100-Num it takes up"
        let Diff1Percent = (Diff1/DiffTotal) * 100
        let Diff1DashArray = Diff1Percent.toString()+" "+(100 - Diff1Percent).toString()
        d3.select('#donut-segment-1').style("stroke-dasharray", Diff1DashArray)

        let Diff2Percent = (Diff2/DiffTotal) * 100
        let Diff2DashArray = Diff2Percent.toString()+" "+(100 - Diff2Percent).toString()
        d3.select('#donut-segment-2').style("stroke-dasharray", Diff2DashArray)
        
        let Diff3Percent = (Diff3/DiffTotal) * 100
        let Diff3DashArray = Diff3Percent.toString()+" "+(100 - Diff3Percent).toString()
        d3.select('#donut-segment-3').style("stroke-dasharray", Diff3DashArray)

        let Diff4Percent = (Diff4/DiffTotal) * 100
        let Diff4DashArray = Diff4Percent.toString()+" "+(100 - Diff4Percent).toString()
        d3.select('#donut-segment-4').style("stroke-dasharray", Diff4DashArray)

        let Diff5Percent = (Diff5/DiffTotal) * 100
        let Diff5DashArray = Diff5Percent.toString()+" "+(100 - Diff5Percent).toString()
        d3.select('#donut-segment-5').style("stroke-dasharray", Diff5DashArray)
        //Workout stroke-dashoffset which is the offset to make the line be in the correct pos for the first on it will be 25 then each one will be Circumference - all preceding segments' total length +  First segment's offset = Current Segment Offset (100 - SomeNum + 25) 
        d3.select('#donut-segment-1').style("stroke-dashoffset", 25)

        let Diff2Dashoffset = 100 - Diff1Percent + 25
        d3.select('#donut-segment-2').style("stroke-dashoffset", Diff2Dashoffset.toString())

        let Diff3Dashoffset = 100 - (Diff1Percent + Diff2Percent) + 25
        d3.select('#donut-segment-3').style("stroke-dashoffset", Diff3Dashoffset.toString())

        let Diff4Dashoffset = 100 - (Diff1Percent + Diff2Percent + Diff3Percent) + 25
        d3.select('#donut-segment-4').style("stroke-dashoffset", Diff4Dashoffset.toString())

        let Diff5Dashoffset = 100 - (Diff1Percent + Diff2Percent + Diff3Percent + Diff4Percent) + 25
        d3.select('#donut-segment-5').style("stroke-dashoffset", Diff5Dashoffset.toString())

    } 

let Target1 = document.getElementById("Indext_Circle_5");
let Target2 = document.getElementById("Indext_Circle_4");
let Target3 = document.getElementById("Indext_Circle_3");
let Target4 = document.getElementById("Indext_Circle_2");
let Target5 = document.getElementById("Indext_Circle_1");
d3.select('#DisplayText').attr("fill", "#6f6282")

Target1.addEventListener('mouseover', function(){
    d3.select('#donut-segment-2').style("opacity", 0.2)
    d3.select('#donut-segment-3').style("opacity", 0.2)
    d3.select('#donut-segment-4').style("opacity", 0.2)
    d3.select('#donut-segment-5').style("opacity", 0.2);

    document.getElementById("DisplayText").innerHTML = Diff1
    d3.select('#DisplayText').attr("fill", " #ffc94a")
})
Target2.addEventListener('mouseover', function(){
    d3.select('#donut-segment-1').style("opacity", 0.2)
    d3.select('#donut-segment-3').style("opacity", 0.2)
    d3.select('#donut-segment-4').style("opacity", 0.2)
    d3.select('#donut-segment-5').style("opacity", 0.2);

    document.getElementById("DisplayText").innerHTML = Diff2
    d3.select('#DisplayText').attr("fill", " #ffc94a")
})
Target3.addEventListener('mouseover', function(){
    d3.select('#donut-segment-2').style("opacity", 0.2)
    d3.select('#donut-segment-1').style("opacity", 0.2)
    d3.select('#donut-segment-4').style("opacity", 0.2)
    d3.select('#donut-segment-5').style("opacity", 0.2);

    document.getElementById("DisplayText").innerHTML = Diff3
    d3.select('#DisplayText').attr("fill", " #ffc94a")
})
Target4.addEventListener('mouseover', function(){
    d3.select('#donut-segment-2').style("opacity", 0.2)
    d3.select('#donut-segment-1').style("opacity", 0.2)
    d3.select('#donut-segment-3').style("opacity", 0.2)
    d3.select('#donut-segment-5').style("opacity", 0.2);

    document.getElementById("DisplayText").innerHTML = Diff4
    d3.select('#DisplayText').attr("fill", " #ffc94a")
})
Target5.addEventListener('mouseover', function(){
    d3.select('#donut-segment-2').style("opacity", 0.2)
    d3.select('#donut-segment-1').style("opacity", 0.2)
    d3.select('#donut-segment-3').style("opacity", 0.2)
    d3.select('#donut-segment-4').style("opacity", 0.2);

    document.getElementById("DisplayText").innerHTML = Diff5
    d3.select('#DisplayText').attr("fill", " #ffc94a")
    
})


Target1.addEventListener('mouseout', function(){
    d3.select('#donut-segment-2').style("opacity", 1)
    d3.select('#donut-segment-3').style("opacity", 1)
    d3.select('#donut-segment-4').style("opacity", 1)
    d3.select('#donut-segment-5').style("opacity", 1);

    d3.select('#DisplayText').attr("fill", "#6f6282")
})
Target2.addEventListener('mouseout', function(){
    d3.select('#donut-segment-1').style("opacity", 1)
    d3.select('#donut-segment-3').style("opacity", 1)
    d3.select('#donut-segment-4').style("opacity", 1)
    d3.select('#donut-segment-5').style("opacity", 1);

    d3.select('#DisplayText').attr("fill", "#6f6282")
})
Target3.addEventListener('mouseout', function(){
    d3.select('#donut-segment-2').style("opacity", 1)
    d3.select('#donut-segment-1').style("opacity", 1)
    d3.select('#donut-segment-4').style("opacity", 1)
    d3.select('#donut-segment-5').style("opacity", 1);

    d3.select('#DisplayText').attr("fill", "#6f6282")
})
Target4.addEventListener('mouseout', function(){
    d3.select('#donut-segment-2').style("opacity", 1)
    d3.select('#donut-segment-3').style("opacity", 1)
    d3.select('#donut-segment-1').style("opacity", 1)
    d3.select('#donut-segment-5').style("opacity", 1);

    d3.select('#DisplayText').attr("fill", "#6f6282")
})
Target5.addEventListener('mouseout', function(){
    d3.select('#donut-segment-2').style("opacity", 1)
    d3.select('#donut-segment-3').style("opacity", 1)
    d3.select('#donut-segment-4').style("opacity", 1)
    d3.select('#donut-segment-1').style("opacity", 1);

    d3.select('#DisplayText').attr("fill", "#6f6282")
})

var x = window.matchMedia("(min-width: 700px)")
var y = window.matchMedia('screen and (max-width: 400px)')
Scale(x) // Call listener function at run time
Scale2(y)
x.addListener(Scale) // Attach listener function on state changes
y.addListener(Scale2)

function Scale2(y){
if(y.matches){
    d3.select('#Indext_Circle_1').style("r", "calc(5px + 1vw")
    d3.select('#Indext_Circle_2').style("r", "calc(5px + 1vw")
    d3.select('#Indext_Circle_3').style("r", "calc(5px + 1vw")
    d3.select('#Indext_Circle_4').style("r", "calc(5px + 1vw")
    d3.select('#Indext_Circle_5').style("r", "calc(5px + 1vw")
}
}
function Scale(x) {
  if (x.matches) { // The min-width == 700px
    d3.select('#Indext_Circle_5').style("r", "calc(20px + 1vw")
    d3.select('#Indext_Circle_4').style("r", "calc(20px + 1vw")
    d3.select('#Indext_Circle_3').style("r", "calc(20px + 1vw")
    d3.select('#Indext_Circle_2').style("r", "calc(20px + 1vw")
    d3.select('#Indext_Circle_1').style("r", "calc(20px + 1vw")
    
  }
  else{ //the min-width != 700px
    d3.select('#Indext_Circle_5').style("r", "calc(10px + 1vw")
    d3.select('#Indext_Circle_4').style("r", "calc(10px + 1vw")
    d3.select('#Indext_Circle_3').style("r", "calc(10px + 1vw")
    d3.select('#Indext_Circle_2').style("r", "calc(10px + 1vw")
    d3.select('#Indext_Circle_1').style("r", "calc(10px + 1vw")
   
  }

 
}
