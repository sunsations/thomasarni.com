$(document).ready(function(){
    
    $('#blog .link').click(function(e) {
        e.preventDefault()
        var link = $(this)
        $('#wholeAnnouncement').slideDown('slow', function() {
            link.hide()
            $(window).trigger('resize')
        })
    })

	var scrolls, paddings, 
		els = $("#menu a"),
		marker = $("#marker");
	
    $(window).scroll(function(){
		var scroll = $(this).scrollTop();
		for(var i in scrolls){
			if ( scrolls[i] > scroll-100 ) break;
		}
		marker.css({left: paddings[i]+"px"});
		els.removeClass("active").eq(i).addClass("active");
	});
	
	$(window).resize(function(){
		scrolls = [], paddings = [];
		els.each(function(i){
			paddings.push( $(this).offset().left + $(this).width()/2 );
			var id = $(this).attr("href");
			scrolls.push( $(id).offset().top );
		});
		scrolls[1] = scrolls[1] + 200;
		$(window).trigger("scroll");
	}).trigger("resize");

	els.click(function(e){
		e.preventDefault();
		var id = $(this).attr("href");
		$('html,body').addClass("scrolling").animate({
			scrollTop: $(id).offset().top + "px"
		},1000).removeClass("scrolling");
		return false;
	});


});
