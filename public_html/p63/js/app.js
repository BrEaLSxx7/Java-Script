function personaldata() {
	var nombre = $("#name").val();
	var tipo = $("#inputidt").val();
	var id = $("#id").val();
	var gender = $("#gender").val();
	var tel = $("#tel").val();
	objectperso = {
		nombre,
		tipo,
		id,
		gender,
		tel
	};
	return objectperso;
}

function familydata() {
	var nombre = $("#name").val();
	var tipo = $("#inputidt").val();
	var id = $("#id").val();
	var gender = $("#gender").val();
	var tel = $("#tel").val();
	objectfamily = {
		nombre,
		tipo,
		id,
		gender,
		tel
	};
	return objectfamily;
}

function laboraldata() {
	var nombre = $("#name").val();
	var tipo = $("#inputidt").val();
	var id = $("#id").val();
	var gender = $("#gender").val();
	var tel = $("#tel").val();
	objectlaboral = {
		nombre,
		tipo,
		id,
		gender,
		tel
	};
	return objectlaboral;
}

function profesionaldata() {
	var profesional = $("#profesional").val();
	return profesional;
}

function prin(personal, family, laboral, profesional) {
	$("#nameprintpersonal").val(personal.nombre);
	$("#tipeprintpersonal").val(personal.tipo);
	$("#numberprintpersonal").val(personal.id);
	$("#genderprintpersonal").val(personal.gender);
	$("#telprintpersonal").val(personal.tel);

	$("#nameprintfamily").val(family.nombre);
	$("#tipeprintfamily").val(family.tipo);
	$("#numberprintfamily").val(family.id);
	$("#genderprintfamily").val(family.gender);
	$("#telprintfamily").val(family.tel);

	$("#nameprintlaboral").val(laboral.nombre);
	$("#tipeprintlaboral").val(laboral.tipo);
	$("#numberprintlaboral").val(laboral.id);
	$("#genderprintlaboral").val(laboral.gender);
	$("#telprintlaboral").val(laboraal.tel);

	$("#profesional").val(profesional);

}

$(() => {

	$("#personaldata").click(() => {
		$("#cv").animate({
			'margin-left': '-2500px'
		}, 2000);
		$("#iniciar").animate({
			'position': 'relative',
			'margin-left': '6vw',
		}, 2000);
		$("#guardar").click(() => {
			personal = personaldata();
			$("#cv").animate({
				'margin-left': '0vw'
			}, 2000);
			$("#iniciar").animate({
				'position': 'relative',
				'margin-left': '110vw',
			}, 2000, );
		});
	});

	$("#atras").click(() => {
		$("#cv").animate({
			'margin-left': '0vw'
		}, 2000);
		$("#iniciar").animate({
			'position': 'relative',
			'margin-left': '110vw',
		}, 2000, );
	});

	$("#familydata").click(() => {
		$("#cv").animate({
			'margin-left': '-2500px'
		}, 2000);
		$("#iniciar").animate({
			'position': 'relative',
			'margin-left': '6vw',
		}, 2000);
		$("#guardar").click(() => {
			family = familydata();
			$("#cv").animate({
				'margin-left': '0vw'
			}, 2000);
			$("#iniciar").animate({
				'position': 'relative',
				'margin-left': '110vw',
			}, 2000, );
		});
	});

	$("#laboraldata").click(() => {
		$("#cv").animate({
			'margin-left': '-2500px'
		}, 2000);
		$("#iniciar").animate({
			'position': 'relative',
			'margin-left': '6vw',
		}, 2000);
		$("#guardar").click(() => {
			laboral = laboraldata();
			$("#cv").animate({
				'margin-left': '0vw'
			}, 2000);
			$("#iniciar").animate({
				'position': 'relative',
				'margin-left': '110vw',
			}, 2000, );
		})
	});

	$("#profesionaldata").click(() => {
		$("#cv").animate({
			'margin-left': '-2500px'
		}, 2000);
		$("#profesionaldescription").animate({
			'position': 'relative',
			'margin-left': '18vw',
		}, 2000);
		$("#guardar2").click(() => {
			profesional = profesionaldata();
		});
		$("#atras2").click(() => {
			$("#cv").animate({
				'margin-left': '0vw'
			}, 2000);
			$("#profesionaldescription").animate({
				'position': 'relative',
				'margin-left': '110vw',
			}, 2000, );
		})
	});


	$("#print").click(() => {
		//print = print(personal, family, laboral, profesional);
		$("#cv").animate({
			'margin-left': '-2500px'
		}, 2000);
		$("#ok").animate({
			'position': 'relative',
			'margin-left': '20vw',
		}, 2000, );
		var print = prin(personal,family,laboral,profesional);
	});
})