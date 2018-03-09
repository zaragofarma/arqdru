/* version 3*/
$(document).ready( function(){
	$( ".ellipse" ).css( {"width": $( window ).width()-30, "height":  $( window ).height()-30 });
	$( window ).resize(function() {
 		$( ".ellipse" ).css( {"width": $( window ).width()-30, "height":  $( window ).height()-30 });
	});
});
