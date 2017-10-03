function fill(max) {
  var array = [];
  for (var i = 0; i < max; i++) {
    array[i] = Math.round(Math.random() * 100);
  }
  return array;
}

function searc(array) {
  let x = 0;
  var num = parseInt($("#num").val());
  array.forEach((e, i) => {
    if (e === num) {
      x++;
      $("#Mymodal").modal('show');
      $("#modal").html("El numero " + num + " se encuentra en la posicion " + i + "<br>");
    }
  });
  if (x === 0) {
    $("#Mymodal").modal('show');
    $("#modal").html("El numero " + num + " no se encuentra lo sentimos");
  }
}

function bubble(array, max) {
  var temp = 0;
  var x = 0;
  while (x === 0) {
    x = 1;
    for (var i = 0; i < max; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        x = 0;
      }
    }
  }
  $("#Mymodal").modal('show');
  $("#modal").html("El array fue ordenado exitosamente");
  return array;
}

function bubblebi(array, max) {
  var temp = 0;
  var x = 0;
  while (x === 0) {
    x = 1;
    for (var i = 0; i < max; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        x = 0;
      }
    }
    for (var i = i; i > max; i--) {
      if (array[i] < array[i - 1]) {
        temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
        x = 0;
      }
    }
  }
  $("#Mymodal").modal('show');
  $("#modal").html("El array fue ordenado exitosamente");
  return array;
}

function insertion(array, max) {
  var temp = 0;
  var x;
  for (var i = 0; i < max; i++) {
    temp = array[i];
    var p = i - 1;
    while (array[p] > temp && p >= 0) {
      array[p + 1] = array[p];
      p = p - 1;
    }
    array[p + 1] = temp;
  }
  $("#Mymodal").modal('show');
  $("#modal").html("El array fue ordenado exitosamente");
  return array;
}

$(() => {
  $("#ocult").hide();
  $("#ocult2").hide();
  $("#fill").click(() => {
    $("#fill").hide('slow');
    $("#ocult").show('slow');

    $("#segui").click(() => {
      $("#ocult").hide('slow');
      max = $("#max").val();
      array = fill(max);
      $("#fill").show('slow');
    });
  });
  $("#cerrar").click(() => {
    $("#Mymodal").modal("hide");
    $("#modal").empty();
  });
  $("#search").click(() => {
    $("#ocult2").show('slow');
    $("#search").hide('slow');
    $("#buscar").click(() => {
      $("#ocult2").hide('slow');
      $("#search").show('slow');
      var search = searc(array);
    });
  });
  $("#bubble").click(() => {
    array = bubble(array, max);
  });
  $("#bubblebi").click(() => {
    array = bubblebi(array, max);
  });
  $("#insertion").click(() => {
    array = insertion(array, max);
  });
  $("#print").click(() => {
    $("#Mymodal").modal('show');
    $("#modal").html("El array es " + array.toString());
  });
});