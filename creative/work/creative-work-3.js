let Deaths06_06_2020;
let Deaths06_07_2020;
let Deaths06_08_2020;
let Deaths06_09_2020;
let Deaths06_10_2020;
let Deaths06_11_2020;

let Recovered06_06_2020;
let Recovered06_07_2020;
let Recovered06_08_2020;
let Recovered06_09_2020;
let Recovered06_10_2020;
let Recovered06_11_2020;

fetch('https://api.covid19api.com/total/country/south-africa')  
.then(response => response.json())                               
.then(data => {console.log('pcik me',data)                       
    Deaths06_06_2020 = data[136].Deaths
    Deaths06_07_2020 = data[166].Deaths
    Deaths06_08_2020 = data[197].Deaths
    Deaths06_09_2020 = data[228].Deaths
    Deaths06_10_2020 = data[258].Deaths
    Deaths06_11_2020 = data[289].Deaths

    Recovered06_06_2020 = data[136].Recovered
    Recovered06_07_2020 = data[166].Recovered
    Recovered06_08_2020 = data[197].Recovered
    Recovered06_09_2020 = data[228].Recovered
    Recovered06_10_2020 = data[258].Recovered
    Recovered06_11_2020 = data[289].Recovered
    myFunction() 
})

let RecDiff1
let RecDiff2
let RecDiff3
let RecDiff4
let RecDiff5

let DeathDiff1
let DeathDiff2
let DeathDiff3
let DeathDiff4
let DeathDiff5

