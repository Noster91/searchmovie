var query = function(){
	// aca van las funciones de API consulta
	console.log("Archivo query.js cargado");

	$("#userLoggued").text("Hola, " + sessionStorage.getItem('user'));



	$("#logout").on('click', function() {
			sessionStorage.clear();
			app.loadTemplate("app","login", main);
			$("#userLoggued").text("");


	});

	$("#editUser").on('click', function() {
			app.loadTemplate("app","edition", edition);
	});
	$("#userLoggued").on('click', function() {
			app.loadTemplate("app","edition", edition);
	});



	$("#find").on('click', function() {
		var title = $("#query").val();
		$('#results').text("");
		$.ajax({
			  type:'get',
			  url: 'http://www.omdbapi.com/?s=' + title,
			  dataType: 'json',
			  success: function(data) {
				  for(var i in data.Search){
				      var resultados = data.Search[i];
				      $('#results').append(
						 '<div class="moviebox col-xs-4 col-md-4">' +

							'<img class="poster col-xs-8 col-xs-offset-2 col-md-8 col-md-offset-2" src="' + resultados.Poster + '"' + '>' +

						 	'<h1 class="title col-xs-12 col-md-4">' + resultados.Title + '</h1>' +
						'</div>')
					 };
			  },
			  error: function(data) {
			    console.log("No volvio información")

			  }

	  	});
	});

};
