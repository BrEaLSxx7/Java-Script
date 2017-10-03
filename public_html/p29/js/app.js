function menu(){
	var men=Number(prompt("selecione una opcion: \n\ 1. agregar un producto \n\ 2. buscar un producto por codigo \n\ 3. buscar un producto por nombre \n\ 0. salir"));
	return men;
}
function add(){
	var flag=1;
	var name, code, price, cont = 0, array=[];
	while(flag===1){
			name=prompt("ingrese el nombre del producto"),
			code=parseInt(prompt("ingrese el codigo del producto")),
			price=prompt("ingrese el precio del producto");
		cont++;

		if (localStorage.getItem('array') === null) {
				array.push({name,code,price});
				localStorage.setItem("array", JSON.stringify(array));
			}else{
				var temp = JSON.parse(localStorage.getItem('array'));
				temp.push({name,code,price});
				localStorage.setItem('array',JSON.stringify(temp));
			}
		flag=Number(prompt("desea agregar otro producto? \n ingrese: \n 1. SI \n 0. NO"));
		//localstorage.setItem("array", JSON.stringify(array));
		
	}
	return array;
}

function searchC(array){
	array = JSON.parse(localStorage.getItem("array"));
	var cont=0;
	var cod=parseInt(prompt("ingrese el codigo a buscar"));
	var objet = '';
	for (let contact of array) {
		// console.log(contact);
		if (contact.code===cod) {
			cont++;
			objet = contact;
		}

	}
	if (cont===0) {
			alert("lo sentimos el producto no se encuentra");
		}else{
			alert("el producto fue encontrado");
			console.log(`${objet.name} -- ${objet.price} -- ${objet.code}`);
		}
 }

function searchN(array){
	var array=JSON.parse(localStorage.getItem("array"));
	var cont=0;
	var objet="";
	var nam=prompt("ingrese el nombre a buscar");
	for (let contact of array) {
		if (nam===contact.name) {
			cont++;
			objet=contact;
		}
	}
	if (cont===0) {
			alert("lo sentimos el producto no se encuentra");
		}else{
			alert("El nombre fue encontrado");
			console.log(objet.name + ' -- ' + objet.price + ' -- ' + objet.code);
		}
}
while(men!==0){
	var men=menu();
	switch(men){
		case 1:
			var products=add();
			//console.log(products);
		break;
		case 2:
			//product=JSON.parse(localStorage.getItem(products));
			searchC(products);
		break;
		case 3:
			//product=JSON.parse(localStorage.getItem(products));
			searchN(products);
		break;
		case 0:
			men=0;
		break;
		default:
			alert("debe ingresar un numero entre 0 y 3");
		break;
	}
} 