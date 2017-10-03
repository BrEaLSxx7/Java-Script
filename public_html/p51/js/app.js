$(() => {
  $("#ir").click(() => {
    var tell = 0;
    var num = $("#inlineFormInput").val();
    if (num >= 18) {
      $("#iniciar").html("Bienvenido a la fiesta");
    } else {
      $("#iniciar").html("Devuelvete a dormir y ponte los pañales");
    }
  });
});
