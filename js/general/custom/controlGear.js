$(document).ready(function() {
	var showYear = $(".showYear");
	var year = new Date().getFullYear();
	var range = year - 2008;

	$.each(showYear, function(key, value) {
		$(this).text(year + 1 - key);
	});

	var rotationSnap = 45;

	Draggable.create("#controlGear", {
		type : "rotation",
		bounds : {
			minRotation : 0,
			maxRotation : rotationSnap * range
		},
		throwProps : true,
		snap : function(endValue) {
			var result = Math.round(this.rotation / rotationSnap);

			$.each(showYear, function(key, value) {
				$(this).text(year + 1 - key - result);
			});

			return result * rotationSnap;
		},
		onDrag : function() {

		}
	});
});
