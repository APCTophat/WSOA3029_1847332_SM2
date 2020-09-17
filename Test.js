fetch("https://api.covid19api.com/summary")
.then(response => response.json())  
.then(data => {console.log(data, "HELP")});