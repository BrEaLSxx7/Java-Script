class Tools {
  constructor() {
    this._array = [];
    this._regtolls;
  }
  set regtolls(regtolls) {
    this._regtolls = regtolls;
  }
  get regtolls() {
    return this._regtolls;
  }
  set array(regtools) {
    if (localStorage.getItem('array2') === null) {
      this.array.push(this.regtolls);
      localStorage.setItem("array2", JSON.stringify(this.array));
    } else {
      var temp = JSON.parse(localStorage.getItem('array2'));
      temp.push(this.regtolls);
      localStorage.setItem('array2', JSON.stringify(temp));
    }
  }
  get array() {
    return this._array;
  }
  searchC() {
    this.array = JSON.parse(localStorage.getItem("array2"));
    var cont = 0;
    var cod = parseInt(prompt("ingrese el codigo a buscar"));
    var objet = '';
    for (let contact of this.array) {
      if (contact.code === cod) {
        cont++;
        objet = contact;
      }
    }
    if (cont === 0) {
      alert("lo sentimos el producto no se encuentra");
    } else {
      alert("el producto fue encontrado");
      console.log(`${objet.name} -- ${objet.price} -- ${objet.code}`);
    }
  }
  searchN() {
    this.array = JSON.parse(localStorage.getItem("array2"));
    var cont = 0;
    var objet = "";
    var nam = prompt("ingrese el nombre a buscar");
    for (let contact of this.array) {
      if (nam === contact.name) {
        cont++;
        objet = contact;
      }
    }
    if (cont === 0) {
      alert("lo sentimos el producto no se encuentra");
    } else {
      alert("El nombre fue encontrado");
      console.log(objet.name + ' -- ' + objet.price + ' -- ' + objet.code);
    }
  }
}

var tollsstore = new Tools();
while (men !== 0) {
  var men = Number(prompt("selecione una opcion: \n\ 1. agregar un producto \n\ 2. buscar un producto por codigo \n\ 3. buscar un producto por nombre \n\ 0. salir"));
  switch (men) {
    case 1:
      var flag = true;
      var name, code, price;
      name = prompt("ingrese el nombre del producto");
      code = parseInt(prompt("ingrese el codigo del producto"));
      price = prompt("ingrese el precio del producto");
      var regtolls = {
        name,
        code,
        price
      };
      tollsstore.regtolls = regtolls;
      tollsstore.array = tollsstore.regtolls;
      break;
    case 2:
      tollsstore.searchC();
      break;
    case 3:
      tollsstore.searchN();
      break;
    case 0:
      men = 0;
      break;
    default:
      alert("debe ingresar un numero entre 0 y 3");
      break;
  }
}fff