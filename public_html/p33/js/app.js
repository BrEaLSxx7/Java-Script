class cv{
	constructor(){
		this._regperso={};
		this._regfamily={};
		this._regjob={};
		this._profilep;
	}
	set regperso(regperson){
		this._regperso=regperson;
	}
	get regperso(){
		return this._regperso;
	}
	set regfamily(regifamily){
		this._regfamily=regifamily;
	}
	get regfamily(){
		return this._regfamily;
	}
	set regjob(regijob){
		this._regjob=regijob;
	}
	get regjob(){
		return this.regjob;
	}
	set profilep(personal){
		this._profilep=personal;
	}
	get profilep(){
		return this._profilep;
	}
	print(){
		console.log("Informacion personal");
		console.log("Nombre: " + this._regperso.name);
		console.log("Apellido: " + this._regperso.lastname);
		console.log("Cedula: " + this._regperso.cc);
		console.log("E-Mail: " + this._regperso.email);
		console.log("Celular: " + this._regperso.cell);
		console.log("Referencia familiar");
		console.log("Nombre: " + this._regfamily.name);
		console.log("Apellido: " + this._regfamily.lastname);
		console.log("Cedula: " + this._regfamily.cc);
		console.log("E-Mail: " + this._regfamily.email);
		console.log("Celular: " + this._regfamily.cell);
		console.log("Referencia laboral");
		console.log("Nombre: " + this._regjob.name);
		console.log("Apellido: " + this._regjob.lastname);
		console.log("Cedula: " + this._regjob.cc);
		console.log("E-Mail: " + this._regjob.email);
		console.log("Celular: " + this._regjob.cell);
		console.log("Perfil profesional");
		console.log(this._profilep);


	}
}


var hj = new cv();
do{
	var x=Number(prompt("Seleccione una opción para ingresar sus datos. \n\ 1. Datos personales \n\ 2. Referencia familiar \n\ 3. Referencia laboral\n\ 4. Descripción de perfil profesional \n\ 5. Imprimir hoja de vida \n\ 0. Salir del programa"));
	switch(x){
		case 1:
			var name=prompt("Ingrese su nombre");
			var lastname=prompt("Ingrese su apellido");
			var cc=prompt("Ingrese su cedula");
			var email=prompt("Ingrese su email");
			var cell=prompt("Ingrese su numero de celular");
			var regperson={
				name,
				lastname,
				cc,
				email,
				cell
			};
			hj.regperso=regperson;
		break;
		case 2:
			var name=prompt("Ingrese el nombre de la persona");
			var lastname=prompt("Ingrese el apellido de la persona");
			var cc=prompt("Ingrese la cedula de la persona");
			var email=prompt("Ingrese el email de la persona");
			var cell=prompt("Ingrese el  numero de celular de la persona");
			regifamily={
				name,
				lastname,
				cc,
				email,
				cell
			};
			hj.regfamily=regifamily;
		break;
		case 3:
			var name=prompt("Ingrese el nombre de la persona");
			var lastname=prompt("Ingrese el apellido de la persona");
			var cc=prompt("Ingrese la cedula de la persona");
			var email=prompt("Ingrese el email de la persona");
			var cell=prompt("Ingrese el  numero de celular de la persona");
			regijob={
				name,
				lastname,
				cc,
				email,
				cell
			};
			hj.regjob=regijob;
		break;
		case 4:
			var personal=prompt("Ingrese su perfil profesional");
			hj.profilep=personal;
		break;
		case 5:
			hj.print();
		break;
		case 0:
			x=0;
		break;
		default:
			alert("Ingreso un numero erroneo por favor digite un numero entre 0 y 5");
		break;
	}
}while(x!==0)