let Active06_07_2020;
let Active06_08_2020;
let Active06_09_2020;
let Active06_10_2020;
let Active06_11_2020;

let Deaths06_07_2020;
let Deaths06_08_2020;
let Deaths06_09_2020;
let Deaths06_10_2020;
let Deaths06_11_2020;

let Confirmed06_07_2020;
let Confirmed06_08_2020;
let Confirmed06_09_2020;
let Confirmed06_10_2020;
let Confirmed06_11_2020;

let Fatality1; 
let Fatality2; 
let Fatality3; 
let Fatality4; 
let Fatality5; 

fetch('https://api.covid19api.com/total/country/south-africa')  
.then(response => response.json())                               
.then(data => {console.log('pcik me',data)  
    Active06_07_2020 = data[166].Active
    Active06_08_2020 = data[197].Active
    Active06_09_2020 = data[228].Active
    Active06_10_2020 = data[258].Active
    Active06_11_2020 = data[289].Active

    Deaths06_07_2020 = data[166].Deaths
    Deaths06_08_2020 = data[197].Deaths
    Deaths06_09_2020 = data[228].Deaths
    Deaths06_10_2020 = data[258].Deaths
    Deaths06_11_2020 = data[289].Deaths

    Confirmed06_07_2020 = data[166].Confirmed
    Confirmed06_08_2020 = data[197].Confirmed
    Confirmed06_09_2020 = data[228].Confirmed
    Confirmed06_10_2020 = data[258].Confirmed
    Confirmed06_11_2020 = data[289].Confirmed

    myFunction(x)
})

var x = window.matchMedia("(min-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x) {
    if (x.matches) { // The min-width == 700px
       //Work out the Radius
      let Radius1 = (Active06_07_2020 / 150000) * 3
      let Radius1Name ="calc(10px + "+Radius1+"vw)"
      //Work out the YAxis Position
      Fatality1 = (Deaths06_07_2020/Confirmed06_07_2020) * 100
      let YAxis1 = ((Fatality1/3 * 0.8) * 100) + 10    //Fatality / the Max Value of  3 * 0.8 to scale it to the graph size of the SVG * 100 to get percentage. Then + 10 to move it up the 10 units to aline with the graph
      let YAxis1Name =YAxis1+"%" 
      //Apply to the Emelemt
      d3.select('#CircleJuly').style("r", Radius1Name)
      d3.select('#CircleJuly').style("cy", YAxis1Name)

      let Radius2 = (Active06_08_2020 / 150000) * 3
      let Radius2Name ="calc(10px + "+Radius2+"vw)"
      Fatality2 = (Deaths06_08_2020/Confirmed06_08_2020) * 100
      let YAxis2 = ((Fatality2/3 * 0.8) * 100) + 10
      let YAxis2Name =YAxis2+"%"   
      d3.select('#CircleAugust').style("r", Radius2Name) 
      d3.select('#CircleAugust').style("cy", YAxis2Name)
  
      let Radius3 = (Active06_09_2020 / 150000) * 3
      let Radius3Name ="calc(10px + "+Radius3+"vw)"
      Fatality3 = (Deaths06_09_2020/Confirmed06_09_2020) * 100
      let YAxis3 = ((Fatality3/3 * 0.8) * 100) + 10
      let YAxis3Name =YAxis3+"%"     
      d3.select('#CircleSeptember').style("r", Radius3Name)
      d3.select('#CircleSeptember').style("cy", YAxis3Name)
  
      let Radius4 = (Active06_10_2020 / 150000) * 3
      let Radius4Name ="calc(10px + "+Radius4+"vw)"
      Fatality4 = (Deaths06_10_2020/Confirmed06_10_2020) * 100
      let YAxis4 = ((Fatality4/3 * 0.8) * 100) + 10
      let YAxis4Name =YAxis4+"%"    
      d3.select('#CircleOctober').style("r", Radius4Name)
      d3.select('#CircleOctober').style("cy", YAxis4Name)

      let Radius5 = (Active06_11_2020 / 150000) * 3
      let Radius5Name = "calc(10px + "+Radius5+"vw)"
      Fatality5 = (Deaths06_11_2020/Confirmed06_11_2020) * 100
      let YAxis5 = ((Fatality5/3 * 0.8) * 100) + 10
      let YAxis5Name =YAxis5+"%"   
      d3.select('#CircleNovember').style("r", Radius5Name)
      d3.select('#CircleNovember').style("cy", YAxis5Name)

    } else { //The min-width != 700px
      //Work out the Radius
      let Radius1 = (Active06_07_2020 / 150000) * 3
      let Radius1Name ="calc(5px + "+Radius1+"vw)"
      //Work out the YAxis Position
      Fatality1 = (Deaths06_07_2020/Confirmed06_07_2020) * 100
      let YAxis1 = ((Fatality1/3 * 0.8) * 100) + 10
      let YAxis1Name =YAxis1+"%" 
      //Apply to the Emelemt
      d3.select('#CircleJuly').style("r", Radius1Name)
      d3.select('#CircleJuly').style("cy", YAxis1Name)
  
      let Radius2 = (Active06_08_2020 / 150000) * 3
      let Radius2Name ="calc(5px + "+Radius2+"vw)"
      Fatality2 = (Deaths06_08_2020/Confirmed06_08_2020) * 100
      let YAxis2 = ((Fatality2/3 * 0.8) * 100) + 10
      let YAxis2Name =YAxis2+"%"   
      d3.select('#CircleAugust').style("r", Radius2Name) 
      d3.select('#CircleAugust').style("cy", YAxis2Name)
  
      let Radius3 = (Active06_09_2020 / 150000) * 3
      let Radius3Name ="calc(5px + "+Radius3+"vw)"
      Fatality3 = (Deaths06_09_2020/Confirmed06_09_2020) * 100
      let YAxis3 = ((Fatality3/3 * 0.8) * 100) + 10
      let YAxis3Name =YAxis3+"%"     
      d3.select('#CircleSeptember').style("r", Radius3Name)
      d3.select('#CircleSeptember').style("cy", YAxis3Name)
  
      let Radius4 = (Active06_10_2020 / 150000) * 3
      let Radius4Name ="calc(5px + "+Radius4+"vw)"
      Fatality4 = (Deaths06_10_2020/Confirmed06_10_2020) * 100
      let YAxis4 = ((Fatality4/3 * 0.8) * 100) + 10
      let YAxis4Name =YAxis4+"%"    
      d3.select('#CircleOctober').style("r", Radius4Name)
      d3.select('#CircleOctober').style("cy", YAxis4Name)

      let Radius5 = (Active06_11_2020 / 150000) * 3
      let Radius5Name = "calc(5px + "+Radius5+"vw)"
      Fatality5 = (Deaths06_11_2020/Confirmed06_11_2020) * 100
      let YAxis5 = ((Fatality5/3 * 0.8) * 100) + 10
      let YAxis5Name =YAxis5+"%"   
      d3.select('#CircleNovember').style("r", Radius5Name)
      d3.select('#CircleNovember').style("cy", YAxis5Name)
    }
  }

  //Update the Index with Interctability
  let DateDisplay = document.getElementById("ChangeDate");
  let ActiveCaseDisplay = document.getElementById("ChangeActive");
  let FatalityRateDisplay = document.getElementById("ChangeRate");

  function DisplayInfo(x,y,z){
    DateDisplay.innerHTML = x
    ActiveCaseDisplay.innerHTML = y
    FatalityRateDisplay.innerHTML = z
  }

  let JulyCircle = document.getElementById("CircleJuly");
  let AugustCircle = document.getElementById("CircleAugust");
  let SeptemberCircle = document.getElementById("CircleSeptember");
  let OctoberCircle = document.getElementById("CircleOctober");
  let NovemberCircle = document.getElementById("CircleNovember");
  
