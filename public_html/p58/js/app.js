
$(() => {
  var mon = 15 * 12;
  var day = 15 * 365;
  var hour = day * 24;
  var min = hour * 60;
  var secon = min * 60;
  $("#ir1").click(() => {
    $("#iniciar1").html("En 15 años contables hay " + mon + " meses");
  });

  $("#ir2").click(() => {
    $("#iniciar2").html("En 15 años contables hay " + day + " dias");
  });
  $("#ir3").click(() => {
    $("#iniciar3").html("En 15 años contables hay " + hour + " horas");
  });

  $("#ir4").click(() => {
    $("#iniciar4").html("En 15 años contables hay " + min + " minutos");
  });

  $("#ir5").click(() => {
    $("#iniciar5").html("En 15 años contables hay " + secon + " segundos");
  });
  });