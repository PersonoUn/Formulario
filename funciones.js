// JavaScript Document
//Funcion que genera un valor aleatorio
function Direccion(){
	var dir = Math.ceil(1 + Math.random() * 2);
	izqder(dir, "Marquee", "IzqODer");
}

//Funcion que en base a ese valor aleatorio asigna una dirreccion a "Marquee" y lo manda a "IzqODer" (etiqueta oculta para ver si la respuesta fue correcta)
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