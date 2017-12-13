var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.floor(Math.random() * boxWidth);
var targetY = Math.floor(Math.random() * boxHeight);


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    return Math.sqrt((x1-x0)**2+(y1-y0)**2);
};


var findIt = function(e) {
    //console.log(e);
    var dist = distance(targetX,targetY,e.clientX,e.clientY);
    var shade = 256 - (Math.floor(dist / 256 * 100));
    console.log("dist:" + dist);
    console.log(shade);
    box.style.backgroundColor = "rgb("+shade+","+shade+",255)";
    //if target found
    if (dist < 15){
	box.style.backgroundColor= "black";
    }
};

box.addEventListener("mousemove", findIt);
