class op{
	constructor(){
		this._sum;
		this._num;
		this._rest;
		this._mult;
		this._divi
	}
	set num(numbers){
		this._num=numbers;
	}
	get number1(){
		return this._num;
	}
	set sum(numbers){
		this._sum = this._num[0]+this._num[1];
	}
	get sum(){
		return this._sum;
	}
	set rest(numbers){
		this._rest=this._num[0]-this._num[1];
	}
	get rest(){
		return this._rest;
	}
	set mult(numbers){
		this._mult=this._num[0]*this._num[1];
	}
	get mult(){
		return this._mult;
	}
	set divi(numbers){
		this._divi=this._num[0]/this._num[1];
	}
	get divi(){
		return this._divi
	}
}

var number = new op();
do{
	var menu=Number(prompt("1. Realizar una suma \n\ 2. Realizar una resta \n\ 3. Realizar una multiplicacion \n\ 4. Realizar una division \n\ 0. Salir "));
	switch(menu){
		case 1:
			num1=Number(prompt("Ingrese un numero"));
			num2=Number(prompt("Ingrese otro numero"));
			numbers=[num1,num2]
			number.num=numbers;
			number.sum=number.num;
			console.log("La suma es: " + number.sum);
		break;
		case 2:
			num1=Number(prompt("Ingrese un numero"));
			num2=Number(prompt("Ingrese otro numero"));
			numbers=[num1,num2]
			number.num=numbers;
			number.rest=number.num;
			console.log("La resta es: " + number.rest);
		break;
		case 3:
			num1=Number(prompt("Ingrese un numero"));
			num2=Number(prompt("Ingrese otro numero"));
			numbers=[num1,num2]
			number.num=numbers;
			number.mult=number.num;
			console.log("La multiplicacion es: " + number.mult);
		break;
		case 4:
			num1=Number(prompt("Ingrese un numero"));
			num2=Number(prompt("Ingrese otro numero"));
			numbers=[num1,num2]
			number.num=numbers;
			number.divi=number.num;
			console.log("La division es: " + number.divi);
		break;
		case 0:
			alert("Gracias por usar nuestro software");
			menu=0;
		break;
		default:
			alert("Ingrese un numero entre 0 y 4");
		break;
	}
}while(menu!==0)
