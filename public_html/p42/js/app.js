$(()=>{
  var variable1 = 50;
  var variable2 = 10;
  $("#res1").val(variable1 ** variable2);
  $("#res2").val(variable2 ** variable1);
  $("#res3").val(variable2 * variable1);
  $("#res4").val(variable1 / variable2);
  $("#res5").val(variable2 / variable1);
  $("#res6").val(variable1 % variable2);
  $("#res7").val(variable1 - variable2);
  $("#res8").val(variable2 + variable1);
});