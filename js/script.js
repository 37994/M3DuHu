//tijd

let nu = new Date();
const dagen = ["Zo", "Ma", "Di", "Wo", "Donderdag", "Vr", "Za"];
const dagVdWeek = dagen[nu.getDay()];
const morgen = dagen[nu.getDay()+1];
const overmorgen = dagen[nu.getDay()+2];
const gisteren = dagen[nu.getDay()-1];

document.getElementById("js--tijd").innerText = new Date().toDateString();
document.getElementById("vandaag--js").innerText = dagVdWeek;
document.getElementById("morgen--js").innerText = morgen;
document.getElementById("overmorgen--js").innerText = overmorgen;
document.getElementById("gisteren--js").innerText = gisteren;






//chart

const linechart = document.getElementById("js--energieChart");
const donutchart = document.getElementById("js--zonnenChart");
const binnenBuitenChart = document.getElementById("binnenBuitenChart--js");


data = {

    linechart:data = {
        labels: ["Jan", "Feb", "Mrt", "Apr"],
        datasets: [{
            label: "KwH",
            data: [17, 14, 15, 12, 20, 10],
            backgroundColor: [
                "rgb(255, 187, 92)",
                "rgb(255, 155, 80)",
                "rgb(226, 94, 62)",
                "rgb(198, 61, 47)",
    
            ]
        }],

    },

    donutchart:data = {
        labels: ["Jan", "Feb", "Mrt", "Apr", "mei", "jun", "jul", "aug", "sep", "sep", "okt", "nov", "dec"],
        datasets: [{
            labels: "sun",
            label: "%",
            data: [3, 5, 8, 12, 13, 13, 13,11, 11 ,10, 7, 3, 2],
            backgroundColor: [
                "rgb(255, 187, 92)",
                "rgb(255, 155, 80)",
                "rgb(226, 94, 62)",
                "rgb(198, 61, 47)",
    
            ]
        }],
    },

    binnenBuitenChart:data = {
        labels: ["1","2","3","4","5","6","7","8","9","10","11","12"],
        datasets: [{
            label: "Buitentemperatuur",
            data: [7, 8, 7, 6, 7, 9, 10, 11, 14, 14, 13, 14],
            backgroundColor: [
                "rgb(30,144,255)"
            ],
            tension: 0.5,
            borderColor:[
                "rgb(25,25,112)"
            ],
        },{
            label: "Binnentemperatuur",
            data: [20, 20, 21, 19, 18, 20, 18, 19, 21, 20, 20, 19],
            backgroundColor: [
                "rgb(139,0,0)",
            ],
            tension: 0.5,
            borderColor:[
                "rgb(220,20,60)"
            ],
        }],
    }
    
}

config = {
    linechart: {
        type: "line",
        data: data.linechart,
        options: {
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Energieverbruik'
                },
                legend: {
                    display: false
                }
            }
        }
    },

    donutchart: {
        type: "bar",
        data: data.donutchart,
        options: {
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Opbrengst van zonnepanelen' },
                legend: {
                    display: false
                }
            }
        }
    },

    binnenBuitenChart: {
        type: "line",
        data: data.binnenBuitenChart,
        options: {
            scales: {
                y: {
                    title:{
                        display: true,
                        text: 'Temperatuur in C'
                    }
                },
                x:  {
                    title:{
                        display: true,
                        text: 'Uurtijd'
                    }
                }
            },
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Binen & Buiten Temperatuur'
                },
                legend: {
                    display: false
                }
            }
        }
    }
}


myChart = new Chart(linechart, config.linechart);
myChart = new Chart(donutchart, config.donutchart)
myChart = new Chart(binnenBuitenChart, config.binnenBuitenChart)

//chart zonnen



//lampen

const spanVanDoos3 = document.getElementById("spanVanDoos3");
const doos3Button1 = document.getElementById("js--tijdButton1");
const doos3Button2 = document.getElementById("js--tijdButton2");
const doos3Button3 = document.getElementById("js--tijdButton3");
const doos3Button4 = document.getElementById("js--tijdButton4");
const doos3Button5 = document.getElementById("js--tijdButton5");
const doos3Button6 = document.getElementById("js--tijdButton6");


