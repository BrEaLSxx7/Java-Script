//funcion de seleccion de idioma
function language (){
	var idiom=Number(prompt("Configuracion del software de nomina \n\ Selecione el idioma del software \n\ 1. Español \n\ 2. English \n\ 0. Salir del programa \n\ Selecione una opcion: "));
	return idiom;
}

//funcion de configuracion
function config(){
	var conf=Number(prompt("Configuracion del software de nomina \n\ 1. Selecione idioma \n\ 2. Configurar \n\ 3. continuar \n\ 0. Salir del programa \n\ Selecione una opcion:"));
	return conf;
}


//funcion para agregar empleados
function employee(){
	var array=JSON.parse(localStorage.getItem("arr30"));
	var aemploye=[];
	var cc, nameem, surname, salary, position, salaryt;
	do{
		aemploye=JSON.parse(localStorage.getItem("employe"));
		if (aemploye === null)  {
			aemploye=[];
		}
		var employees=Number(prompt("Software de nomina \n\ 1. Agregar \n\ 2. Modificar \n\ 3. Eliminar \n\ 4. Volver \n\ 0. Salir"));
	switch(employees){
		case 1:
		nameem=prompt("Ingrese el nombre del empleado");
		surname=prompt("Ingrese el apellido del empleado");
		cc=Number(prompt("Ingrese la cedula del empleado"));
		if(aemploye !== null) {
			for (i=0; i<aemploye.length;i++) {
				if (aemploye[i].cc===cc) {
					alert("La cedula ingresada ya se encuentra en nuestra base de datos por favor ingrese otra");
					cc=Number(prompt("Ingrese la cedula del empleado"));
				}
			}
		}
		position=prompt("Ingrese el cargo del empleado");
		salary=prompt("Ingrese el salario del empleado");
			if (salary<array[1].salamin) {
				alert("Error usted ah ingresado un valor menor al del salario minimo, por favor ingrese un valor valido");
				salary=prompt("Ingrese el salario del empleado");
			}
		if (localStorage.getItem("employe") === null) {
			//console.log(aemploye);
			aemploye.push({nameem,surname,cc,position,salary, salaryt});
			localStorage.setItem("employe",JSON.stringify(aemploye));
		}else{
		var temp=JSON.parse(localStorage.getItem("employe"));
		temp.push({nameem,surname,cc,position,salary, salaryt});
		localStorage.setItem("employe",JSON.stringify(temp));
		}
		//console.log(temp);
		break;
		case 2:
		var objec="";
		var cont=0;
		var modif=Number(prompt("Ingrese el numero de cedula del empleado que desea Modificar"));
		for(i=0; i<aemploye.length;i++){
			//console.log(aemploye[i].cc);
			if (aemploye[i].cc===modif) {
				cont++;
				var x=i;
				objec=aemploye[i];
			}
		}
		if (cont===1) {
			console.log(objec);
			var n=Number(prompt("¿Que elemento desea Modificar \n\ ingrese: \n\ 1. Nombre \n\ 2. Apellido \n\ 3. Cedula \n\ 4. Cargo"));
			switch(n){
				case 1:
				aemploye[x].nameem=prompt("Digite el nuevo nombre");
				break;
				case 2:
				aemploye[x].surname=prompt("Digite el nuevo apellido");
				break;
				case 3:
				aemploye[x].cc=Number(prompt("Digite el nuevo numero de cedula"));
				break;
				case 4:
				aemploye[x].cargo=prompt("Digite el nuevo cargo");
				break;
				default:
				alert("Lo sentimos esa no es una opcion por favor digite un numero entre 0 y 4");
				break;
			}
			localStorage.setItem("employe",JSON.stringify(aemploye));
			}else{
				alert("El numero de cedula que ingreso no es correcto");
			}
		break;
		case 3:
		var object="";
		var conta=0;
		var delet=Number(prompt("Ingrese el numero de la cedula del empleado que desea eliminar"));
		for (var i = 0; i < aemploye.length; i++) {
			if (aemploye[i].cc===delet) {
				conta++;
				x=i;
				object=aemploye[x];
			}
		}
		if (conta===1) {
			console.log(object);
			var next=confirm("Desea eliminar al empelado " + aemploye[x].nameem + " Cedula de ciudadania numero: " + aemploye[x].cc);
			if (next) {
			aemploye[x]=aemploye[0];
			aemploye[0]=object;

			aemploye.shift();
			alert("El empleado fue eliminado con exito");
			//delete aemploye[x];
			localStorage.setItem("employe",JSON.stringify(aemploye));
		}
		}else{
			alert("El numero de cedula ingresado no es correcto");
		}
		break;
		case 4:
		continu();
		employees=0;
		break;
		case 0:
		employees= 0;
		alert("Gracias por usar nuestro software Somos tecnicamente mejores");
		localStorage.setItem("salir", JSON.stringify(employees));
		break;
		default:
		alert("Lo sentimos esa no es una opcion por favor digite un numero entre 0 y 4");
		employee();
		break;
	}
	}while(employees!==0)
	return aemploye;
}

