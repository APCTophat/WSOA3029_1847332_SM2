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

function myFunction(){
    console.log(Recovered06_06_2020 , Recovered06_07_2020, Recovered06_08_2020, Recovered06_09_2020, Recovered06_10_2020, Recovered06_11_2020);
    console.log(Deaths06_06_2020, Deaths06_07_2020, Deaths06_08_2020, Deaths06_09_2020, Deaths06_10_2020, Deaths06_11_2020);
}