$("#ocul1").hide();
$("#ocul2").hide();
$(() => {
  $("#ir1").click(() => {
    $("#ir1").hide();
    $("#ocul1").show("slow");
    $("#irres1").click(() => {
      var employe = $("#inlineFormInput1").val();
      console.log(employe);
      var diner = 258320000;
      var total = diner / employe;
      $("#iniciar1").text("A cada empleado le toca " + total);
    });
  });


  $("#ir2").click(() => {
    $("#ir2").hide();
    $("#ocul2").show("slow");
    $("#irres2").click(() => {
      var hours = $("#inlineFormInput2").val();
      var valhour = 45000 * hours;
      var total = valhour - 20000;
      $("#iniciar2").text("El dia del electricista vale " + total);
    });
  });
  $("#ir3").click(() => {
    var cm = 2.54;
    var pul = 12;
    var pie = 5280;
    var milla = (cm * pul) * pie;
    $("#iniciar3").text("En una milla hay " + milla + " CMS")
  });
  });