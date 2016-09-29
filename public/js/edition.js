var edition = function() {
	// aca van las funciones de API consulta
	console.log("Archivo edition.js cargado");



	var user = sessionStorage.getItem('user');
	var userToEdit = {};
	for(i = 1; i <= localStorage.length; i++){
		userCheck = JSON.parse(localStorage.getItem(i));
		if (user == userCheck.user){
			userToEdit = JSON.parse(localStorage.getItem(i));

			$("#user").val(userToEdit.user);
			$("#name").val(userToEdit.name);
			$("#last").val(userToEdit.last);
			$("#pass").val(userToEdit.pass);
			$("#passCheck").val(userToEdit.passCheck);
			$("#email").val(userToEdit.email);



		};

		$("#edituser	").on("click", function() {
				$("#errorDisplay").text("");

				userToEdit.user = $("#user").val();
				userToEdit.name = $("#name").val();
				userToEdit.last = $("#last").val();
				userToEdit.pass = $("#pass").val();
				userToEdit.passCheck = $("#passCheck").val();
				userToEdit.email = $("#email").val();


				var emailRegexValidation = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i ;




				if( userToEdit.pass != userToEdit.passCheck || !emailRegexValidation.test(userToEdit.email)){
						$("#errorDisplay").text("Passwords doesn't match or your email has an invalid format");
						return
				}
				else {
					for(i = 1; i <= localStorage.length; i++){
						userCheck = JSON.parse(localStorage.getItem(i));
						if (userToEdit.Id == userCheck.Id){
							localStorage.setItem(userToEdit.Id,JSON.stringify(userToEdit));
							sessionStorage.setItem("user",userToEdit.user);

						};

					};
					app.loadTemplate("app","query", query);
				};

		});
	};


};
