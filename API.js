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
fetch('https://api.covid19api.com/total/country/south-africa')
.then(response => response.json())
.then(data => {console.log('pcik me',data)
    let Deaths06_05_2020 = data[105].Deaths
    document.getElementById("Date1").innerHTML = Deaths06_05_2020

    let Deaths06_06_2020 = data[136].Deaths
    document.getElementById("Date2").innerHTML = Deaths06_06_2020

    let Deaths06_07_2020 = data[166].Deaths
    document.getElementById("Date3").innerHTML = Deaths06_07_2020

    let Deaths06_08_2020 = data[197].Deaths
    document.getElementById("Date4").innerHTML = Deaths06_08_2020

    let Deaths06_09_2020 = data[228].Deaths
    document.getElementById("Date5").innerHTML = Deaths06_09_2020

    let Radius1 = (Deaths06_05_2020 / Deaths06_09_2020) * 5
    let Radius1Name = Radius1+'vw'
    d3.select('.target0').style("r", Radius1Name)

    let Radius2 = (Deaths06_06_2020 / Deaths06_09_2020) * 5
    let Radius2Name = Radius2+'vw'
    d3.select('.target1').style("r", Radius2Name)

    let Radius3 = (Deaths06_07_2020 / Deaths06_09_2020) * 5
    let Radius3Name = Radius3+'vw'
    d3.select('.target2').style("r", Radius3Name)

    let Radius4 = (Deaths06_08_2020 / Deaths06_09_2020) * 5
    let Radius4Name = Radius4+'vw'
    d3.select('.target3').style("r", Radius4Name)

    let Radius5 = (Deaths06_09_2020 / Deaths06_09_2020) * 5
    let Radius5Name = Radius5+'vw'
    d3.select('.target4').style("r", Radius5Name)


});





