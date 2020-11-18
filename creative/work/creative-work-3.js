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
    let DeathDiff1PercentageString = DeathDiff1Percentage.toString() + "%";
    d3.select('#DBar1').style("Height", DeathDiff1PercentageString)

    let DeathDiff2Percentage = ((DeathDiff2/7000) * 100) * 0.8;
    let DeathDiff2PercentageString = DeathDiff2Percentage.toString() + "%";
    d3.select('#DBar2').style("Height", DeathDiff2PercentageString)

    let DeathDiff3Percentage = ((DeathDiff3/7000) * 100) * 0.8;
    let DeathDiff3PercentageString = DeathDiff3Percentage.toString() + "%";
    d3.select('#DBar3').style("Height", DeathDiff3PercentageString)

    let DeathDiff4Percentage = ((DeathDiff4/7000) * 100) * 0.8;
    let DeathDiff4PercentageString = DeathDiff4Percentage.toString() + "%";
    d3.select('#DBar4').style("Height", DeathDiff4PercentageString)

    let DeathDiff5Percentage = ((DeathDiff5/7000) * 100) * 0.8;
    let DeathDiff5PercentageString = DeathDiff5Percentage.toString() + "%";
    d3.select('#DBar5').style("Height", DeathDiff5PercentageString)

    console.log("Recovery Total",Recovered06_06_2020 , Recovered06_07_2020, Recovered06_08_2020, Recovered06_09_2020, Recovered06_10_2020, Recovered06_11_2020);
    console.log("Recovery Diff ",RecDiff1, RecDiff2, RecDiff3, RecDiff4, RecDiff5);
    console.log("Deaths Total ",Deaths06_06_2020, Deaths06_07_2020, Deaths06_08_2020, Deaths06_09_2020, Deaths06_10_2020, Deaths06_11_2020);
    console.log("Deaths Difference", DeathDiff1, DeathDiff2, DeathDiff3, DeathDiff4, DeathDiff5);
   
}