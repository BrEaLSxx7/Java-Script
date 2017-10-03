$(()=>{
  $("#ir").click(()=>{
    var num=$("#inlineFormInput").val();
    if (num % 2 === 0) {
      $("#iniciar").html("El numero " + num + " es par");
    } else {
      $("#iniciar").html("El numero " + num + " no es par");
    }
  });
});
