$(() => {
  $("#ir").click(() => {

    function restafechas(f1, f2) {
      if (fecha2.getTime() > fecha1.getTime()) {
        var dif = fecha2.getTime() - fecha1.getTime();
      } else {
        var dif = fecha1.getTime() - fecha2.getTime();
      }
      var rsp = [];
      rsp[0] = Math.floor(dif / (1000 * 60 * 60 * (24 * 365)));
      rsp[1] = Math.floor(dif / (1000 * 60 * 60 * (24 * 30)));
      rsp[2] = Math.floor(dif / (1000 * 60 * 60 * 24));
      return rsp;
    }

    var fecha1 = new Date($("#fecha1").val());
    var fecha2 = new Date($("#fecha2").val());
    var rsp = restafechas(fecha1, fecha2);

    $("#iniciar").html("Años: " + rsp[0] + " meses: " + rsp[1] + " dias: " + rsp[2]);
  })
})