var calculator = new function () {
	var me = this;
	
	function calculate(e) {
		e.preventDefault();
		
		var firstVal = parseInt(document.getElementById('first-value').value);
		var secondVal = parseInt(document.getElementById('second-value').value);
		
		if (isNaN(firstVal) || isNaN(secondVal)) {
			alert('You need to put two numbers')
		} else {
			alert(firstVal + secondVal);
		}
	}
	
	me.init = function () {
		var form = document.querySelector('form');
		
		form.addEventListener('submit', calculate)
	}
}

calculator.init();
