/* This is a singleton object */
var myScript = new function() {
	
	var me = this,
		navList;
		
	function clickEvent(e) {
		var target = e.target;
		console.log(e.target);
		if (target.nodeName !== 'A') {
			return;
		}
		
		e.preventDefault();
		console.log(e);
		
		alert(target.innerHTML);
	}
	
	me.init = function () {
		navList = document.querySelector	('ul.top-nav');
		
		console.log(navList);
		navList.addEventListener('click', clickEvent);
		
	}	
}

myScript.init();
