$(()=>{
  $("#ir").click(()=>{
    var name=$("#inlineFormInput").val();
    $("#iniciar").html("Hola, soy " + name + " y me siento feliz de estar aprendiendo JavaScript usando jQuery");
  });
});
