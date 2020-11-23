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
      let Fatality1 = (Deaths06_07_2020/Confirmed06_07_2020) * 100
      let YAxis1 = (Fatality1/3 * 0.8) * 100
      let YAxis1Name =YAxis1+"%" 
      //Apply to the Emelemt
      d3.select('#CircleJuly').style("r", Radius1Name)
      d3.select('#CircleJuly').style("cy", YAxis1Name)
  
      let Radius2 = (Active06_08_2020 / 150000) * 3
      let Radius2Name ="calc(10px + "+Radius2+"vw)"
      let Fatality2 = (Deaths06_08_2020/Confirmed06_08_2020) * 100
      let YAxis2 = (Fatality2/3 * 0.8) * 100
      let YAxis2Name =YAxis2+"%"   
      d3.select('#CircleAugust').style("r", Radius2Name) 
      d3.select('#CircleAugust').style("cy", YAxis2Name)
  
      let Radius3 = (Active06_09_2020 / 150000) * 3
      let Radius3Name ="calc(10px + "+Radius3+"vw)"
      let Fatality3 = (Deaths06_09_2020/Confirmed06_09_2020) * 100
      let YAxis3 = (Fatality3/3 * 0.8) * 100
      let YAxis3Name =YAxis3+"%"     
      d3.select('#CircleSeptember').style("r", Radius3Name)
      d3.select('#CircleSeptember').style("cy", YAxis3Name)
  
      let Radius4 = (Active06_10_2020 / 150000) * 3
      let Radius4Name ="calc(10px + "+Radius4+"vw)"
      let Fatality4 = (Deaths06_10_2020/Confirmed06_10_2020) * 100
      let YAxis4 = (Fatality4/3 * 0.8) * 100
      let YAxis4Name =YAxis4+"%"    
      d3.select('#CircleOctober').style("r", Radius4Name)
      d3.select('#CircleOctober').style("cy", YAxis4Name)

      let Radius5 = (Active06_11_2020 / 150000) * 3
      let Radius5Name = "calc(10px + "+Radius5+"vw)"
      let Fatality5 = (Deaths06_11_2020/Confirmed06_11_2020) * 100
      let YAxis5 = (Fatality5/3 * 0.8) * 100
      let YAxis5Name =YAxis5+"%"   
      d3.select('#CircleNovember').style("r", Radius5Name)
      d3.select('#CircleNovember').style("cy", YAxis5Name)

      console.log(YAxis1Name, YAxis2Name, YAxis3Name, YAxis4Name, YAxis5Name)
    } else { //The min-width != 700px
      //Work out the Radius
      let Radius1 = (Active06_07_2020 / 150000) * 3
      let Radius1Name ="calc(5px + "+Radius1+"vw)"
      //Work out the YAxis Position
      let Fatality1 = (Deaths06_07_2020/Confirmed06_07_2020) * 100
      let YAxis1 = (Fatality1/3 * 0.8) * 100
      let YAxis1Name =YAxis1+"%" 
      //Apply to the Emelemt
      d3.select('#CircleJuly').style("r", Radius1Name)
      d3.select('#CircleJuly').style("cy", YAxis1Name)
  
      let Radius2 = (Active06_08_2020 / 150000) * 3
      let Radius2Name ="calc(5px + "+Radius2+"vw)"
      let Fatality2 = (Deaths06_08_2020/Confirmed06_08_2020) * 100
      let YAxis2 = (Fatality2/3 * 0.8) * 100
      let YAxis2Name =YAxis2+"%"   
      d3.select('#CircleAugust').style("r", Radius2Name) 
      d3.select('#CircleAugust').style("cy", YAxis2Name)
  
      let Radius3 = (Active06_09_2020 / 150000) * 3
      let Radius3Name ="calc(5px + "+Radius3+"vw)"
      let Fatality3 = (Deaths06_09_2020/Confirmed06_09_2020) * 100
      let YAxis3 = (Fatality3/3 * 0.8) * 100
      let YAxis3Name =YAxis3+"%"     
      d3.select('#CircleSeptember').style("r", Radius3Name)
      d3.select('#CircleSeptember').style("cy", YAxis3Name)
  
      let Radius4 = (Active06_10_2020 / 150000) * 3
      let Radius4Name ="calc(5px + "+Radius4+"vw)"
      let Fatality4 = (Deaths06_10_2020/Confirmed06_10_2020) * 100
      let YAxis4 = (Fatality4/3 * 0.8) * 100
      let YAxis4Name =YAxis4+"%"    
      d3.select('#CircleOctober').style("r", Radius4Name)
      d3.select('#CircleOctober').style("cy", YAxis4Name)

      let Radius5 = (Active06_11_2020 / 150000) * 3
      let Radius5Name = "calc(5px + "+Radius5+"vw)"
      let Fatality5 = (Deaths06_11_2020/Confirmed06_11_2020) * 100
      let YAxis5 = (Fatality5/3 * 0.8) * 100
      let YAxis5Name =YAxis5+"%"   
      d3.select('#CircleNovember').style("r", Radius5Name)
      d3.select('#CircleNovember').style("cy", YAxis5Name)
    }
  }