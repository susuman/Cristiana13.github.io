
document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.11.20.4";

var canvas = document.getElementBy.Id("id_canvas")
canvas.addEventListener("touchstart",on touch);
var rect=canvas.getBoundingClientRect() ;

function on_touch(e)


e.changedTouches.length
{
for(var i=0; i< e.changedTouches.length; i++)}
var context = canvas.get.Context("2d");
context.beginPath();
context.arc(e.changedTouches.itm(i).pageX - rect.left,
           (e.changedTouches.itm(i).pageY - rect.top,
	20,
	0,22* Math.PI
	);
context.stroke();
}
}
