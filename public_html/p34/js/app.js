class order{
	constructor(){
		this._array;
		this._search;
	}
	set array(arrayn){
		this._array=arrayn;
	}
	get array(){
		return this._array;
	}
	set search(arrayn){
		var num=Number(prompt("digite el numero a buscar"))
		this._search=this._array.forEach( (e)=>{
			return e===num;
		})
	}
	get search(){
		return this._search;
	}
	bubble(){
		var m=0;
		var z=0;
		while(z===0){
			z=1;
			for (var i = 0; i <this.x ; i++) {
				if (this.array[i]>this.array[i+1]) {
					m=this.array[i+1];
					this.array[i+1]=this.array[i];
					this.array[i]=m;
					z=0;
				}
			}
		}
		console.log(this.array);
	}
	bubblebi(){
		var m=0;
		var z=0;
		while(z===0){
			z=1;
			for (var i = 0; i <this.x ; i++) {
			if (this.array[i]>this.array[i+1]) {
				m=this.array[i+1];
				this.array[i+1]=this.array[i];
				this.array[i]=m;
				z=0;
			}
			}
			for (var i = i; i > this.x; i--) {
			if (this.array[i]<this.array[i-1]) {
				m=this.array[i-1];
				this.array[i-1]=this.array[i];
				this.array[i]=m;
				z=0;
			}
			}
		}
		console.log(this.array)

	}
	insertion(){
		var n=0;
		var x;
		for (var i = 0; i < this.x ; i++) {
			n=this.array[i];
			var p=i-1
			while(this.array[p]>n && p>=0){
				this.array[p+1]=this.array[p];
				p=p-1;
			}
			this.array[p+1]=n;
		}
		console.log(this.array);
	}
}

var ordern = new order();
do{
			var n=Number(prompt("1. Llenar arreglo \n\ 2. Buscar elemento por método de búsqueda secuencial \n\ 3. Aplicar método de ordenamiento de burbuja \n\ 4. Aplicar método de ordenamiento de burbuja bidireccional \n\ 5. Aplicar método de ordenamiento por inserción \n\ 6. Aplicar método de ordenamiento por mezcla \n\ 7. Aplicar el método de ordenamiento por selección \n\ 8. Imprimir arreglo \n\0. Salir del programa"));
			switch(n){
				case 1:
					var arrayn=[];
					var x=Number(prompt("Ingrese el maximo del arreglo"));
					for (var i = 0; i <this.x ; i++) {
						arrayn[i]=Math.round((Math.random())*100);
					}
					ordern.array=arrayn;
					console.log(ordern.array);
				break;
				case 2:
					ordern.search=arrayn;
					console.log(ordern.search);
				break;
				case 3:
					this.bubble();
				break;
				case 4:
					this.bubblebi();
				break;
				case 5:
					this.insertion();
				break;
				case 6:
				break;
				case 7:
				break;
				case 8:
				break;
				case 0:
				break;
				default:
					alert("Ingreso un numnero erroneo por favor digite un numero entre 0 y 8");
				break;
			}
		}while(n!==0)