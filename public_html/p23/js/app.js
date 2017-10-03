function restafechas(f1, f2) {
  var aFecha1 = f1.split("/");
  var aFecha2 = f2.split("/");
  var fFecha1 = Date.UTC(aFecha1[2], aFecha1[1] - 1, aFecha1[0]);
  var fFecha2 = Date.UTC(aFecha2[2], aFecha2[1] - 1, aFecha2[0]);
  var dif = fFecha2 - fFecha1;
  var rsp = [];
  rsp[0] = Math.floor(dif / (1000 * 60 * 60 * 24));
  rsp[1] = Math.floor(dif / (1000 * 60 * 60 * (24 * 30)));
  rsp[2] = Math.floor(dif / (1000 * 60 * 60 * (24 * 365)));
  return rsp;
}

var fecha1 = prompt("dia/mes/año");
console.log(fecha1);
var fecha2 = prompt("dia/mes/año");
console.log(fecha2);

var rsp = restafechas(fecha1, fecha2);

console.log("dias: " + rsp[0]);
console.log("meses: " + rsp[1]);
console.log("años: " + rsp[2]);