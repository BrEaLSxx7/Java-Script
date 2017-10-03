$(() => {
  var a = "*";
  var b = "----";
  var x = "";
  var n = "";
  var f = "-";

  for (i = 1; i <= 13; i++) {
    if (i === 1) {
      x = b + a;
      $("#iniciar").append(x,"<br>");
    }
    if (i >= 2 && i <= 4) {
      if (i === 3) {
        n = x;
      }
      $("#iniciar").append(x = x.slice(1) + a + a,"<br>");
    }
    if (i === 5) {
      $("#iniciar").append(n,"<br>");
    }
    if (i === 6) {
      $("#iniciar").append(n,"<br>");
    }
    if (i >= 7 && i <= 9) {
      $("#iniciar").append(n = n.slice(1) + a + a,"<br>");
    }
    if (i > 9) {
      $("#iniciar").append(n = f + n.slice(0, -2),"<br>");
    }
  }
  });