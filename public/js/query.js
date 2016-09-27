var query = function(){
	// aca van las funciones de API consulta
	console.log("Archivo query.js cargado");

	$("#logout").on('click', function() {
			sessionStorage.clear();
			app.loadTemplate("app","login", main);
	});


	$("#find").on('click', function() {
		var title = $("#query").val();

		$.ajax({
			  type:'get',
			  url: 'http://www.omdbapi.com/?s=' + title,
			  dataType: 'json',
			  success: function(data) {
				  for(var i in data.Search){
				      var resultados = data.Search[i];
				      $('#results').append(
						 '<div><h1>' + resultados.Title + '</h1><h1>' + resultados.Year + '</h1></div>')
					 };
			  },
			  error: function(data) {
			    console.log("No volvio información")

			  }

	  	});
	});

};
