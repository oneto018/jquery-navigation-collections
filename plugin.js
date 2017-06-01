	//https://github.com/finom/balalaika
	var $=function(t,e,n,i,o,r,s,u,c,f,l,h){return h=function(t,e){return new h.i(t,e)},h.i=function(i,o){n.push.apply(this,i?i.nodeType||i==t?[i]:""+i===i?/</.test(i)?((u=e.createElement(o||"q")).innerHTML=i,u.children):(o&&h(o)[0]||e).querySelectorAll(i):/f/.test(typeof i)?/c/.test(e.readyState)?i():h(e).on("DOMContentLoaded",i):i:n)},h.i[l="prototype"]=(h.extend=function(t){for(f=arguments,u=1;u<f.length;u++)if(l=f[u])for(c in l)t[c]=l[c];return t})(h.fn=h[l]=n,{on:function(t,e){return t=t.split(i),this.map(function(n){(i[u=t[0]+(n.b$=n.b$||++o)]=i[u]||[]).push([e,t[1]]),n["add"+r](t[0],e)}),this},off:function(t,e){return t=t.split(i),l="remove"+r,this.map(function(n){if(f=i[t[0]+n.b$],u=f&&f.length)for(;c=f[--u];)e&&e!=c[0]||t[1]&&t[1]!=c[1]||(n[l](t[0],c[0]),f.splice(u,1));else!t[1]&&n[l](t[0],e)}),this},is:function(t){return u=this[0],(u.matches||u["webkit"+s]||u["moz"+s]||u["ms"+s]).call(u,t)}}),h}(window,document,[],/\.(.+)/,0,"EventListener","MatchesSelector");
	
	$.fn.hasClass=function(s){return!!this[0]&&this[0].classList.contains(s)};
	$.fn.toggleClass=function(a,b){return this.forEach(function(c){var d=c.classList;"boolean"!=typeof b&&(b=!d.contains(a)),d[b?"add":"remove"].apply(d,a.split(/\s/))}),this};
	$.fn.addClass=function(s){return this.forEach(function(a){var t=a.classList;t.add.apply(t,s.split(/\s/))}),this};
	$.fn.removeClass=function(s){return this.forEach(function(t){var i=t.classList;i.remove.apply(i,s.split(/\s/))}),this};

	var addStyleToHead = function(css){
		head = document.head || document.getElementsByTagName('head')[0],
		    style = document.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet){
		  style.styleSheet.cssText = css;
		} else {
		  style.appendChild(document.createTextNode(css));
		}
		head.appendChild(style);
	};

	
	

	var initChatMaya = function(options){
		options = options||{};
		var endPoint = (options.endPoint)? options.endPoint:'http://t1.nanolocal.in/chatbox';
		var api_key = options.api_key;
		var user_id = (options.user_id)?options.user_id:0;
		var url = "http://t1.nanolocal.in:8083/chat/page/"+api_key+"/u/"+user_id;		

		console.log("endpoint",url);
		var element = options.target?document.getElementById(options.target):document.body;
		$(function() {
			var cssToAdd = ".chat-api-container-frame *{margin:0;padding:0}.chat-api-container-frame{position:fixed!important;z-index:2;width:320px!important;height:300px!important;transform:translate(0,264px)!important;bottom:0!important;right:10px!important;background-color:transparent!important;transition:all .5s!important}.chat-api-container-frame.active{transform:translate(0,0px)!important}.chat-api-content-frame{border:1px solid #ccc!important;background-color:#fff}.chat-api-content-frame,.chat-api-content-frame iframe{display:block!important;width:100%!important;height:265px!important}.chat-api-header{cursor:pointer!important;font-weight:normal !important;  ;padding-left:10px!important;height:26px!important;line-height:26px!important;font-family:verdana!important;background-color:#5898c6!important;font-size:13px!important;color:#fff!important;position:relative!important;border-radius:7px 7px 0 0!important}.chat-api-header i{display:block!important;height:15px!important;width:15px!important;position:absolute!important;right:10px!important;top:10px!important;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QUPBiAxQZiliwAAAS1JREFUKM/Nkj1uwkAUhCcU1K6pcgpLcAUkLsB9QHJHiQRXcAUd+ACpLLthkcHajuKtbEsUi2R70mBkAkkomWa1M+97evsDvIVc1/0z7/f7j2aaps5qteoBwH6/fwo2/nq97qVp6gAAlFJOURRJlmWnMAyHAJAkyR3Y7MMwHGZZdiqKIlFKOfA8rysiPklaa89xHI8aaLlc3hrEcTyy1p5JUkR8z/O6t1BEtiRpjLFBEAwAgCQAIAiCgTHGXsHt3VhNkTFmUVUVRYS73W58PetYRFhVFY0xi3b9QwOt9byua1prL4fD4ctae6nrmlrr+VOwNXpziX5ZliTJsiyplPLb+a86Ho8fABBF0UxrzSiKZm3/X+V5jul02tlsNp+TyaST5/nrP615op/r++gbuATnWIhgtkIAAAAASUVORK5CYII=)!important;transition:all .5s!important;transform:rotate(180deg)!important}.chat-api-container-frame.active .chat-api-header i{transform:rotate(0deg)!important}";

			addStyleToHead(cssToAdd);
			var html_str = '<div class="chat-api-container-frame"><div class="chat-api-header"><div>Maya chat</div> <i class="icon"></i></div><div class="chat-api-content-frame"> <iframe src="'+url+'" frameborder="0"></iframe></div></div>';

			element.innerHTML = element.innerHTML+html_str;

			var $chatHeader = $(".chat-api-header");
			var $chatFrame = $(".chat-api-container-frame");
			$chatHeader.on("click",function(){
				$chatFrame.toggleClass("active");
			});
			
		});
	
	};
  