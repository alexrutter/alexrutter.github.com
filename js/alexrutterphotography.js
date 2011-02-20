var parsePixels = function(cssPropertyValue) {
	if (cssPropertyValue.indexOf("px") === cssPropertyValue.length - 2) {
		return parseInt(cssPropertyValue.substr(0, cssPropertyValue.length - 2));
	}
}

var bounce = function(element, change1, change2) {
	element.animate({ "top": change1 },	100, function() {
		element.animate({ "top": change2 },	100, function() {});
	});
}

$(document).ready(function(){
	$('.navigation.gallerysection').click(function(event) {
		event.preventDefault();
		var url = $(this).attr('href');
		var container = $("div#scrollarea");
		if ($(".main.gallerysection").hasClass("inactive")) {
			$(".main.infosection").addClass("inactive");
			$(".main.gallerysection").removeClass("inactive");
		}
		container.animate({ opacity: 0.0 }, 'normal', function(){
			container.load(url, function(){
				$("a.thumb").click(function(event){
					event.preventDefault();
					$('img.feature').attr('src', $(this).attr('href'));
				});
				container.animate({ opacity: 1.0 }, 'normal');
			});
		});
		return false;
	});
	$("div#scrollarea").load("travel.html");
	$('.navigation.infosection').click(function(event) {
		event.preventDefault();
		var url = $(this).attr('href');
		var container = $(".main.infosection");
		container.css({ opacity: 0.0 });
		if ($(".main.infosection").hasClass("inactive")) {
			$(".main.gallerysection").addClass("inactive");
			$(".main.infosection").removeClass("inactive");
		}
		container.load(url, function(){
			container.animate({ opacity: 1.0 }, 'normal');
		});
	});
	$('a.navigation').click(function(event){
		$("a.navigation").removeClass("selected");
		$(this).addClass("selected");
	});
  	$("#scrolldown").click(function(event){
	   event.preventDefault();
		var thumbtable = $('#thumbtable');
		var currentTop = parsePixels(thumbtable.css('top'));
		var tableHeight = parsePixels(thumbtable.css('height'));
		var targetTop = Math.max(currentTop - 350, 350 - tableHeight);
		if (currentTop === targetTop) {
			bounce(thumbtable, "-=30", "+=30");
		} else {
			thumbtable.animate({ "top": targetTop }, 500, function() {});
		}
	 });
  	$("#scrollup").click(function(event){
	   event.preventDefault();
		var thumbtable = $('#thumbtable');
		var currentTop = parsePixels(thumbtable.css('top'));
		var targetTop = Math.min(currentTop + 350, 0)
		if (currentTop === targetTop) {
			bounce(thumbtable, "+=30", "-=30");
		} else {
			thumbtable.animate({ "top": targetTop }, 500, function() {});
		}
	 });
});