JulyCircle.addEventListener('mouseout', function(){
  d3.select('#CircleJuly').transition().style("fill", '#2d222a')
})
AugustCircle.addEventListener('mouseout', function(){
  d3.select('#CircleAugust').transition().style("fill", '#544130')
})
SeptemberCircle.addEventListener('mouseout', function(){
  d3.select('#CircleSeptember').transition().style("fill", '#7c6136')
})
OctoberCircle.addEventListener('mouseout', function(){
  d3.select('#CircleOctober').transition().style("fill", '#a3803c')
})
NovemberCircle.addEventListener('mouseout', function(){
  d3.select('#CircleNovember').transition().style("fill", '#ffc94a')
})

JulyCircle.addEventListener('mouseover', function(){
    d3.select('#CircleJuly').transition().style("fill", '#ffd980')
    let TheDate = "6th July"
    let TheCase = Active06_07_2020
    let TheFR = Number((Fatality1).toFixed(2))
    DisplayInfo(TheDate,TheCase,TheFR)
})
AugustCircle.addEventListener('mouseover', function(){
  d3.select('#CircleAugust').transition().style("fill", '#ffd980')
  let TheDate = "6th August"
  let TheCase = Active06_08_2020
  let TheFR = Number((Fatality2).toFixed(2))
  DisplayInfo(TheDate,TheCase,TheFR)
})
SeptemberCircle.addEventListener('mouseover', function(){
  d3.select('#CircleSeptember').transition().style("fill", '#ffd980')
  let TheDate = "6th September"
  let TheCase = Active06_09_2020
  let TheFR = Number((Fatality3).toFixed(2))
  DisplayInfo(TheDate,TheCase,TheFR)
})
OctoberCircle.addEventListener('mouseover', function(){
  d3.select('#CircleOctober').transition().style("fill", '#ffd980')
  let TheDate = "6th October"
  let TheCase = Active06_10_2020
  let TheFR = Number((Fatality4).toFixed(2))
  DisplayInfo(TheDate,TheCase,TheFR)
})
NovemberCircle.addEventListener('mouseover', function(){
  d3.select('#CircleNovember').transition().style("fill", '#ffd980')
  let TheDate = "6th November"
  let TheCase = Active06_11_2020
  let TheFR = Number((Fatality5).toFixed(2))
  DisplayInfo(TheDate,TheCase,TheFR)
})


//Section that manages the IndexScaling and functionality
var x = window.matchMedia("(min-width: 700px)")
var y = window.matchMedia('screen and (max-width: 400px)')
Scale(x) // Call listener function at run time
Scale2(y)
x.addListener(Scale) // Attach listener function on state changes
y.addListener(Scale2)

function Scale2(y){
if(y.matches){
  d3.select('#ChangeRate').transition().attr("x", "80%")
  d3.select('#ChangeActive').transition().attr("x", "80%")
 
}
}
function Scale(x) {
  if (x.matches) { // The min-width == 700px
    d3.select('#ChangeRate').transition().attr("x", "75%")
    d3.select('#ChangeActive').transition().attr("x", "75%")
    
  }
  else{ //the min-width != 700px
    d3.select('#ChangeRate').transition().attr("x", "80%")
    d3.select('#ChangeActive').transition().attr("x", "80%")
  }
}