$(() => {
  $("#ir").click(() => {

    var catetoa = $("#catetoa").val();
    var catetob = $("#catetob").val();
    var hipo = Math.sqrt((catetoa ** 2) + (catetob ** 2));
    $("#Mymodal").modal('show');
    $("#imprimir").click(() => {
      $("#Mymodal").modal('hide');
      sessionStorage.setItem("hipotenusa", hipo);
      window.location.replace("p57_2.html");
    });
    $("#guardar").click(() => {
      $("#Mymodal").modal('hide');
      localStorage.setItem("hipotenusa", hipo);
      window.location.replace("p57_2.html");
    });
  });
});