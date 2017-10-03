$(()=>{
  $("#ir").click(()=>{
    var tell=0;
    var num=$("#inlineFormInput").val();
    for(var i=1; i<=num;i++){
      if(num%i===0){
        tell++;
      }
    }
    if(tell<=2){
    $("#iniciar").html("El numero " + num + " es primo");
  }else{
    $("#iniciar").html("El numero " + num + " no es primo");
  }
  });
});
