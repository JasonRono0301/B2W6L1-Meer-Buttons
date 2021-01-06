//Lab --> Opdracht C. --> 06-01-2021.

var container = document.getElementById('container');//Variable within the id of the div --> Html file.
    container.style.backgroundColor = "white";
document.body.style.backgroundColor = "gray";

for(i=0; i < 30; i++){//Begin of for loop.
    var button = document.createElement('button');
    var text = document.createTextNode((i+1));
    button.appendChild(text);
    container.appendChild(button);
    button.onclick = function(){
        console.dir(button.style.backgroundColor + count);
        count++;
        console.log(count);
        if(count > 0){
            button.style.backgroundColor = "green";
        if(count > 1){
            button.style.backgroundColor = "red";
            } 
        if(count > 2){
            button.style.backgroundColor = "purple";
            } 
        if(count > 3){
            button.style.backgroundColor = "blue";
            } 
        if(count > 4){
            button.style.backgroundColor = "black";
            } 
        if(count > 5){
            button.style.display = "none";
            }
        } 
    }
}//End of for loop.

var count = 0;