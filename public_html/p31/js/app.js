class number{
  constructor(){
    this._array;
    this._pair;
    this._prime=[];
    this._sumpair;
    this._sumprime;
    this._prompair;
    this._promprime;
  }
  set array(array){
    this._array=array;
  }
  get array(){
    return this._array;
  }
  set pair(array){
    this._pair=array.filter((e)=>{
      return e%2===0;
    });
  }
  get pair(){
    return this._pair;
  }
  set prime(array){
    array.forEach((e)=>{
      var x=0;
      for(let j=1; j<=e; j++){
        if(e%j===0){
          x++;
        }
      }
      if(x<=2){
        this._prime.push(e);
      }
    });
  }
  get prime(){
    return this._prime;
  }
  set sumpair(pair){
    var x=0;
    this._pair.forEach((e)=>{
      x=x+e;
    });
    this._sumpair=x;
  }
  get sumpair(){
    return this._sumpair;
  }
  set sumprime(prime){
     var x=0;
    this._prime.forEach((e)=>{
      x=x+e;
    });
    this._sumprime=x;
  }
  get sumprime(){
    return this._sumprime;
  }
  set prompair(pair){
    this._prompair=this._sumpair/this._pair.length;
  }
  get prompair(){
    return this._prompair;
  }
  set promprime(prime){
    this._promprime=this._sumprime/this._prime.length;
  }
  get promprime(){
    return this._promprime;
  }
}
var array=[];
let size=Number(prompt("Ingrese el tamaño del arreglo"));
for(let i=0; i<size; i++){
  array[i]=Number(prompt("Ingrese un numero"));
}

var numbers = new number();
numbers.array=array;
console.log(numbers.array);
numbers.pair=numbers.array;
console.log("Los pares son: ");
console.log(numbers.pair);
numbers.prime=numbers.array;
console.log("Los numeros primos son: ");
console.log(numbers.prime);
numbers.sumpair=numbers.pair;
console.log("La suma de los pares es: " + numbers.sumpair);
numbers.sumprime=numbers.prime;
console.log("La suma de los primos es: " + numbers.sumprime);
numbers.prompair=numbers.pair;
console.log("El promedio de los pares es: " + numbers.prompair);
numbers.promprime=numbers.prime;
console.log("El promedio de los primos es: " + numbers.promprime);