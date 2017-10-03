$(()=>{
  $("#Mymodal").modal('show');
  $("#ir").click(() => {
    $("#Mymodal").modal('hide');

    var variable1 = $("#recipient-var1").val();
    var variable2 = $("#recipient-var2").val();
    var variable3 = $("#recipient-var3").val();
    var total = (variable1 * variable2)/variable3;
    $("#res1").val(total);
  });
});