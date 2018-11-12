var cubadn = false;
function modifica ()
{
document.getElementById("id_salut").innerHTML = "Hello";
  
  if (cubadn==false){
    document.getElementById("id_img").src = "cercadn.jpg";
  cubadn=true;
}
else{
   document.getElementById("id_img").src = "cubadn.jpg";
   cubadn=false;
}
}
