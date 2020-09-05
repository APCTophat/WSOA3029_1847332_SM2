fetch('https://api.covid19api.com/summary')
.then(response => response.json())
.then(data => {console.log(data.Global)
    let TotalDeaths = data.Global.TotalDeaths
    let ClassLengthTotallDeaths = document.getElementsByClassName("ChangingTextDeaths").length;
    for (let i = 0; i < ClassLengthTotallDeaths; i++){
        document.getElementsByClassName("ChangingTextDeaths")[i].innerText = TotalDeaths;
    }  
    let TotalRecovered = data.Global.TotalRecovered
    document.getElementsByClassName("ChangingTextRecovered")[0].innerText = TotalRecovered
});



