var registration = function(){
	// aca van las funciones de API consulta
	console.log("Archivo registry.js cargado");
	$("#userLoggued").text("");

	var users = {};

	function userCreator(id, user, name, last, pass, email){

			this.Id = id,
			this.user = user,
			this.name = name,
			this.last = last,
			this.pass = pass,
			this.email = email
		};

	$("#createuser").on("click", function() {
			$("#errorDisplay").text("");


			var userDuplicate = false;
			var userQty = localStorage.length;
			var userCheck = {};
			var id = userQty + 1;
			var user = $("#user").val();
			var name = $("#name").val();
			var last = $("#last").val();
			var pass = $("#pass").val();
			var passCheck = $("#passCheck").val();
			var email = $("#email").val();

			/* RegEx para validar un mail bien ingresado */
			var emailRegexValidation = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i ;

			users = new userCreator(id, user, name, last, pass, email);

/* RECORRO EL LOCALSTORAGE PARA CHEQUEAR SI EXISTE */
			if(localStorage.length > 0){
				for(i = 1; i <= localStorage.length; i++){
					userCheck = JSON.parse(localStorage.getItem(i));
					if (users.user == userCheck.user || users.email == userCheck.email){
						userDuplicate = true;
						break
					};

				};
			};

			if(!userDuplicate) {
				if( pass != passCheck || !emailRegexValidation.test(email)){
					$("#errorDisplay").text("Passwords doesn't match or your email has an invalid format");
					return
				}
				else {
					localStorage.setItem(users.Id,JSON.stringify(users));
					alert("User Created, please now make your Login");
					app.loadTemplate("app","login", main);
				};
			}
			else {
				$("#errorDisplay").text("That User/email already exist, try with another one");
			};
	});


};