//These are the deaths relative to 7000
let DeathDiff1PercentageString_1
let DeathDiff2PercentageString_1
let DeathDiff3PercentageString_1
let DeathDiff4PercentageString_1
let DeathDiff5PercentageString_1
//These are the deaths relative to 300000
let DeathDiff1PercentageString_2
let DeathDiff2PercentageString_2
let DeathDiff3PercentageString_2
let DeathDiff4PercentageString_2
let DeathDiff5PercentageString_2
function myFunction(){
    //Work out the difference between the recovered Values
    RecDiff1 = Recovered06_07_2020 - Recovered06_06_2020
    RecDiff2 = Recovered06_08_2020 - Recovered06_07_2020
    RecDiff3 = Recovered06_09_2020 - Recovered06_08_2020
    RecDiff4 = Recovered06_10_2020 - Recovered06_09_2020
    RecDiff5 = Recovered06_11_2020 - Recovered06_10_2020
    //The highest No. is around 290K so I will make the graph max at 300K,
    //((Diff / 300 000) * 100) = Pecentage. THEN Percentage * 0.8 = The percentage to put into the Hight of the Bar. It is Multiplied by 0.8 necasue the graph takes up 80% of the space and not 100%
    let RecDiff1Percentage = ((RecDiff1/300000) * 100) * 0.8;
    let RecDiff1PercentageString = RecDiff1Percentage.toString() + "%";
    d3.select('#RecBar1').style("Height", RecDiff1PercentageString)
    //document.getElementById("RecText1").innerHTML = RecDiff1
    

    let RecDiff2Percentage = ((RecDiff2/300000) * 100 * 0.8);
    let RecDiff2PercentageString = RecDiff2Percentage.toString() + "%";
    d3.select('#RecBar2').style("Height", RecDiff2PercentageString)

    let RecDiff3Percentage = ((RecDiff3/300000) * 100 * 0.8);
    let RecDiff3PercentageString = RecDiff3Percentage.toString() + "%";
    d3.select('#RecBar3').style("Height", RecDiff3PercentageString)

    let RecDiff4Percentage = ((RecDiff4/300000) * 100) * 0.8;
    let RecDiff4PercentageString = RecDiff4Percentage.toString() + "%";
    d3.select('#RecBar4').style("Height", RecDiff4PercentageString)

    let RecDiff5Percentage = ((RecDiff5/300000) * 100) * 0.8;
    let RecDiff5PercentageString = RecDiff5Percentage.toString() + "%";
    d3.select('#RecBar5').style("Height", RecDiff5PercentageString)

    //Work out the difference between the Deaths Values
    DeathDiff1 = Deaths06_07_2020 - Deaths06_06_2020
    DeathDiff2 = Deaths06_08_2020 - Deaths06_07_2020
    DeathDiff3 = Deaths06_09_2020 - Deaths06_08_2020
    DeathDiff4 = Deaths06_10_2020 - Deaths06_09_2020
    DeathDiff5 = Deaths06_11_2020 - Deaths06_10_2020

    //Do the exact same thing except Divide by 6500 to get the two graphs to be roughly in the same ratio and size, however I will clarify with text, it is just meant to be a visual change
    let DeathDiff1Percentage = ((DeathDiff1/7000) * 100) * 0.8;
    DeathDiff1PercentageString_1 = DeathDiff1Percentage.toString() + "%";
    d3.select('#DBar1').style("Height", DeathDiff1PercentageString_1)

    let DeathDiff2Percentage = ((DeathDiff2/7000) * 100) * 0.8;
    DeathDiff2PercentageString_1 = DeathDiff2Percentage.toString() + "%";
    d3.select('#DBar2').style("Height", DeathDiff2PercentageString_1)

    let DeathDiff3Percentage = ((DeathDiff3/7000) * 100) * 0.8;
    DeathDiff3PercentageString_1 = DeathDiff3Percentage.toString() + "%";
    d3.select('#DBar3').style("Height", DeathDiff3PercentageString_1)

    let DeathDiff4Percentage = ((DeathDiff4/7000) * 100) * 0.8;
    DeathDiff4PercentageString_1 = DeathDiff4Percentage.toString() + "%";
    d3.select('#DBar4').style("Height", DeathDiff4PercentageString_1)

    let DeathDiff5Percentage = ((DeathDiff5/7000) * 100) * 0.8;
    DeathDiff5PercentageString_1 = DeathDiff5Percentage.toString() + "%";
    d3.select('#DBar5').style("Height", DeathDiff5PercentageString_1)

    let DeathDiff1Percentage_2 = ((DeathDiff1/300000) * 100) * 0.8;
    DeathDiff1PercentageString_2 = DeathDiff1Percentage_2.toString() + "%";
    let DeathDiff2Percentage_2 = ((DeathDiff1/300000) * 100) * 0.8;
    DeathDiff2PercentageString_2 = DeathDiff2Percentage_2.toString() + "%";
    let DeathDiff3Percentage_2 = ((DeathDiff1/300000) * 100) * 0.8;
    DeathDiff3PercentageString_2 = DeathDiff3Percentage_2.toString() + "%";
    let DeathDiff4Percentage_2 = ((DeathDiff1/300000) * 100) * 0.8;
    DeathDiff4PercentageString_2 = DeathDiff4Percentage_2.toString() + "%";
    let DeathDiff5Percentage_2 = ((DeathDiff1/300000) * 100) * 0.8;
    DeathDiff5PercentageString_2 = DeathDiff5Percentage_2.toString() + "%";


    //Update the Index
    document.getElementById("Death_Index_Value_1").innerHTML = DeathDiff1;
    document.getElementById("Death_Index_Value_2").innerHTML = DeathDiff2;
    document.getElementById("Death_Index_Value_3").innerHTML = DeathDiff3;
    document.getElementById("Death_Index_Value_4").innerHTML = DeathDiff4;
    document.getElementById("Death_Index_Value_5").innerHTML = DeathDiff5;

    document.getElementById("Rec_Index_Value_1").innerHTML = RecDiff1;
    document.getElementById("Rec_Index_Value_2").innerHTML = RecDiff2;
    document.getElementById("Rec_Index_Value_3").innerHTML = RecDiff3;
    document.getElementById("Rec_Index_Value_4").innerHTML = RecDiff4;
    document.getElementById("Rec_Index_Value_5").innerHTML = RecDiff5;

    //To set up the buttons to show what form of the graph is being shown
    d3.select('#RecButton').style("opacity", 1)
    d3.select('#DeathButton').style("opacity", 0.5)
    d3.select('#BothButton').style("opacity", 0.5)
    d3.select('#RecButton').style("stroke-width", 4)
    d3.select('#DeathButton').style("stroke-width", 2)
    d3.select('#BothButton').style("stroke-width", 2)
    //Set up the graph to display the corresponding button
    RecButtonFunction()
}

