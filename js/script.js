var BlowUpHolder = false;
var $screen = null;
(function ( $ ) {
	
	
	$.fn.shrink = function() {
			
			var df1 = $.Deferred()
			var $that = this;
			var scaleSize = $that.attr('data-size');
			var $content = $($that.attr('data-content'));
			$content.fadeOut('fast',function(){
				$that.addClass('shrinking');
				$that.fadeIn('fast',function(){
					$('body').css('background-color','#fff')
					
					$that.transition({scale:scaleSize},800,'ease',function(){
						$that.removeClass('behind');
						$that.removeClass('shrinking');
						df1.resolve();
					});
				});
			});
			
		return df1;
	};
	
	$.fn.BlowUp = function(){
		
		BlowUpHolder = true;
		return this.each(function(){
			
			var $that = $(this).addClass('behind');
			
			var c = $that.attr('data-color');
			var content = $that.attr('data-content');
			$screen.css('display','block');
			
			$that.transition({scale:1},500);
			$that.transition({
				scale:30
			},1000,'ease',function(){
				$('body').css('background-color',c);
				$(content).fadeIn();
				
				$that.fadeOut('fast',function(){
					BlowUpHolder = false;
					$screen.css('display','none');
				});
			});
		});
	};
	
	
}( jQuery ));



$(document).ready(function() {
	$screen = $('#screen');
	var $circles = $('.circle');
	var $body = $('body');
	
	
	$('.circle').each(function(){
		
		var c= $(this).attr('data-color');
		$(this).css({'background-color':c});
		
	});
	
	$circles.click(function(){
		$active = $('.circle.behind');
		if($active.length > 0 ){
			$.when($active.shrink()).then(
				$(this).BlowUp()
			);
			
		}else{
			$(this).BlowUp();
		}
		
		
		
	});
});
