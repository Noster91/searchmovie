
var main = function(){

	$(document).ready(function(){


	console.log('Main.js Started');
	$("#userLoggued").text("");



		$("#login").on('click', function() {
	//Aca va todo el proceso de loguear el user en el storage con sus parametros
			console.log("Deberia chequear si existe le usuario y enviarme al query.html");

			$("#errorDisplay").text("");


			var user = $("#user").val();
			var pass = $("#pass").val();
			var userCheck = {};
			var userValidator = false;

			if(localStorage.length > 0) {
				for(i = 1; i <= localStorage.length; i++){
					userCheck = JSON.parse(localStorage.getItem(i));
					if ((user == userCheck.user && pass == userCheck.pass) && user != ""){
						userValidator = true;
						sessionStorage.setItem('user', user);

						console.log("The user exist");
						app.loadTemplate("app", "query", query);
						break
					}
				};
				if(!userValidator){
					$("#errorDisplay").text("User & Password don't match");
				};
			};





		});

	    	$("#registry").on('click', function() {

		   	app.loadTemplate("app", "registry", registration);
		});




	});
};