doos3Button1.onclick = function() {
    spanVanDoos3.innerText = "12:00";
};

doos3Button2.onclick = function() {
    spanVanDoos3.innerText = "13:00";
};

doos3Button3.onclick = function() {
    spanVanDoos3.innerText = "14:00";
};

doos3Button4.onclick = function() {
    spanVanDoos3.innerText = "15:00";
};

doos3Button5.onclick = function() {
    spanVanDoos3.innerText = "16:00";
};

doos3Button6.onclick = function() {
    spanVanDoos3.innerText = "17:00";
};

const zonOpkomst = document.getElementById("js--opkomst");
const zonOndergang = document.getElementById("js--ondergang");
const graden = document.getElementById("js--graden");
const lowTemp = document.getElementById("lowTemp--js");
const maxTemp = document.getElementById("maxTemp--js");
const morgenMaxtemp = document.getElementById("morgenDag--js");
const morgenLowtemp = document.getElementById("morgenNacht--js");
const overmorgenMax = document.getElementById("overmorgenDag--js");
const overmorgenLow = document.getElementById("overmorgenNacht--js");
const natweeDagenmin = document.getElementById("natweeDagenmin--js");
const natweeDagenmax = document.getElementById("natweeDagenmax--js");
const nadrieDagenmin = document.getElementById("nadrieDagenmin--js");
const nadrieDagenmax = document.getElementById("nadrieDagenmax--js");


function liveData(){
    fetch("https://weerlive.nl/api/weerlive_api_v2.php?key=demo&locatie=Amsterdam")
        .then(res => res.json())
        .then(function(realData){
            zonOpkomst.innerText = realData.liveweer[0].sup;
            zonOndergang.innerText = realData.liveweer[0].sunder;
            graden.innerText = realData.liveweer[0].temp;
            lowTemp.innerText = realData.wk_verw[0].min_temp + " °C";
            maxTemp.innerText = realData.wk_verw[0].max_temp + " °C";
            morgenLowtemp.innerText = realData.wk_verw[1].min_temp;
            morgenMaxtemp.innerText = realData.wk_verw[1].max_temp;
            overmorgenMax.innerText = realData.wk_verw[2].max_temp;
            overmorgenLow.innerText = realData.wk_verw[2].min_temp;
            natweeDagenmax.innerText = realData.wk_verw[3].max_temp;
            natweeDagenmin.innerText = realData.wk_verw[3].min_temp;
            nadrieDagenmax.innerText = realData.wk_verw[4].max_temp;
            nadrieDagenmin.innerText = realData.wk_verw[4].min_temp;
        })
        
};

liveData();

// Arduino
async function sendData(url, data) {
    const response = await fetch(url, data ? {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    } : null);
    return await response.json();
}

// lights
(async function() {
    let lights = await sendData("lights.php");
    const lampen = document.getElementsByClassName('lampen1');

    for (let i = 0; i < lampen.length; i++) {
        const img = lampen[i].querySelector('img');
        const slider = lampen[i].querySelector('.slider');

        // hoofdpijn :(
        img.src = lights[i] ? "images/lamp-aan.png" : "images/lamp-uit.png";
        slider.checked = lights[i];

        slider.addEventListener('change', async () => {
            lights[i] = slider.checked;
            img.src = lights[i] ? "images/lamp-aan.png" : "images/lamp-uit.png";

            lights = await sendData('lights.php', lights);
            slider.checked = lights[i];
        });
    }
})();

//doos 7

//dropdown
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


const tempBtn = document.getElementById("tempBtn");
const tempText = document.getElementById("tempText");
let clicked = false;

tempBtn.onclick = function(){
    if(clicked === false){
        let randomNumber = Math.floor((Math.random() * 3)+ 18);
        if(randomNumber >= 15){
           tempText.innerText = randomNumber + " °C";
        }
        else{
            console.log(Error);
        }
    }
}