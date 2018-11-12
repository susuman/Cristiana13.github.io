# Cristiana13.github.io
Aplicatii web
<DOCTYPE html>

<html>

<head>
<Un >ADN COMPLEX </title>
</head>

<body>
<h1>Prima sectiune</h1>

<pid="id_salut">Salut</p>

<h1> Sectiunea 2</h1>

<img id = "id_img" src = "dog.jpg" alt ='imagine cu un catel">

<button type = "button" onclick="modifica()"> Apasa </button>

<script src = "program.js"></script>

</body>

</html>






function modifica ()
{
document.getElementById("id_salut").innerHTML = "Hello";
document.getElementById("id_img").src = "cat.jpg";
}







var pisica = false;
function modifica ()
{
document.getElementById("id_salut").innerHTML = "Hello";
  
  if (pisica==false){
    document.getElementById("id_img").src = "dog.jpg";
  pisica=true;
}
else{
   document.getElementById("id_img").src = "cat.jpg";
   pisica=false;
}
}

