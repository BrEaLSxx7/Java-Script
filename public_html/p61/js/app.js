function llenar(max) {
  var array = [];
  for (var i = 0; i < max; i++){
    array[i] = Math.round(Math.random() * 100);
  }
  return array;
}

function pares(array) {
  var pair = array.filter((e) => {
    return e % 2 === 0;
  });
  return pair;
}
function primos(array) {
  var cont = 0;
  var prime = [];
  for (var index = 0; index < array.length; index++) {
    cont = 0;
    for (var  i= 1;  i<= array[index]; i++) {
      if (array[index] % i === 0) {
        cont++;
      }
    }
    if (cont <= 2) {
      prime.push(array[index]);
    }
  }
  return prime;
}

function sumapar(pair) {
  var x = 0;
  pair.forEach((e) => {
    x = x + e;
  });
  sumpair = x;
  return sumpair;
}

function sumaprimo(prime) {
  var x = 0;
  prime.forEach((e) => {
    x = x + e;
  });
  sumprime = x;
  return sumprime;
}
function promepar(pair, sumpair) {
  prompair = sumpair / pair.length;
  return prompair;
}

function promeprimo(prime, sumprime) {
  promprime = sumprime / prime.length;
  return promprime;
}

$(() => {
  $("#inlineFormInput1").hide();
  $("#irres1").hide();

  $("#ir1").click(() => {
    $("#inlineFormInput1").show("slow");
    $("#irres1").show("slow");
    $("#ir1").hide();
    $("#irres1").click(() => {
      var max = $("#inlineFormInput1").val();
      $("#ir1").hide();
      array = llenar(max);
      $("#array").html(array.toString());
      $("#Mymodal2").modal('show');
      $("#Cerrar2").click(() => {
        $("#inlineFormInput1").hide();
        $("#irres1").hide();
        $("#Mymodal2").modal('hide');

        $("#ir1").show();
      });
    });
  });


  $("#ir2").click(() => {
     pair = pares(array);
    $("#pares").html(pair.toString());
    $("#Mymodal").modal('show');
    $("#Cerrar").click(() => {
      $("#Mymodal").modal('hide');
    });
  });


  $("#ir3").click(() => {
    prime = primos(array);
    $("#primos").html(prime.toString());
    $("#Mymodal3").modal('show');
    $("#Cerrar3").click(() => {
      $("#Mymodal3").modal('hide');
    });
  });

  $("#ir4").click(() => {
     sumpair = sumapar(pair);
    $("#sumapares").html("La suma de los pares es " + sumpair);
    $("#Mymodal4").modal('show');
    $("#Cerrar4").click(() => {
      $("#Mymodal4").modal('hide');
    });
  });

  $("#ir5").click(() => {
    sumprime = sumaprimo(prime);
    $("#sumaprimos").html("La suma de los primos es " + sumprime);
    $("#Mymodal5").modal('show');
    $("#Cerrar5").click(() => {
      $("#Mymodal5").modal('hide');
    });
  });

  $("#ir6").click(() => {
    prompair = promepar(pair, sumpair);
    $("#promepar").html("el promedio de los pares es " + prompair);
    $("#Mymodal6").modal('show');
    $("#Cerrar6").click(() => {
      $("#Mymodal6").modal('hide');
    });
  });

  $("#ir7").click(() => {
    promprime = promeprimo(prime, sumprime);
    $("#promeprimo").html("el promedio de los primos es " + promprime);
    $("#Mymodal7").modal('show');
    $("#Cerrar7").click(() => {
      $("#Mymodal7").modal('hide');
    });
  });
});