function hours(){
	var cont=0;
	var conta=0;
	var array=JSON.parse(localStorage.getItem("arr30"));
	var aemploye=JSON.parse(localStorage.getItem("employe"));
	var regemp=Number(prompt("Ingrese el numero de cedula del empleado al cual desea registrar las horas"));
	var reghour=[];
	reghour=JSON.parse(localStorage.getItem("registro horas"));
	if (reghour===null) {
		reghour=[];
	}
	for (var i = 0; i <= aemploye.length-1; i++) {
		if (regemp===aemploye[i].cc) {
			var x=i;
			cont++;
			var objec=aemploye[x];
		}
	}
	if (cont===1) {
		console.log(objec);
		valhour=aemploye[x].salary/array[6].hourl;
		var id=regemp;
		var cont=0;
		var hourday=Number(prompt("Ingrese el numero de horas diurnas"));
		var hournigh=Number(prompt("Ingrese el numero de horas nocturnas"));
		var hourdomday=Number(prompt("Ingrese el numero de horas dominicales diurnas"));
		var hourdomnigh=Number(prompt("Ingrese el numero de horas dominicales nocturnas"));
		var hourextraday=Number(prompt("Ingrese el numero de horas extras diurnas"));
		var hourextranigh=Number(prompt("Ingrese el numero de horas extras nocturnas"));
		var hourextradomday=Number(prompt("Ingrese el numero de horas extras dominicales diurnas"));
		var hourextradomnigh=Number(prompt("Ingrese el numero de horas extras dominicales nocturnas"));
		
		if(localStorage.getItem("registro horas")===null){
			reghour.push({hourday,hournigh,hourdomday,hourdomnigh,hourextraday,hourextranigh,hourextradomday,hourextradomnigh,id,valhour});
			localStorage.setItem("registro horas",JSON.stringify(reghour));
			console.log(reghour);
		}else{
				for (var i =0; i < reghour.length; i++){
					if (id===reghour[i].id) {
						conta++;
						var object=reghour[i];
						var j=i;
					}
				}
				console.log(conta);
				if (conta===0) {
					var temp=JSON.parse(localStorage.getItem("registro horas"));
			temp.push({hourday,hournigh,hourdomday,hourdomnigh,hourextraday,hourextranigh,hourextradomday,hourextradomnigh,id,valhour});
			localStorage.setItem("registro horas",JSON.stringify(temp));
			console.log(temp);
		}else if (conta!==0) {
			reghour[j]={hourday,hournigh,hourdomday,hourdomnigh,hourextraday,hourextranigh,hourextradomday,hourextradomnigh,id,valhour};
			localStorage.setItem("registro horas",JSON.stringify(reghour));

		}
				}
		
}else{
	alert("El numero de cedula no se encuentra en la base de datos");
}
return reghour;
}

