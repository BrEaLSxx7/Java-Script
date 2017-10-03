var array=[];
var arrayPrime=[];
var arraypair=[];
var sumprime=0;
var sumpair=0;
var promprime=0;
var prompair=0;
var contprime=0;
var contpair=0;
var prime=0;

for (var i = 0; i <=9; i++) {
	array[i]=Number(prompt("Escriba el numero"));
	
}
console.log(array);
i=0;

while(i<=9){
	
    
	if (array[i]%2===0) {
		arraypair[contpair]=array[i];
		sumpair=sumpair+arraypair[contpair];
        prompair=sumpair/contpair;
		contpair++;		
	}
	i++;
}
console.log("los pares son: ");
console.log(arraypair);
console.log("La suma de los pares es: " + sumpair);
console.log("El promedio de los pares es: " + prompair);
i=0;
do{
	for(var j=1; j<=array[i]; j++) {
		if(array[i]%j===0){
			prime++;
		}
	}
	if (prime<=2) {
		arrayPrime[contprime]=array[i];
		sumprime=sumprime+arrayPrime[contprime];
        promprime=sumprime/contprime;
		contprime++;
	}
	prime=0;
	i++;
}while(i<=9)
console.log("Los primos son:");
console.log(arrayPrime); 
console.log("La suma de los primos es: " + sumprime);
console.log("El promedio de los primos es: " + promprime);