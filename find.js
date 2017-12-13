var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    return Math.sqrt((x1-x0)**2+(y1-y0)**2);
};


var findIt = function(e) {
    //console.log(e);
    //console.log(e.screenX);
    //console.log(e.screenY);
    //console.log(distance(targetX,targetY,e.screenX,e.screenY));
    var dist = distance(targetX,targetY,e.screenX,e.screenY);
    var shade = 255 - (Math.floor(dist / 256) * 100);
    console.log("dist:" + dist);
    console.log(shade);
    box.style.backgroundColor = "rgb("+shade+","+shade+","+shade+")";
};

/*
your OTHER FXNS

*/
box.addEventListener("mousemove", findIt);
