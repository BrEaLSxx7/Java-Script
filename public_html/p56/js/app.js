$(() => {
  $("#ir").click(() => {
    var name = $("#name").val();
    var salariom = $("#salariom").val();
    var salario = $("#salario").val();
    var dias = $("#dias").val();
    var aux = $("#aux").val();
    var rete = $("#rete").val();
    var reg = {};
    var valdia = salario / 30;
    var salariototal = 0;
    if (salario<=(salariom*2)) {
      salariototal = (valdia * dias) + (aux);
    }else if (salario>=(salariom*4)) {
      retet = (rete / 100) * salario;
      Math.round(salariototal = (valdia * dias) - (rete));
    } else {
      Math.round(salariototal = valdia * dias);
    }
    reg = {
      salario,
      salariototal,
      name,
      dias,
      valdia
    };
    $("#Mymodal").modal('show');
    $("#imprimir").click(() => {
      $("#Mymodal").modal('hide');
      sessionStorage.setItem("registro personas", JSON.stringify(reg));
      window.location.replace("p56_2.html");
    });
    $("#guardar").click(() => {
      $("#Mymodal").modal('hide');
      localStorage.setItem("registro personas", JSON.stringify(reg));
      window.location.replace("p56_2.html");
    });
  });
});