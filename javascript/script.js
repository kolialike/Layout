jQuery(function($){
 $('.flexslider').flexslider({
    animation: "slide"
  });

  // menu
  var body = $("body");
	var menuButton = $(".menu-button");
	menuButton.on("click", function(event){
		body.toggleClass("open");
		event.stopPropagation();
	});
	body.on("click", function(){
		body.removeClass("open");
	});

	//select
	$(".js-example-basic-single").select2();
	


});