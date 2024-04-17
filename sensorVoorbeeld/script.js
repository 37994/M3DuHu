const lightEmels = document.getElementsByClassName("light");
let lights = [false, true, false];

readData("lights.php");

for(let i = 0; i < lights.length; i++) {
    lightEmels[i].addEventListener('click', ()=>{
        lights[i] = !lights[i];
        sendData('lights.php', lights);
    });
}

function readData(url) {
    fetch(url).then(async (response) => {
        let json = await response.json();
        UpdateLightsFromServer(json);
    })
}

function sendData(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async (response) => {
        let json = await response.json();
        UpdateLightsFromServer(json);
    })
}

function UpdateLightsFromServer(json) {
    lights = json;
    //console.log(lights);
    UpdateLightElems(lights);
}

function UpdateLightElems(data) {
    for(let i = 0;i < data.length; i++) {
        if(data[i]) lightEmels[i].style.backgroundColor = 'green';
        else lightEmels[i].style.backgroundColor = 'red';
    }
}