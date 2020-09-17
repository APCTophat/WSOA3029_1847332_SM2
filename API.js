fetch('https://api.covid19api.com/summary') 
.then(response => response.json())             
.then(data => {console.log(data)
    let TotalDeaths = data.Global.TotalDeaths   
    let ClassLengthTotallDeaths = document.getElementsByClassName("ChangingTextDeaths").length;
    for (let i = 0; i < ClassLengthTotallDeaths; i++){
        document.getElementsByClassName("ChangingTextDeaths")[i].innerText = TotalDeaths;   
    }  
    let TotalRecovered = data.Global.TotalRecovered
    document.getElementsByClassName("ChangingTextRecovered")[0].innerText = TotalRecovered
})

let Deaths06_05_2020;
let Deaths06_06_2020;
let Deaths06_07_2020;
let Deaths06_08_2020;
let Deaths06_09_2020;
fetch('https://api.covid19api.com/total/country/south-africa')  
.then(response => response.json())                               
.then(data => {console.log('pcik me',data)                        
    Deaths06_05_2020 = data[105].Deaths
    Deaths06_06_2020 = data[136].Deaths
    Deaths06_07_2020 = data[166].Deaths
    Deaths06_08_2020 = data[197].Deaths
    Deaths06_09_2020 = data[228].Deaths

    let Radius1 = (Deaths06_05_2020 / Deaths06_09_2020) * 20
    let Radius1Name ="calc(10px + "+Radius1+"vw)"
    d3.select('.target0').style("r", Radius1Name)

    let Radius2 = (Deaths06_06_2020 / Deaths06_09_2020) * 20
    let Radius2Name ="calc(10px + "+Radius2+"vw)"
    d3.select('.target1').style("r", Radius2Name) 

    let Radius3 = (Deaths06_07_2020 / Deaths06_09_2020) * 20
    let Radius3Name ="calc(10px + "+Radius3+"vw)"
    d3.select('.target2').style("r", Radius3Name)

    let Radius4 = (Deaths06_08_2020 / Deaths06_09_2020) * 20
    let Radius4Name ="calc(10px + "+Radius4+"vw)"
    d3.select('.target3').style("r", Radius4Name)

    let Radius5 = (Deaths06_09_2020 / Deaths06_09_2020) * 20
    let Radius5Name = "calc(10px + "+Radius5+"vw)"
    d3.select('.target4').style("r", Radius5Name)
});

let Target0 = document.getElementsByClassName("target0")[0];
let Target1 = document.getElementsByClassName("target1")[0];
let Target2 = document.getElementsByClassName("target2")[0];
let Target3 = document.getElementsByClassName("target3")[0];
let Target4 = document.getElementsByClassName("target4")[0];
d3.select('#DisplayValue').attr("fill", "#6f6282")
Target0.addEventListener('mouseover', function(){
    d3.select('.target1').style("opacity", 0.2)
    d3.select('.target2').style("opacity", 0.2)
    d3.select('.target3').style("opacity", 0.2)
    d3.select('.target4').style("opacity", 0.2);

    document.getElementById("DisplayValue").innerHTML = Deaths06_05_2020
    d3.select('#DisplayValue').attr("fill", " #ffc94a")
})
Target0.addEventListener('mouseout', function(){
    d3.select('.target1').style("opacity", 1)
    d3.select('.target2').style("opacity", 1)
    d3.select('.target3').style("opacity", 1)
    d3.select('.target4').style("opacity", 1);

    d3.select('#DisplayValue').attr("fill", "#6f6282")
})

Target1.addEventListener('mouseover', function(){
    d3.select('.target0').style("opacity", 0.2)
    d3.select('.target2').style("opacity", 0.2)
    d3.select('.target3').style("opacity", 0.2)
    d3.select('.target4').style("opacity", 0.2);

    document.getElementById("DisplayValue").innerHTML = Deaths06_06_2020
    d3.select('#DisplayValue').attr("fill", " #ffc94a")
}) 
Target1.addEventListener('mouseout', function(){
    d3.select('.target0').style("opacity", 1)
    d3.select('.target2').style("opacity", 1)
    d3.select('.target3').style("opacity", 1)
    d3.select('.target4').style("opacity", 1);

    d3.select('#DisplayValue').attr("fill", "#6f6282")
})

Target2.addEventListener('mouseover', function(){
    d3.select('.target0').style("opacity", 0.2)
    d3.select('.target1').style("opacity", 0.2)
    d3.select('.target3').style("opacity", 0.2)
    d3.select('.target4').style("opacity", 0.2);

    document.getElementById("DisplayValue").innerHTML = Deaths06_07_2020
    d3.select('#DisplayValue').attr("fill", " #ffc94a")
})
Target2.addEventListener('mouseout', function(){
    d3.select('.target0').style("opacity", 1)
    d3.select('.target1').style("opacity", 1)
    d3.select('.target3').style("opacity", 1)
    d3.select('.target4').style("opacity", 1);

    d3.select('#DisplayValue').attr("fill", "#6f6282")
})

Target3.addEventListener('mouseover', function(){
    d3.select('.target0').style("opacity", 0.2)
    d3.select('.target1').style("opacity", 0.2)
    d3.select('.target2').style("opacity", 0.2)
    d3.select('.target4').style("opacity", 0.2);

    document.getElementById("DisplayValue").innerHTML = Deaths06_08_2020
    d3.select('#DisplayValue').attr("fill", " #ffc94a")
})
Target3.addEventListener('mouseout', function(){
    d3.select('.target0').style("opacity", 1)
    d3.select('.target1').style("opacity", 1)
    d3.select('.target2').style("opacity", 1)
    d3.select('.target4').style("opacity", 1);

    d3.select('#DisplayValue').attr("fill", "#6f6282")
})

Target4.addEventListener('mouseover', function(){
    d3.select('.target0').style("opacity", 0.2)
    d3.select('.target1').style("opacity", 0.2)
    d3.select('.target2').style("opacity", 0.2)
    d3.select('.target3').style("opacity", 0.2);

    document.getElementById("DisplayValue").innerHTML = Deaths06_09_2020
    d3.select('#DisplayValue').attr("fill", " #ffc94a")
})
Target4.addEventListener('mouseout', function(){
    d3.select('.target0').style("opacity", 1)
    d3.select('.target1').style("opacity", 1)
    d3.select('.target2').style("opacity", 1)
    d3.select('.target3').style("opacity", 1);

    d3.select('#DisplayValue').attr("fill", "#6f6282")
})


