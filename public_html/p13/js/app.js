var a = "*";
var b = "    ";
var x = "";
var n = "";
var f = " ";

for (i =1; i<=13; i++) {
	if(i===1){
		x=b+a;
		console.log(x);
	}
	if (i>=2 && i<=4) {
		if (i===3) {
			n=x;
		}
		console.log(x=x.slice(1)+a+a);
	}
	if (i===5) {
		console.log(n);
	}
	if (i===6) {
		console.log(n);
	}
	if (i>=7 && i<=9) {
		console.log(n=n.slice(1)+a+a);
	}
	if (i>9) {
		console.log(n=f+n.slice(0,-2));
	}
}