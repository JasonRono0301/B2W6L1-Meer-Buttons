//Lab --> opdracht A. --> 04-01-2021.

var container = document.getElementById('container');
var button1 = document.createElement('button');
var button2 = document.createElement('button');
var button3 = document.createElement('button');
var body = document.getElementsByTagName('body')[0];

container.appendChild(button1);
container.appendChild(button2);
container.appendChild(button3);

button1.addEventListener('click',function(){
    body.style.backgroundColor = "green";
});

button2.addEventListener('click',function(){
    body.style.backgroundColor = "red";
});

button3.addEventListener('click',function(){
    body.style.backgroundColor = "blue";
});

button1.id = "Green";
button1.innerHTML = "Button 1";

button2.id = "red";
button2.innerHTML = "Button 2";

button3.id = "blue";
button3.innerHTML = "Button 3";


