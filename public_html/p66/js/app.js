
$(() => {

	function mostraridi() {
		$("#espanol").show('slow');
		$("#english").show('slow');
	}

	function escondeidi() {
		$("#espanol").hide('slow');
		$("#english").hide('slow');
	}

	function mostrarconf() {
		$("#gesnom").show('slow');
		$("#redhor").show('slow');
		$("#gennom").show('slow');
		$("#impcom").show('slow');
	}

	function escondeconf() {
		$("#gesnom").hide('slow');
		$("#redhor").hide('slow');
		$("#gennom").hide('slow');
		$("#impcom").hide('slow');
	}

	function fillconfig() {
		var namecompa = $("#namecompa").val();
		var salariomin = $("#salariomin").val();
		var reten = $("#reten").val();
		var porcenrete = $("#porcenrete").val();
		var aux = $("#aux").val();
		var cuanaux = $("#cuanaux").val();
		var hourlab = $("#hourlab").val();
		var objectconfig = {
			namecompa,
			salariomin,
			reten,
			porcenrete,
			aux,
			cuanaux,
			hourlab
		};
		localStorage.setItem("objectconfig", JSON.stringify(objectconfig));
	}
	function print() {
		objectemployee = JSON.parse(localStorage.getItem("objectemployee"));
		objectemployee.forEach((e, i) => {
			$("#table").append("<tr><th>" + objectemployee[i].id + "</th> <td>" + objectemployee[i].nameemploye + "</td> <td>" + objectemployee[i].surname + "</td> <td>" + objectemployee[i].cargo + "</td><tr>");
		});
	}
	function gestemployee() {
		$("#agg").animate({
			'margin-left': '110vw'
		}, 2000);
		$("#hours").animate({
			'margin-left': '110vw'
		}, 2000);
		$("#configuration").animate({
			'margin-left': '110vw'
		}, 2000);
		$("#gesnom2").animate({
			'margin-left': '110vw'
		}, 2000);
		var x = 0;
		var n = 0;
		var id, nameemploye, surname, cargo, salariobase;
		var objectemployee = [];
		var objectprim = {};
		var objectconfig = JSON.parse(localStorage.getItem("objectconfig"));
		if (localStorage.getItem("objectemployee") !== null) {
			objectemployee = JSON.parse(localStorage.getItem("objectemployee"));
			// objectemployee.forEach((e, i) => {
			// 	$("#table").append("<tr><th>" + objectemployee[i].id + "</th> <td>" + objectemployee[i].nameemploye + "</td> <td>" + objectemployee[i].surname + "</td> <td>" + objectemployee[i].cargo + "</td><tr>");
			// });
		} else {
			objectemployee = [];
		}
		$("#gesemployee").animate({
			'margin-left': '20vw'
		}, 2000);

		$("#agregar").click(() => {
			console.log(x, n);
			$("#salariobase").on('keyup', () => {
				if ($("#salariobase").val() < objectconfig.salariomin) {
					$.toaster({ priority: 'danger', title: 'Error', message: 'Debe ingresar un valor superio a ' + objectconfig.salariomin });
					n++;
				} else {
					n = 0;
				}
			}).keyup();
			$("#agg").animate({
				'margin-left': '25vw'
			}, 2000);
			$("#gesemployee").animate({
				'margin-left': '110vw'
			}, 2000);
			if (localStorage.getItem("objectemployee") !== null) {
				objectemployee.forEach((e, i) => {
					$("#id").on('keyup', () => {
						if (objectemployee[i].id === $("#id").val()) {
							x++;
							$.toaster({ priority: 'danger', title: 'Error', message: 'La cedula ya se encuentra en el sistema' });
						}
						else {
							x = 0;
						}
					}).keyup();
				});
			}
			$("#agregaremplo").click((e) => {
				e.preventDefault();
				console.log(x, n);
				if (x === 0 && n === 0) {
					salaryt = 0;
					id = $("#id").val();
					nameemploye = $("#nameemploye").val();
					surname = $("#surname").val();
					cargo = $("#cargo").val();
					salariobase = $("#salariobase").val();
					objectprim = {
						salaryt,
						id,
						nameemploye,
						surname,
						cargo,
						salariobase
					};
					objectemployee.push(objectprim);
				}
				localStorage.setItem("objectemployee", JSON.stringify(objectemployee));
				$("#table").empty();
				print();
				$("#gesemployee").animate({
					'margin-left': '25vw'
				}, 2000);
				$("#agg").animate({
					'margin-left': '110vw'
				}, 2000);
			});

		});
		$("#modificar").click(() => {
			if (localStorage.getItem("objectemployee") !== null) {
				objectemployee = JSON.parse(localStorage.getItem("objectemployee"));
				$("#Mymodal").modal('show');
				$("#enviar").click(() => {
					var x = 0;
					var index;
					var bus = $("#modal").val();
					objectemployee.forEach((e, i) => {
						if (e.id === bus) {
							index = i;
							x++;
						}
					});
					if (x === 1) {
						$.toaster({ priority: 'success', title: 'success', message: 'El numero de cedula fue encontrado' });
						$("#Mymodal").modal('hide');
						$("#agg2").animate({
							'margin-left': '25vw'
						}, 2000);
						$("#gesemployee").animate({
							'margin-left': '110vw'
						}, 2000);
						$("#id2").val(objectemployee[index].id);
						$("#nameemploye2").val(objectemployee[index].nameemploye);
						$("#surname2").val(objectemployee[index].surname);
						$("#cargo2").val(objectemployee[index].cargo);
						$("#salariobase2").val(objectemployee[index].salariobase);
						$("#agregaremplo2").click(() => {
							objectemployee[index].id = $("#id2").val();
							objectemployee[index].nameemploye = $("#nameemploye2").val();
							objectemployee[index].surname = $("#surname2").val();
							objectemployee[index].cargo = $("#cargo2").val();
							objectemployee[index].salariobase = $("#salariobase2").val();
							localStorage.setItem("objectemployee", JSON.stringify(objectemployee));
							$("#table").empty();
							print();
							$("#gesemployee").animate({
								'margin-left': '25vw'
							}, 2000);
							$("#agg2").animate({
								'margin-left': '110vw'
							}, 2000);
						});

					} else {
						$.toaster({ priority: 'danger', title: 'Error', message: 'El numero de cedula no fue encontrado' });
					}
				});
			} else {
				$.toaster({ priority: 'danger', title: 'Error', message: 'Debe agregar empleados primero' });
			}
		});

		$("#eliminar").click(() => {
			if (localStorage.getItem("objectemployee") !== null) {
				objectemployee = JSON.parse(localStorage.getItem("objectemployee"));
				$("#Mymodal3").modal('show');
				$("#enviar2").click(() => {
					var x = 0;
					var index;
					var object;
					var objec = [];
					var bus = $("#modal2").val();
					objectemployee.forEach((e, i) => {
						if (e.id === bus) {
							index = i;
							x++;
							object = e;
						}
					});
					if (x === 1) {
						$("#Mymodal2").modal('show');
						$("#Mymodal3").modal('hide');
						$("#eliminar2").html("Esta seguro de eliminar el empleado " + objectemployee[index].nameemploye + " con cedula numero " + objectemployee[index].id);
						$("#cancelar").click(() => {
							$("#Mymodal2").modal('hide');
						});
						$("#aceptar").click(() => {
							objectemployee[index] = objectemployee[0];
							objectemployee[0] = object;
							objectemployee.shift();
							$.toaster({ priority: 'success', title: 'success', message: 'El empleado fue eliminado con exito' });
							$("#Mymodal2").modal('hide');
							localStorage.setItem("objectemployee", JSON.stringify(objectemployee));
							$("#table").empty();
							print();
						});
					} else {
						$.toaster({ priority: 'danger', title: 'Error', message: 'El numero de cedula no fue encontrado' });
					}
				});
			} else {
				$.toaster({ priority: 'danger', title: 'Error', message: 'Debe agregar empleados primero' });
			}
		});
	}

	function reghour() {
		if (localStorage.getItem("arrayobject") !== null) {
			var arrayobject = JSON.parse(localStorage.getItem("arrayobject"));
		} else {
			var arrayobject = [];
		}
		if (localStorage.getItem("objectemployee") !== null) {
			objectemployee = JSON.parse(localStorage.getItem("objectemployee"));
			objectconfig = JSON.parse(localStorage.getItem("objectconfig"));
			$("#gesemployee").animate({
				'margin-left': '110vw'
			}, 2000);
			$("#agg").animate({
				'margin-left': '110vw'
			}, 2000);
			$("#gesnom2").animate({
				'margin-left': '110vw'
			}, 2000);
			$("#configuration").animate({
				'margin-left': '110vw'
			}, 2000);
			$("#Mymodal").modal('show');
			$("#enviar").click(() => {
				var x = 0;
				var index;
				var id2 = $("#modal").val();
				objectemployee.forEach((e, i) => {
					if (objectemployee[i].id === id2) {
						x++;
						valhour = objectemployee[i].salariobase / objectconfig.hourlab;
					}
				});
				if (x === 1) {
					let n = 0;
					$("#Mymodal").modal('hide');
					$("#hours").animate({
						'margin-left': '30vw'
					}, 2000);
					// $("#diurnas", "#nocturnas", "#dominicalesdiurnas", "#dominicalesnocturnas").on('keyup', () => {
					// 	if (($("#diurnas").val() + $("#nocturnas").val() + $("#dominicalesdiurnas").val() + $("#dominicalesnocturnas").val()) > objectconfig.hourlab) {
					// 		$.toaster({ priority: 'danger', title: 'Error', message: 'No puede ingresar mas de  ' + objectconfig.objectconfig.hourlab + " horas" });
					// 		n++;
					// 	} else {
					// 		n = 0;
					// 	}
					// }).keyup();
					if (n === 0) {
						var m = true;
						$("#guardar2").click(() => {
							var diurnas = $("#diurnas").val();
							var nocturnas = $("#nocturnas").val();
							var dominicalesdiurnas = $("#dominicalesdiurnas").val();
							var dominicalesnocturnas = $("#dominicalesnocturnas").val();
							var extrasdiurnas = $("#extrasdiurnas").val();
							var extrasnocturnas = $("#extrasnocturnas").val();
							var domiextras = $("#domiextras").val();
							var domiextranocturnas = $("#domiextranocturnas").val();
							object = {
								id2,
								diurnas,
								nocturnas,
								dominicalesdiurnas,
								dominicalesnocturnas,
								extrasdiurnas,
								extrasnocturnas,
								domiextras,
								domiextranocturnas,
								valhour
							};
							if (localStorage.getItem("arrayobject") !== null) {
								arrayobject.forEach((e, i) => {
									if (id2 === arrayobject[i].id2) {
										arrayobject[i] = object;
										m = false;
										localStorage.setItem("arrayobject", JSON.stringify(arrayobject));
										$("#hours").animate({
											'margin-left': '110vw'
										}, 2000);
									}
								});
								console.log(m);
							}
							if (m) {
								arrayobject.push(object);
								localStorage.setItem("arrayobject", JSON.stringify(arrayobject));
								$("#hours").animate({
									'margin-left': '110vw'
								}, 2000);
							}
						});
					}
				} else {
					$.toaster({ priority: 'danger', title: 'Error', message: 'El numero de cedula no fue encontrado' });
				}
			});
		} else {
			$.toaster({ priority: 'danger', title: 'Error', message: 'Debe agregar empleados primero' });
		}

	}
	function gesnom() {
		$("#hours").animate({
			'margin-left': '110vw'
		}, 2000);
		$("#gesemployee").animate({
			'margin-left': '110vw'
		}, 2000);
		$("#agg").animate({
			'margin-left': '110vw'
		}, 2000);
		// $("#confi").animate({
		// 	'margin-left': '110vw'
		// }, 2000);
		var arrayobject = JSON.parse(localStorage.getItem("arrayobject"));
		var objectemployee = JSON.parse(localStorage.getItem("objectemployee"));
		var objectconfig = JSON.parse(localStorage.getItem("objectconfig"));
		for (var i = 0; i < objectemployee.length; i++) {
			for (var j = 0; j < arrayobject.length; j++) {
				if (objectemployee[i].id === arrayobject[j].id2) {
					var t = 0;
					console.log(arrayobject[j].valhour);
					valhourday = (arrayobject[j].valhour * 1);
					valhournigh = (arrayobject[j].valhour * 1.35);
					valhourdomday = (arrayobject[j].valhour * 1.75);
					valhourdomnigh = (arrayobject[j].valhour * 1.10);
					valhourextraday = (arrayobject[j].valhour * 1.25);
					valhourextranigh = (arrayobject[j].valhour * 1.75);
					valhourextradomday = (arrayobject[j].valhour * 2);
					valhourextradomnigh = (arrayobject[j].valhour * 2.50);
					salaryp = ((valhourday * arrayobject[j].diurnas) + (valhournigh * arrayobject[j].nocturnas) + (valhourdomday * arrayobject[j].dominicalesdiurnas) + (valhourdomnigh * arrayobject[j].dominicalesnocturnas) + (valhourextraday * arrayobject[j].extrasdiurnas) + (valhourextranigh * arrayobject[j].extrasnocturnas) + (valhourextradomday * arrayobject[j].domiextras) + (valhourextradomnigh * arrayobject[j].domiextranocturnas));
				//	console.log(salaryp);
					if ((objectemployee[i].salariobase <= (objectconfig.aux) * objectconfig.salariomin) && (salaryp <= (objectconfig.aux) * objectconfig.salariomin)) {
						objectemployee[i].salaryt = Math.round(salaryp + objectconfig.cuanaux);
						t++;
						//console.log(salaryp);
					}
					if ((objectemployee[i].salariobase >= (objectconfig.reten) * objectconfig.salariomin) && (salaryp >= (objectconfig.reten) * objectconfig.salariomin)) {
						objectemployee[i].salaryt = Math.round(salaryp - ((objectconfig.porcenrete / 100) * salaryp));
						//console.log(salaryp);
						t++;
					}
					if ((objectemployee[i].salariobase <= objectconfig.salariomin) && salaryp <= objectconfig.salariomin) {
						objectemployee[i].salaryt = Math.round(salaryp + (objectconfig.salariomin * 0.20) + (objectconfig.cuanaux));
						//console.log(salaryp);
						t++;
					}
					if ((objectemployee[i].salariobase > (objectconfig.aux) * objectconfig.salariomin) && (salaryp < (objectconfig.reten) * objectconfig.salariomin)) {
						objectemployee[i].salaryt = Math.round(salaryp);
						console.log(salaryp);
						t++;
					}
					if (t === 0) {
						objectemployee[i].salaryt = Math.round(salaryp);
					}
					localStorage.setItem("objectemployee", JSON.stringify(objectemployee));
				}
			}
		}
		var objectemployee = JSON.parse(localStorage.getItem("objectemployee"));
		// var n = 0;
		// var x = 0;
		// while (x === 0) {
		// 	x = 1;
		// 	for (var i = 0; i < objectemployee.length; i++) {
		// 		if (objectemployee[i].id > objectemployee[i+1].id){
		// 			n = objectemployee[i + 1];
		// 			objectemployee[i + 1] = objectemployee[i];
		// 			objectemployee[i] = n;
		// 			x = 0;
		// 		}
		// 	}
		// }
		objectemployee.forEach((e,i) => {
			$("#table2").append("<tr><th>" + objectemployee[i].id + "</th> <td>" + objectemployee[i].cargo + "</td> <td>" + objectemployee[i].salaryt + "</td><tr>");
		});
		$("#gesnom2").animate({
			'margin-left': '30vw'
		}, 2000);
	}

	$("#espanol").hide();
	$("#english").hide();
	$("#gesnom").hide();
	$("#redhor").hide();
	$("#gennom").hide();
	$("#impcom").hide();

	$("#selectionidiom").click(() => {
		mostraridi();
	});

	$("#selectionidiom").dblclick(() => {
		escondeidi();
	});

	$("#continue").click(() => {
		if (localStorage.getItem("objectconfig") !== null) {
			mostrarconf();
		} else {
			$.toaster({ priority: 'danger', title: 'Error', message: 'Debe configurar primero el sistema' });
		}
	});
	$("#continue").dblclick(() => {
		escondeconf();
	});

	$("#confi").click(() => {
		$("#hours").animate({
			'margin-left': '110vw'
		}, 2000);
		$("#configuration").animate({
			'margin-left': '25vw'
		}, 2000);
		$("#gesemployee").animate({
			'margin-left': '110vw'
		}, 2000);
		$("#agg").animate({
			'margin-left': '110vw'
		}, 2000);
		$("#gesnom2").animate({
			'margin-left': '110vw'
		}, 2000);
		$("#guardar").click(() => {
			fillconfig();
			$("#configuration").animate({
				'margin-left': '110vw'
			}, 2000);
		});
	});
	$("#gesnom").click(() => {
		gestemployee();
	});
	$("#redhor").click(() => {
		reghour();

	});
	$("#gennom").click(() => {
		gesnom();
	});
	print();
});