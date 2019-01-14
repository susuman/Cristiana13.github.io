document.getElementById("id_logic_version").innerHTML = 
		"Logic version = 2018.12.04.0";
		
var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch);
canvas.addEventListener("touchmove", on_touch_move);
canvas.addEventListener("touchend", on_touch_end);
document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.10.30.1";
document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.10.30.2";

window.addEventListener("deviceorientation", la_schimbare_gyro);

@@ -8,6 +8,12 @@ document .getElementById("id_x").innerHTMLL= e.beta;
document .getElementById("id_y").innerHTMLL= e.gamma;
document .getElementById("id_z").innerHTMLL= e.alpha;
var rect = canvas.getBoundingClientRect();
//---------------------------------

//var lastX = 0;
//var lastY = 0;


var last_position_array = [];
}
var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");

  context.beginPath();
  context.arc(canvas.width /2, canvas.height/2,30,0,2* Math.PI);
  context.stroke();

}
