$(document).ready(function(){
	$('.navigation').ezjax({	
						container: '#ezjax_content',
						initial: 'travel.html',
						effect: 'fade',
						easing: 'easeOutBounce',
						bind: 'a'
					});
	$('a.navigation').click(function(event){
	   $("a.navigation").removeClass("selected");
	   $(this).addClass("selected");
	 });
  	$("a#scrollup").click(function(event){
	   event.preventDefault();
		$('#thumbtable').animate({
			"top": "-=350"
			},
			500, function() {
			}
		);
	 });
  	$("a#scrolldown").click(function(event){
	   event.preventDefault();
		$('#thumbtable').animate({
			"top": "+=350"
			},
			500, function() {
			}
		);
	 });
});