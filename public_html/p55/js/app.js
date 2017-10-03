$(() => {
  $("#ir").click(() => {
    var num = $("#inlineFormInput").val();
    if (num < 0) {
      $("#res").html(num = num * (-1));
    } else {
      $("#res").html("Ingrese un numero menor de cero")
    }
  })
})