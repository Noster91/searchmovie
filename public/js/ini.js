	router = function() {
    var Router = {};
    Router.evalRoute = function() {
        var pathName = $(location).attr("pathname");

	   if (sessionStorage.getItem("user") != null ) {

		   app.loadTemplate("app", "query", query);
	   }
	   else{
		   app.loadTemplate("app", "login", main);
	   };
    };


    return Router;
}();

app = function(router) {
    var myApp = {};
    myApp.init = function() {
        $(document).ready(function() {
            console.log("App Inicializada");
            router.evalRoute();

        });
    }();

    myApp.loadTemplate = function(load, partialName, callback) {
        $("#" + load).load("../sections/" + partialName + ".html", callback);
    }
    return myApp;
}(router);
