$(() => {
  $("#Mymodal").modal('show');
  $("#ir").click(() => {
    $("#Mymodal").modal('hide');

    var variable1 = $("#recipient-var1").val();

    $("#res").html(variable1 + " Son " + (variable1/24) + " Dias y " + ((variable1/24)/7) + " Semanas");
  });
});