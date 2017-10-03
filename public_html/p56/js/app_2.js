$(() => {
	var registro = {};
	if (sessionStorage.getItem("registro personas") !== null) {
		 registro = JSON.parse(sessionStorage.getItem("registro personas"));
	} else if (localStorage.getItem("registro personas") !== null) {
		 registro = JSON.parse(localStorage.getItem("registro personas"));
	}
	$("#nombre").html("Nombre del empleado " + registro.name);
	$("#salariob").html("Salario base del empleado " + registro.salario);
	$("#dias").html("Dias trabajados por el empleado " + registro.dias);
	$("#salariot").html("Salario total a pagar " + registro.salariototal);
});