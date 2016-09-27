var registration = function(){
	// aca van las funciones de API consulta
	console.log("Archivo registry.js cargado");

	var users = {};

	function userCreator(user, name, last, pass, email){

			this.user = user,
			this.name = name,
			this.last = last,
			this.pass = pass,
			this.email = email
		};

	$("#createuser").on("click", function() {
			console.log("createuser click");
			var userDuplicate = false;
			var userQty = localStorage.length;
			var userCheck = {};
			var user = $("#user").val();
			var name = $("#name").val();
			var last = $("#last").val();
			var pass = $("#pass").val();
			var email = $("#email").val();


			users = new userCreator(user, name, last, pass, email);

// RECORRO EL LOCALSTORAGE PARA CHEQUEAR SI EXISTE
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
				localStorage.setItem(userQty + 1,JSON.stringify(users));
				alert("User Created, please now make your Login");
				app.loadTemplate("app","login", main);
			}
			else {
				console.log("That user/email already exist!");
			};
	});




/*
	function isEmpty( obj ) {
	  for ( var prop in obj ) {
	    return false;
	  }
	  return true;
	};

*/
};
