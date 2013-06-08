define(['cache'],function(cache){
	var doc = window.document,
		w3c = !!doc.addEventListener,
		expando = 'snandy' + ('' + Math.random()).replace(/\D/g,''),
		triggered,
		addListener = w3c?
			function(el,type,fn){el.addEventListener(type,fn,false);}:
			function(el,type,fn){el.attachEvent('on' + type , fn);},
		removeListener = w3c ?
			function(el,type,fn){el.addEventListener(type,fn,false);}:
			function(el,type,fn){el.attachEvent('on' + type , fn);};

	return{
		bind:bind,
		unbind:unbind,
		trigger:trigger
	};
});