let RecButton = document.getElementById("RecButton");
let DButton = document.getElementById("DeathButton");
let BothButton = document.getElementById("BothButton");
let RecButtonText = document.getElementById("RecButtonText");
let DButtonText = document.getElementById("DeathButtonText");
let BothButtonText = document.getElementById("BothButtonText");

RecButton.addEventListener('mouseover', function(){
    d3.select('#RecButton').style("opacity", 1)
    d3.select('#DeathButton').style("opacity", 0.5)
    d3.select('#BothButton').style("opacity", 0.5)

    d3.select('#RecButton').style("stroke-width", 4)
    d3.select('#DeathButton').style("stroke-width", 2)
    d3.select('#BothButton').style("stroke-width", 2)
})
DButton.addEventListener('mouseover', function(){
    d3.select('#RecButton').style("opacity", 0.5)
    d3.select('#DeathButton').style("opacity", 1)
    d3.select('#BothButton').style("opacity", 0.5)

    d3.select('#RecButton').style("stroke-width", 2)
    d3.select('#DeathButton').style("stroke-width", 4)
    d3.select('#BothButton').style("stroke-width", 2)
})
BothButton.addEventListener('mouseover', function(){
    d3.select('#RecButton').style("opacity", 0.5)
    d3.select('#DeathButton').style("opacity", 0.5)
    d3.select('#BothButton').style("opacity", 1)

    d3.select('#RecButton').style("stroke-width", 2)
    d3.select('#DeathButton').style("stroke-width", 2)
    d3.select('#BothButton').style("stroke-width", 4)
})

RecButton.addEventListener('click', function(){
    RecButtonFunction()
})
DButton.addEventListener('click', function(){
  DButtonFunction()
})
BothButton.addEventListener('click',function(){
   BothButtonFunction()
})

RecButtonText.addEventListener('click', function(){
    RecButtonFunction()
})
DButtonText.addEventListener('click', function(){
    DButtonFunction()
  })
  BothButtonText.addEventListener('click',function(){
     BothButtonFunction()
  })

