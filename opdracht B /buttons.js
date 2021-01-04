//Lab --> Opdracht B --> 04-01-2021.
var container = document.getElementById('container');
i = 0;
for(i=1; i < 31; i++){
    var create = document.createElement('button');
    create.innerHTML = i;
    container.appendChild(create);
}

console.dir(create);
