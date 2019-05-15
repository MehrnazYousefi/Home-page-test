if(typeof $ === undefined){
	throw "jQuery is not included in the page";
}

$.fn.extend({
	dateField: function () {
		$(this).on('focusout',function(){
			var val = $(this).val();
			// Convert arabic and persian digits to english digits
			var convertedValue = '';
			for (var i = 0; i < val.length; i++) {
				var ch = val.charCodeAt(i);
				if (ch >= 1776 && ch <= 1785) {
					convertedValue = convertedValue + String.fromCharCode(ch - 1728);
				}
				else if (ch >= 1632 && ch <= 1641) {
					// For Arabic & Unix digits.
					convertedValue = convertedValue + String.fromCharCode(ch - 1584);
				} else{
					convertedValue = convertedValue + String.fromCharCode(ch);
				}
			}
			val = convertedValue;
			val = val.replace(/(\d{4})\/([1-9]{1})$/ig,'$1/0$2');
			val = val.replace(/(\d{4})\/(\d{1})\/(\d+)$/ig,'$1/0$2/$3');
			val = val.replace(/(\d{4})\/(\d+)\/(\d{1})$/ig,'$1/$2/0$3');
			$(this).val(val);
		});
		$(this).on('keypress',function (e) {
			if(e.which === 8 || e.ctrlKey){
				return true;
			}

			var val = $(this).val();
			if(val.length == 10){
				return false;
			}

			var character = String.fromCharCode(e.which);
			if(!$.isNumeric(character)){
				return;
			}
			val = val + character;

			if(val.length === 4 || val.length === 7){
				val += '/';
			}

			$(this).val(val);

			return false;
		});

	}
});
