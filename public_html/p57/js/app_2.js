$(() => {
	var registro = {};
	if (sessionStorage.getItem("hipotenusa") !== null) {
		 hipo = sessionStorage.getItem("hipotenusa");
	} else if (localStorage.getItem("hipotenusa") !== null) {
		 hipo = localStorage.getItem("hipotenusa");
	}
	$("#Resultado").html("Para hallar la hipotenusa se eleva el cateto A y el cateto B se suman y a ese resultado se le saca la raiz cuadrada el resultado es  " + hipo);

});