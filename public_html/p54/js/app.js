$(()=>{
  $("#Mymodal").modal('show');
  $("#ir").click(() => {
    $("#Mymodal").modal('hide');

    var salario = $("#recipient-var1").val();
    var rete = $("#recipient-var2").val();
    var retenciont = (rete/100)*salario;
    var total = salario-retenciont;
    $("#res1").val(retenciont);
    $("#res2").val(total);
  });
});