var deleteUser = function() {

	var user = sessionStorage.getItem('user');
	var userLog = {};
	var userErased = {};

	for(i = 1; i <= localStorage.length; i++){
		userCheck = JSON.parse(localStorage.getItem(i));
		if (user == userCheck.user){
			userLog = JSON.parse(localStorage.getItem(i));
			userErased = {
					Id: userLog.Id
			};
			$("#userName").val(userLog.user);

		};
	};



	$("#deleteuser").on("click", function() {

		var userName = $("#userName").val();
		var userPass = $("#userPass").val();

		if ((userName == userLog.user) && (userPass == userLog.pass)){
				localStorage.setItem(userLog.Id,JSON.stringify(userErased));
				sessionStorage.clear();
				app.loadTemplate("app","login", main);
			}
			else {
				$("#errorDisplay").text("User or pass 	doesn't match with a real User");
			};
	});




};
