var canvas=document.getElementById("myCanvas");
var contexto=canvas.getContext("2d");

contexto.beginPath();
contexto.strokeStyle ="gray";
contexto.lineWidth = 1;
contexto.rect(150, 143, 400, 430, 200);
contexto.stroke(); 

contexto.beginPath();
contexto.strokeStyle = "blue";
contexto.lineWidth = 3;
contexto.arc(300, 300, 30, 0, 360);
contexto.stroke(); 

contexto.beginPath();
contexto.strokeStyle = "black";
contexto.lineWidth = 3;
contexto.arc(350, 300, 30, 0, 360);
contexto.stroke(); 

contexto.beginPath();
contexto.strokeStyle = "red";
contexto.lineWidth = 3;
contexto.arc(400, 300, 30, 0, 360);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle = "yellow";
contexto.lineWidth = 3;
contexto.arc(325, 335, 30, 0, 360);
contexto.stroke(); 

contexto.beginPath();
contexto.strokeStyle = "green";
contexto.lineWidth = 3;
contexto.arc(375, 335, 30, 0, 360);
contexto.stroke(); 