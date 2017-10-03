$(() => {
	function addproduct() {
		var array = [];
		if (localStorage.getItem("products")) {
			array = JSON.parse(localStorage.getItem("products"));
		} else {
			array = [];
		}
		var objectproducts = {
			name,
			id,
			price
		};
		objectproducts.name = $("#name").val();
		objectproducts.id = $("#id").val();
		objectproducts.price = $("#price").val();
		array.push(objectproducts);
		localStorage.setItem("products", JSON.stringify(array));
	}
	function searchcodi() {
		var array = JSON.parse(localStorage.getItem("products"));
		var codi = $("#cod").val();
		array.forEach((e, i) => {
			if (codi === array[i].id) {
				$("#modal").html("El producto " + array[i].name + " con codigo " + array[i].id + " y precio " + array[i].price);
				$("#Mymodal").modal("show");
				$("#cerrar").click(() => {
					$("#Mymodal").modal("hide");
				});
			}
			else {
				$("#modal").html("El codigo " + codi + " no se encuentra");
				$("#Mymodal").modal("show");
				$("#cerrar").click(() => {
					$("#Mymodal").modal("hide");
				});
			}
		});
	}
	function searchname() {
		var array = JSON.parse(localStorage.getItem("products"));
		var nam = $("#nam").val();
		array.forEach((e, i) => {
			if (nam === array[i].name) {
				$("#modal").html("El producto " + array[i].name + " con codigo " + array[i].id + " y precio " + array[i].price);
				$("#Mymodal").modal("show");
				$("#cerrar").click(() => {
					$("#Mymodal").modal("hide");
				});
			}
			else {
				$("#modal").html("El codigo " + nam + " no se encuentra");
				$("#Mymodal").modal("show");
				$("#cerrar").click(() => {
					$("#Mymodal").modal("hide");
				});
			}
		});
	}
	$("#add").click(() => {
		$("#product").animate({
			'margin-left': '-2500px'
		}, 2000);
		$("#iniciar").animate({
			'position': 'relative',
			'margin-left': '6vw',
		}, 2000);
		$("#guardar").click(() => {
			$("#product").animate({
				'margin-left': '0vw'
			}, 2000);
			$("#iniciar").animate({
				'position': 'relative',
				'margin-left': '110vw',
			}, 2000);
			addproduct();
		});
	});

	$("#atras").click(() => {
		$("#product").animate({
			'margin-left': '0vw'
		}, 2000);
		$("#iniciar").animate({
			'position': 'relative',
			'margin-left': '110vw',
		}, 2000);
	});

	$("#searchcodi").click(() => {
		$("#product").animate({
			'margin-left': '-2500px'
		}, 2000);
		$("#idb").animate({
			'position': 'relative',
			'margin-left': '40vw',
		}, 2000);
		$("#buscarco").click(() => {
			$("#product").animate({
				'margin-left': '0vw'
			}, 2000);
			$("#idb").animate({
				'position': 'relative',
				'margin-left': '110vw',
			}, 2000);
			searchcodi();
		});
	});

	$("#searchname").click(() => {
		$("#product").animate({
			'margin-left': '-2500px'
		}, 2000);
		$("#nameb").animate({
			'position': 'relative',
			'margin-left': '40vw',
		}, 2000);
		$("#buscarna").click(() => {
			$("#product").animate({
				'margin-left': '0vw'
			}, 2000);
			$("#nameb").animate({
				'position': 'relative',
				'margin-left': '110vw',
			}, 2000);
			searchname();
		});
	});
});