function RecButtonFunction(){
    d3.select('#Rec_Index_Circle_1').transition().style("fill", '#ffc94a')
    d3.select('#Rec_Index_Circle_2').transition().style("fill", '#a3803c')
    d3.select('#Rec_Index_Circle_3').transition().style("fill", '#7c6136')
    d3.select('#Rec_Index_Circle_4').transition().style("fill", '#544130')
    d3.select('#Rec_Index_Circle_5').transition().style("fill", '#2d222a')

    d3.select('#DBar1').transition().style("Height", DeathDiff1PercentageString_1).transition().style("fill-opacity", 0.2)
    d3.select('#DBar2').transition().style("Height", DeathDiff2PercentageString_1).transition().style("fill-opacity", 0.2)
    d3.select('#DBar3').transition().style("Height", DeathDiff3PercentageString_1).transition().style("fill-opacity", 0.2)
    d3.select('#DBar4').transition().style("Height", DeathDiff4PercentageString_1).transition().style("fill-opacity", 0.2)
    d3.select('#DBar5').transition().style("Height", DeathDiff5PercentageString_1).transition().style("fill-opacity", 0.2)

    d3.select('#MaxYS').transition().style("opacity", 0.5)
    d3.select('#MinYS').transition().style("opacity", 0.5)
    d3.select('#MaxYB').transition().style("opacity", 1)
    d3.select('#MinYB').transition().style("opacity", 1)

    d3.select('#RecBar1').transition().style("fill-opacity", 1)
    d3.select('#RecBar2').transition().style("fill-opacity", 1)
    d3.select('#RecBar3').transition().style("fill-opacity", 1)
    d3.select('#RecBar4').transition().style("fill-opacity", 1)
    d3.select('#RecBar5').transition().style("fill-opacity", 1)
    //index
    d3.select('#Death_Index_Value_1').transition().style("fill-opacity", 0.5)
    d3.select('#Death_Index_Value_2').transition().style("fill-opacity", 0.5)
    d3.select('#Death_Index_Value_3').transition().style("fill-opacity", 0.5)
    d3.select('#Death_Index_Value_4').transition().style("fill-opacity", 0.5)
    d3.select('#Death_Index_Value_5').transition().style("fill-opacity", 0.5) 
    
    d3.select('#Rec_Index_Value_1').transition().style("fill-opacity", 1)
    d3.select('#Rec_Index_Value_2').transition().style("fill-opacity", 1)
    d3.select('#Rec_Index_Value_3').transition().style("fill-opacity", 1)
    d3.select('#Rec_Index_Value_4').transition().style("fill-opacity", 1)
    d3.select('#Rec_Index_Value_5').transition().style("fill-opacity", 1)
}
function DButtonFunction(){
  //Update the Index Circle
  d3.select('#Rec_Index_Circle_1').transition().style("fill", '#a1a1a1')
  d3.select('#Rec_Index_Circle_2').transition().style("fill", '#a1a1a1')
  d3.select('#Rec_Index_Circle_3').transition().style("fill", '#a1a1a1')
  d3.select('#Rec_Index_Circle_4').transition().style("fill", '#a1a1a1')
  d3.select('#Rec_Index_Circle_5').transition().style("fill", '#a1a1a1')
  //Change the hight of one Bar
  d3.select('#DBar1').transition().style("Height", DeathDiff1PercentageString_1).transition().style("fill-opacity", 1)
  d3.select('#DBar2').transition().style("Height", DeathDiff2PercentageString_1).transition().style("fill-opacity", 1)
  d3.select('#DBar3').transition().style("Height", DeathDiff3PercentageString_1).transition().style("fill-opacity", 1)
  d3.select('#DBar4').transition().style("Height", DeathDiff4PercentageString_1).transition().style("fill-opacity", 1)
  d3.select('#DBar5').transition().style("Height", DeathDiff5PercentageString_1).transition().style("fill-opacity", 1)
  
  //Change the viablility of the Bars 
  d3.select('#RecBar1').transition().style("fill-opacity", 0)
  d3.select('#RecBar2').transition().style("fill-opacity", 0)
  d3.select('#RecBar3').transition().style("fill-opacity", 0)
  d3.select('#RecBar4').transition().style("fill-opacity", 0)
  d3.select('#RecBar5').transition().style("fill-opacity", 0)
//Change the Variables on the Line
  d3.select('#MaxYS').transition().style("opacity", 1)
  d3.select('#MinYS').transition().style("opacity", 1)
  d3.select('#MaxYB').transition().style("opacity", 0)
  d3.select('#MinYB').transition().style("opacity", 0)
  //Index
  d3.select('#Death_Index_Value_1').transition().style("fill-opacity", 1)
  d3.select('#Death_Index_Value_2').transition().style("fill-opacity", 1)
  d3.select('#Death_Index_Value_3').transition().style("fill-opacity", 1)
  d3.select('#Death_Index_Value_4').transition().style("fill-opacity", 1)
  d3.select('#Death_Index_Value_5').transition().style("fill-opacity", 1)

  d3.select('#Rec_Index_Value_1').transition().style("fill-opacity", 0.2)
  d3.select('#Rec_Index_Value_2').transition().style("fill-opacity", 0.2)
  d3.select('#Rec_Index_Value_3').transition().style("fill-opacity", 0.2)
  d3.select('#Rec_Index_Value_4').transition().style("fill-opacity", 0.2)
  d3.select('#Rec_Index_Value_5').transition().style("fill-opacity", 0.2)
}
function BothButtonFunction(){
    d3.select('#Rec_Index_Circle_1').transition().style("fill", '#ffc94a')
    d3.select('#Rec_Index_Circle_2').transition().style("fill", '#a3803c')
    d3.select('#Rec_Index_Circle_3').transition().style("fill", '#7c6136')
    d3.select('#Rec_Index_Circle_4').transition().style("fill", '#544130')
    d3.select('#Rec_Index_Circle_5').transition().style("fill", '#2d222a')

    d3.select('#MaxYS').transition().style("opacity", 0)
    d3.select('#MinYS').transition().style("opacity", 0)
    d3.select('#MaxYB').transition().style("opacity", 1)
    d3.select('#MinYB').transition().style("opacity", 1)

    d3.select('#DBar1').transition().style("fill-opacity", 0.2).transition().style("Height", DeathDiff1PercentageString_2)
    d3.select('#DBar2').transition().style("fill-opacity", 0.2).transition().style("Height", DeathDiff2PercentageString_2)
    d3.select('#DBar3').transition().style("fill-opacity", 0.2).transition().style("Height", DeathDiff3PercentageString_2)
    d3.select('#DBar4').transition().style("fill-opacity", 0.2).transition().style("Height", DeathDiff4PercentageString_2)
    d3.select('#DBar5').transition().style("fill-opacity", 0.2).transition().style("Height", DeathDiff5PercentageString_2)

    d3.select('#RecBar1').transition().style("fill-opacity", 1)
    d3.select('#RecBar2').transition().style("fill-opacity", 1)
    d3.select('#RecBar3').transition().style("fill-opacity", 1)
    d3.select('#RecBar4').transition().style("fill-opacity", 1)
    d3.select('#RecBar5').transition().style("fill-opacity", 1) 
    //changes to the index
    d3.select('#Death_Index_Value_1').transition().style("fill-opacity", 0)
    d3.select('#Death_Index_Value_2').transition().style("fill-opacity", 0)
    d3.select('#Death_Index_Value_3').transition().style("fill-opacity", 0)
    d3.select('#Death_Index_Value_4').transition().style("fill-opacity", 0)
    d3.select('#Death_Index_Value_5').transition().style("fill-opacity", 0)

    d3.select('#Rec_Index_Value_1').transition().style("fill-opacity", 1)
    d3.select('#Rec_Index_Value_2').transition().style("fill-opacity", 1)
    d3.select('#Rec_Index_Value_3').transition().style("fill-opacity", 1)
    d3.select('#Rec_Index_Value_4').transition().style("fill-opacity", 1)
    d3.select('#Rec_Index_Value_5').transition().style("fill-opacity", 1)
}
//Section that manages the IndexScaling and functionality
var x = window.matchMedia("(min-width: 700px)")
var y = window.matchMedia('screen and (max-width: 400px)')
Scale(x) // Call listener function at run time
Scale2(y)
x.addListener(Scale) // Attach listener function on state changes
y.addListener(Scale2)

