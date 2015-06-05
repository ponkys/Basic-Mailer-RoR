// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

$(document).on("ready", function() {
	// Codigo a ejecutar cuando el html esté listo.
	$('form').submit(function(event) {
		event.preventDefault();
		var nombre = $('input#input_name').val();
		var email = $('input#input_email').val();
		var password = $('input#input_password').val();
		$(".index span.name, .index span.name_dos").append(nombre);
		$(".index span.email, .index span.email_dos").append(email);
		$(".index span.password, .index span.password_dos").append(password);
		$(this)[0].reset();
	});
});