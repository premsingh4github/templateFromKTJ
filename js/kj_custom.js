// Add here all your JS customizations
$(document).ready(function(){
	$("#scroller").simplyScroll({pauseButton: true});
	$(".simply-scroll-btn-pause").hide();

	$.fn.pause=function(){
					// alert('kjsdhfkj');
		$(".simply-scroll-btn-pause").click();
	}

	$.fn.pause_out=function(){
		// alert('kjsdhfkj');
		$(".simply-scroll-btn-pause").click();
	}
});
