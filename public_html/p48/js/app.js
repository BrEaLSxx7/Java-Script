$(() => {
    var aste = "_______*";
    var maximo = 6;
    var x = 1;
    var n = "";
    n = n + aste;
    do {
      $("#iniciar").append(n.slice(1), '<br>');
      if (maximo >= x) {
        x++;
      }
    } while (x <= maximo);
  });