function llenar(){
	var array=[];
	for (var i = 0; i <max ; i++) {
	array[i]=Math.round((Math.random())*100);
}
//console.log(array);
return array;
}

function menu(){
	var men=Number(prompt("Menu:\n\ 1. llenar arreglo \n\ 2. buscar elemento por metodo de busqueda secuencial \n\ 3. aplicar metodo de ordenamiento de burbuja \n\ 4. aplicar metodo de ordenamiento de burbuja bidirecional \n\	5. aplicar metodo de ordenamiento por inserccion \n\ 6. aplicar metodo de ordenamiento por mezcla \n\	7. aplicar metodo de ordenamiento por seleccion \n\	8. imprimir arreglo \n\	0. salir"));
	return men;
}
function search(array){
    var x=0;
	var num=Number(prompt("digite el numero a buscar"));
	for (var i = 0; i < max; i++) {
      if (array[i]===num) {
		alert("El numero " + num + " se encuentra en la posicion " + i);
        x++;
      }
    }
    if (x===0) {
	alert("El numero " + num + " no se encuentra en el arreglo");
	}
}

function bubble(array){
	var n=0;
	var x=0;
	while(x===0){
		x=1;
		for (var i = 0; i <max ; i++) {
		if (array[i]>array[i+1]) {
			n=array[i+1];
			array[i+1]=array[i];
			array[i]=n;
			x=0;
		}
	}
}
  return array;
	//console.log(array);
}

function bubblebi(array){
	var n=0;
	var x=0;
	while(x===0){
		x=1;
		for (var i = 0; i <max ; i++) {
		if (array[i]>array[i+1]) {
			n=array[i+1];
			array[i+1]=array[i];
			array[i]=n;
			x=0;
		}
	}
	for (var i = i; i > max; i--) {
		if (array[i]<array[i-1]) {
			n=array[i-1];
			array[i-1]=array[i];
			array[i]=n;
			x=0;
		}
	}
}
return array;
//console.log(array);
}

function insertion(array){
	var n=0;
	var x;
	for (var i = 0; i < max ; i++) {
		n=array[i];
		var p=i-1;
		while(array[p]>n && p>=0){
			array[p+1]=array[p];
			p=p-1;
		}
		array[p+1]=n;
}
return array;
//console.log(array);
}

function mezcla(array){

}

function selection(array){
	
}

while(men!==0){
	var men=menu();
	switch(men){
		case 1:
		var max=Number(prompt("Ingrese el maximo del arreglo"));
		var arreglo = llenar();
		break;
		case 2:
		search(arreglo);
		break;
		case 3:
		bubble(arreglo);
		break
		case 4:
		bubblebi(arreglo);
		break;
		case 5:
		insertion(arreglo);
		break;
		case 6:
		mezcla(arreglo);
		break;
		case 7:
		selection(arreglo);
		break;
        case 8:
        console.log(arreglo);
        break;
		case 0:
		men=0;
		break;
		default:
		alert("Digite un numero entre 0 y 8");
		break;
	}
}