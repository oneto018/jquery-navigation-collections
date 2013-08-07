function fit(){
		// get the width of the textarea minus scrollbar
	var textareaWidth = document.getElementById("textarea").scrollWidth;

	// width of our wrapper equals width of the inner part of the textarea
	document.getElementById("wrapper").style.width = textareaWidth + 'px';	
	}
	
function showSplash(){
		var h=$(window).height();
		var w=$(window).width();
	
	$('#splash').css('width',w+'px').css('height',h+'px');
	
	
	$('#splash').removeClass('hide');
	}

$(window).load(function(){
	var th=$(window).height();
	$('.scroll').click(function(e){
		e.preventDefault();
			$('#splash').addClass('hide');
			var target=$(this).attr('href');
			console.log($.scrollTo($(target),800));
			
			return false;
		});
		
		/*
		
		$("#splash.hide").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', 
		function() {
				$(this).css('z-index',1);
		});
		* 
		*/
		
		$('.cell').css('line-height',(th/2)+'px');
		
		$('#control').mouseover(function(){
				showSplash();
			});
			
			$('#control').click(function(){
				showSplash();
			});
	});
	
