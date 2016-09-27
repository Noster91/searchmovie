	router = function() {
    var Router = {};
    Router.evalRoute = function() {
        var pathName = $(location).attr("pathname");
        console.log("pathname = " + pathName);

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
            console.log("-----Se inicio  la app-----------");
            router.evalRoute();

        });
    }();

    myApp.loadTemplate = function(load, partialName, callback) {
        $("#" + load).load("../sections/" + partialName + ".html", callback);
    }
    return myApp;
}(router);
