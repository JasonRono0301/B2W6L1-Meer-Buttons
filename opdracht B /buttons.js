//Lab --> Opdracht B --> 04-01-2021.
var container = document.getElementById('container');//Variabele with the div element id.
container.style.backgroundColor = "white";
document.body.style.backgroundColor = "gray";

for(i=0; i < 30; i++){
    var button = document.createElement('button');
    var text = document.createTextNode((i+1));
        button.style.backgroundColor = "green";
        button.appendChild(text);
        button.onclick = function(){
            this.style.backgroundColor = "red";
        }  

    container.appendChild(button);//Appereance the buttons in the div element.
}

