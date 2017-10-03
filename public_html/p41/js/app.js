$(()=>{
  $("#ir").click(()=>{
    var name = $("#name").val();
    var type = $("#inputidt").val();
    var numdoc = $("#id").val();
    var total = ("Hola, mi nombre es " + name + " Mi numero de " + type + " es " + numdoc);
    $("#iniciar").html(total);
  });
});