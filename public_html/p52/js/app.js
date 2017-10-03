$(()=>{
  $("#Mymodal").modal('show');
  $("#ir").click(() => {
    $("#Mymodal").modal('hide');

    var variable1 = $("#recipient-var1").val();
    var variable2 = $("#recipient-var2").val();
    var area = variable1 * variable2;
    var perimetro = variable1 + variable1 + variable2 + variable2;
    $("#res1").val(area);
    $("#res2").val(perimetro);
  });
});