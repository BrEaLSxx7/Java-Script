$(() => {
    var aste = "*";
    var maximo = 6;
    var x = 1;
    var n = "";
    do {
      n = n + aste;
      $("#iniciar").append(n, '<br>');
      if (maximo >= x) {
        x++;
      }
    } while (x <= maximo);
  });