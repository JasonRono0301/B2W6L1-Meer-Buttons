//Lab --> opdracht A. --> 04-01-2021.

var container = document.getElementById('container');
container.style.backgroundColor = "white";
document.body.style.backgroundColor = "gray";

var color = ['green','red','blue'];

for(i=0; i<3; i++){
    var button = document.createElement('button');
    var text = document.createTextNode("Button" + (i+1));
        button.appendChild(text);
        button.style.backgroundColor = color[i];
        button.onclick = function(){
            colorChange(this.style.backgroundColor);
        };
        container.appendChild(button);
};

function colorChange(background){
    console.dir(background);
        document.body.style.backgroundColor = background;
}
