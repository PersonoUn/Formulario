// JavaScript Document
//Funcion que genera valores aleatorios
function Valores(){
	var dir = Math.ceil(1 + Math.random() * 2);
	var letra = Math.ceil(1 + Math.random() * 5);
	izqder(dir, "Marquee", "IzqODer");
	estilo(letra, "Marquee", "EstLetra")
}

//Funciones que en base a esos valores aleatorios altera a "Marquee" y lo manda a las etiquetas ocultas
function izqder(val, eti, ocu){
	switch (val){
		case 1: 
			document.getElementById(eti).direction="right"; 
			document.getElementById(ocu).value="Der";
			break;
		case 2: 
			document.getElementById(eti).direction="left"; 
			document.getElementById(ocu).value="Izq";
			break;
	}
}

function estilo(val, eti, ocu){
	switch (val){
		case 1:  
			document.getElementById(ocu).value="Normal";
			break;
		case 2: 
			document.getElementById(eti).style="font-style: italic; border:rgb(111, 228, 189) 3px SOLID"; 
			document.getElementById(ocu).value="Cursiva con borde";
			break;
		case 3: 
			document.getElementById(eti).style="font-weight: bold; border:rgb(111, 228, 189) 3px SOLID"; 
			document.getElementById(ocu).value="Negritas con borde";
			break;
		case 4: 
			document.getElementById(eti).style="font-style: italic"; 
			document.getElementById(ocu).value="Cursiva sin borde";
			break;
		case 5: 
			document.getElementById(eti).style="font-weight: bold"; 
			document.getElementById(ocu).value="Negritas sin borde";
			break;
	}
}