$(() => {
    var aste = "*";
    var maximo = 6;
    var x = 1;
    var n = "______";
    do {
      n = n + aste;
      n = n.slice(1);
      $("#iniciar").append(n, '<br>');
      if (maximo >= x) {
        x++;
      }
    } while (x <= maximo);
  });