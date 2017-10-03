$(()=>{
  $("#ir").click(()=>{
    var name = $("#name").val();
    var type = $("#inputidt").val();
    var numdoc = $("#id").val();
    var gender = $("#gender").val();
    var heigth = $("#heigth").val();
    var live = document.getElementById('inlineRadio1').checked;
    var total = ("Hola, mi nombre es " + name + " Mi numero de " + type + " es " + numdoc + " Genero biologico " + gender + " Mi estatura es " + heigth + " ¿Es verdad que vivo en Cartago?: " + live);
    $("#iniciar").html(total);
  });
});