function Roster(){
var n=0;
var x=0;
var valhourday=0;
var valhournigh=0;
var valhourdomday=0;
var valhourdomnigh=0;
var valhourextraday=0;
var valhourextranigh=0;
var valhourextradomday=0;
var valhourextradomnigh=0;
var salaryp=0;
var reghour=JSON.parse(localStorage.getItem("registro horas"));
var array=JSON.parse(localStorage.getItem("arr30"));
var aemploye=JSON.parse(localStorage.getItem("employe"));
console.log(reghour);
	for(var i=0;i<aemploye.length;i++){
		for(var j=0;j<reghour.length;j++){
				if (aemploye[i].cc===reghour[j].id){
									 valhourday=(reghour[j].valhour*1);
									 valhournigh=(reghour[j].valhour*1.35);
									 valhourdomday=(reghour[j].valhour*1.75);
									 valhourdomnigh=(reghour[j].valhour*1.10);
									 valhourextraday=(reghour[j].valhour*1.25);
									 valhourextranigh=(reghour[j].valhour*1.75);
									 valhourextradomday=(reghour[j].valhour*2);
									 valhourextradomnigh=(reghour[j].valhour*2.50);
									 salaryp=((valhourday*reghour[j].hourday)+(valhournigh*reghour[j].hournigh)+(valhourdomday*reghour[j].hourdomday)+(valhourdomnigh*reghour[j].hourdomnigh)+(valhourextraday*reghour[j].hourextraday)+(valhourextranigh*reghour[j].hourextranigh)+(valhourextradomday*reghour[j].hourextradomday)+(valhourextradomnigh*reghour[j].hourextradomnigh));
									if ((aemploye[i].salary<=(array[4].aux)*array[1].salamin) && (salaryp<=(array[4].aux)*array[1].salamin)) {
										aemploye[i].salaryt=salaryp+array[5].cuaaux;
									}
									if ((aemploye[i].salary>=(array[2].rete)*array[1].salamin) && (salaryp>=(array[2].rete)*array[1].salamin)) {
										aemploye[i].salaryt=salaryp-((array[3].porcrete/100)*salaryp);
									}
									if ((aemploye[i].salary<=array[1].salamin) && salaryp<=array[1].salamin) {
										aemploye[i].salaryt=salaryp+(array[1].salamin*0.20)+(array[5].cuaaux);
									}
									if((aemploye[i].salary>(array[4].aux)*array[1].salamin) && (salaryp<(array[2].rete)*array[1].salamin)){
										aemploye[i].salaryt=salaryp;
									}
                                    localStorage.setItem("employe",JSON.stringify(aemploye));
								}
				}
			}
			var fecha=prompt("ingrese el año y mes actual  mm/aaaa");
			localStorage.setItem("fecha", JSON.stringify(fecha));
            console.log(fecha);
            aemploye.forEach((e)=>{
              console.log(e.cc + "  " + e.position + "    " + e.salaryt);
            });
		
//console.log(aemploye);
}
//funcion de configuracion de nomina
function continu(){
	//console.log(array);
	do{
	var nomina=Number(prompt("Software de nomina \n\ 1. Gestion de empleados \n\ 2. Registrar horas laboradas \n\ 3. Generar nomina \n\ 4. Imprimir comprabante de pago \n\ 0. Salir del programa \n\ Selecione una opcion:"));
	switch(nomina){
		case 1:
		employee();
		var x=Number(JSON.parse(localStorage.getItem("salir")));
		console.log(x);
		if (x===0) {
			nomina=0;
		}
		break;
		case 2:
		hours();
		break;
		case 3:
		Roster();
		break;
		case 4:
		break;
		case 0:
		conti= 0;
		alert("Gracias por usar nuestro software Somos tecnicamente mejores");
		break;
		default:
		alert("Lo sentimos esa no es una opcion por favor digite un numero entre 0 y 4");
		continu();
		break;
	}
	}while(nomina!==0)
}


