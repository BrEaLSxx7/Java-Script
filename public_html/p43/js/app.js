$(()=>{
  $("#Mymodal").modal('show');
  $("#ir").click(() => {
    $("#Mymodal").modal('hide');

    var variable1 = $("#recipient-var1").val();
    var variable2 = $("#recipient-var2").val();
    $("#res1").val(variable1 ** variable2);
    $("#res2").val(variable2 ** variable1);
    $("#res3").val(variable2 * variable1);
    $("#res4").val(variable1 / variable2);
    $("#res5").val(variable2 / variable1);
    $("#res6").val(variable1 % variable2);
    $("#res7").val(variable1 - variable2);
    $("#res8").val(variable2 + variable1);
  });
});