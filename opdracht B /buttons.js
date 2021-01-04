//Lab --> Opdracht B --> 04-01-2021.
var container = document.getElementById('container');
for(i=0; i < 31; i++){
    var create = document.createElement('button');
    create.innerHTML = i;
    create.id = i;
    container.appendChild(create);
}

console.dir(create);