function Scale2(y){
if(y.matches){
    d3.select('#Rec_Index_Circle_1').style("r", "calc(5px + 1vw")
    d3.select('#Rec_Index_Circle_2').style("r", "calc(5px + 1vw")
    d3.select('#Rec_Index_Circle_3').style("r", "calc(5px + 1vw")
    d3.select('#Rec_Index_Circle_4').style("r", "calc(5px + 1vw")
    d3.select('#Rec_Index_Circle_5').style("r", "calc(5px + 1vw")
}
}
function Scale(x) {
  if (x.matches) { // The min-width == 700px
    d3.select('#Rec_Index_Circle_1').style("r", "calc(15px + 1vw")
    d3.select('#Rec_Index_Circle_2').style("r", "calc(15px + 1vw")
    d3.select('#Rec_Index_Circle_3').style("r", "calc(15px + 1vw")
    d3.select('#Rec_Index_Circle_4').style("r", "calc(15px + 1vw")
    d3.select('#Rec_Index_Circle_5').style("r", "calc(15px + 1vw")
    
  }
  else{ //the min-width != 700px
    d3.select('#Rec_Index_Circle_1').style("r", "calc(10px + 1vw")
    d3.select('#Rec_Index_Circle_2').style("r", "calc(10px + 1vw")
    d3.select('#Rec_Index_Circle_3').style("r", "calc(10px + 1vw")
    d3.select('#Rec_Index_Circle_4').style("r", "calc(10px + 1vw")
    d3.select('#Rec_Index_Circle_5').style("r", "calc(10px + 1vw")
  }
}