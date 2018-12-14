var counter = (function(){
	var _value;

	var _checkInteger = function(x){
		if ((x^0) === x) {
			return true;
		} else {
			return false;
		}
	}

	var setValue = function(x){
		if ( _checkInteger(x) ){
			_value = x;
		} else {
			console.log('Неверное значение.');
		}
	}

	var increaseCounter = function(){
		_value++;
	}

	var decreaseCounter = function(){
		_value--;
	}

	var printCounter = function(){
		console.log(_value);
	}

	return {
		setValue,
		increaseCounter,
		decreaseCounter,
		printCounter
	}
}())

counter.setValue(-20);
counter.printCounter();

counter.setValue(5); 
counter.increaseCounter();
counter.printCounter(); 

counter.setValue(5); 
counter.decreaseCounter();
counter.printCounter(); 

counter.setValue(-2.2);