//funcion para la configuracion del software
function configuration(){
		var name, salamin, rete, porcrete, aux, cuaaux, hourl, array=[];
		do{
		var configu=Number(prompt("Configuracion del software de nomina \n\ 1. Nombre de la empresa \n\ 2. Salario minimo \n\ 3. A partir de cuantos Salarios minimos se cobra retencion en la fuente \n\ 4. Porcentaje de retencion en la fuente \n\ 5. Hasta cuantos salarios minimos son necesarios para pagar el auxilio de transporte \n\ 6. Cuanto es el auxilio de transporte \n\ 7. Cantidad de horas laborables al mes \n\ 8. volver \n\ 0. Salir del programa \n\ Selecione una opcion:"));
		switch(configu){
			case 1:
				name=prompt("Ingrese el numero de la empresa");
			break;
			case 2:
				salamin=Number(prompt("Ingese el salario minimo legal vigente"));
			break;
			case 3:
				rete=Number(prompt("Ingrese a partir de cuantos salarios minimos se deba hacer retencion a la fuente"));
			break;
			case 4:
				porcrete=Number(prompt("Ingrese el porcentaje de retencion en la fuente"));
			break;
			case 5:
				aux=Number(prompt("Ingrese hasta cuantos salarios minimos se debe otorgar el auxilio de transporte"));
			break;
			case 6:
				cuaaux=Number(prompt("Ingrese cuanto es el auxilio de transporte"));
			break;
			case 7:
				hourl=Number(prompt("Ingrese la cantidad de horas laborables al mes"));
			break;
			case 8:
			validateconfig();
			configu= 0;
			break;
			case 0:
			alert("Gracias por usar nuestro software Somos tecnicamente mejores");
			configu= 0;
			return;
			break;
		}
			if (configu===1) {
				array.push({name});
		localStorage.setItem("arr30",JSON.stringify(array));
			}
			if (configu===2) {
				array.push({salamin});
		localStorage.setItem("arr30",JSON.stringify(array));
			}
			if (configu===3) {
				array.push({rete});
		localStorage.setItem("arr30",JSON.stringify(array));
			}
			if (configu===4) {
				array.push({porcrete});
		localStorage.setItem("arr30",JSON.stringify(array));
			}
			if (configu===5) {
				array.push({aux});
		localStorage.setItem("arr30",JSON.stringify(array));
			}
			if (configu===6) {
				array.push({cuaaux});
		localStorage.setItem("arr30",JSON.stringify(array));
			}
			if (configu===7) {
				array.push({hourl});
		localStorage.setItem("arr30",JSON.stringify(array));
			}

	}while(configu!==0);
	
		return array;
	}
	//if (configu===0) {
		
	//}

//funcion para validar los datos de la configuracion
function validateconfig(){
			var confi=config();
			switch(confi){
				case 1:
				validateidiom();
				break;
				case 2:
				configuration();
				break;
				case 3:
				continu();
				break;
				case 0:
				confi=0;
				idio=0;
				alert("Gracias por usar nuestro software Somos tecnicamente mejores");
				break;
				default:
				alert("Lo sentimos esa no es una opcion por favor digite un numero entre 0 y 3");
				validateconfig();
				break;
			}
}


//funcion donde se valida el idioma del software
function validateidiom(){
	var idio=language();
	switch(idio){
		case 1:
		validateconfig();
		break;
		case 2:
		break;
		case 0:
		alert("Gracias por usar nuestro software Somos tecnicamente mejores");
		idio=0;
		break;
		default:
		alert("Lo sentimos esa no es una opcion por favor digite un numero entre 0 y 2");
		validateidiom();
		break;
	}
}




//inicio del programa
var x=validateidiom();